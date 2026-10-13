#!/usr/bin/env python3
"""Static validation for the generated guide (standard library only)."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from html import unescape
from collections import Counter
import re

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'

class Page(HTMLParser):
    def __init__(self, data):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.articles, self.codes = [], [], [], {}
        self.article_depth = 0
        self.current_article = []
        self.code_id = None
        self.copy_targets, self.statuses = [], 0
        self.feed(data)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        if tag in ('a', 'link') and 'href' in attrs: self.links.append(attrs['href'])
        if tag in ('script', 'img') and 'src' in attrs: self.links.append(attrs['src'])
        if tag == 'article': self.article_depth += 1
        if tag == 'code' and 'id' in attrs:
            self.code_id = attrs['id']; self.codes[self.code_id] = ''
        if 'data-copy' in attrs: self.copy_targets.append(attrs['data-copy'])
        if attrs.get('role') == 'status' and attrs.get('aria-live') == 'polite': self.statuses += 1
    def handle_endtag(self, tag):
        if tag == 'article':
            self.article_depth -= 1
            self.articles.append(''.join(self.current_article)); self.current_article = []
        if tag == 'code': self.code_id = None
    def handle_data(self, text):
        if self.article_depth: self.current_article.append(text)
        if self.code_id: self.codes[self.code_id] += text

pages = {p.name: Page(p.read_text()) for p in DIST.glob('*.html')}
assert len(pages) == 13, f'Expected 13 pages, found {len(pages)}'
links = 0
for name, page in pages.items():
    assert len(page.ids) == len(set(page.ids)), f'Duplicate IDs in {name}'
    assert all(t in page.codes for t in page.copy_targets), f'Broken copy target in {name}'
    assert page.statuses == len(page.copy_targets), f'Missing accessible status in {name}'
    data = (DIST/name).read_text()
    assert not re.search(r'/Users/|/home/|ai-guide-planning|file://|localhost|127\.0\.0\.1|Astra/Sol/Luna|mcp__', data), f'Private or local reference in {name}'
    for href in page.links:
        url = urlsplit(href)
        if url.scheme or url.netloc: continue
        assert not url.path.endswith('.md'), f'Markdown link in {name}: {href}'
        dest = unquote(url.path) or name
        assert (DIST/dest).is_file(), f'Missing target in {name}: {href}'
        if url.fragment:
            assert dest in pages and unquote(url.fragment) in pages[dest].ids, f'Missing anchor in {name}: {href}'
        links += 1

normalize = lambda s: re.sub(r'\s+', ' ', s).strip()
def md_text(s):
    s = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', s)
    s = re.sub(r'^#{1,6} +', '', s, flags=re.M)
    s = re.sub(r'^> ?', '', s, flags=re.M)
    return re.sub(r'[*`]', '', s)
for file, output in [('FIVE-MINUTE-INTRO.md','index.html'), ('TOKYO-WALKTHROUGH.md','tokyo.html')]:
    source = (ROOT/'content'/file).read_text()
    assert normalize(md_text(source)) == normalize(pages[output].articles[0]), f'Approved body differs: {file}'
    draft = ROOT.parent/'ai-guide-draft'/file
    if draft.is_file(): assert draft.read_bytes() == (ROOT/'content'/file).read_bytes(), f'Approved source differs: {file}'
for file, output in [('PROMPTS.md','prompts.html'),('INSTRUCTIONS.md','instructions.html')]:
    fences = re.findall(r'```text\n([\s\S]*?)\n```', (ROOT/'content'/file).read_text())
    copied = list(pages[output].codes.values())
    assert fences == copied, f'Copy text differs in {output}'
instructions = re.search(r'```text\n([\s\S]*?)\n```', (ROOT/'content/INSTRUCTIONS.md').read_text())[1] + '\n'
for name in ['codex-instructions.txt', 'claude-instructions.txt']:
    assert (DIST/'downloads'/name).read_text() == instructions, f'Template mismatch: {name}'
setup_prompt = re.findall(r'```text\n([\s\S]*?)\n```', (ROOT/'content/INSTRUCTIONS.md').read_text())[1] + '\n'
assert (DIST/'downloads/setup-prompt.txt').read_text() == setup_prompt, 'Setup prompt download mismatch'
assert len(pages['print.html'].articles) == 12, 'Print edition missing chapters'
source_blocks = [block for source in (ROOT/'content').glob('*.md')
                 for block in re.findall(r'```[^\n]*\n([\s\S]*?)\n```', source.read_text())]
assert Counter(pages['print.html'].codes.values()) == Counter(source_blocks), 'Print edition copy text differs from chapter sources'
print(f'PASS: 13 pages; {links} internal references; unique IDs; approved intro/Tokyo body and source; {len(source_blocks)} exact copy blocks; 3 exact downloads; 12 print chapters; no private paths.')
