import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { Marked } from './vendor/marked.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const chapters = [
  ['FIVE-MINUTE-INTRO.md', 'index', 'The five-minute version', 'Start here'],
  ['TOKYO-WALKTHROUGH.md', 'tokyo', 'A Tokyo trip', 'Put it into practice'],
  ['PRACTICAL-EXAMPLES.md', 'everyday-examples', 'Files & an overloaded week', 'Put it into practice'],
  ['WORKING-WITH-AGENTS.md', 'working-with-agents', 'Research & delegation', 'Put it into practice'],
  ['PROMPTS.md', 'prompts', 'Copyable prompts', 'Use it again'],
  ['INSTRUCTIONS.md', 'instructions', 'Standing instructions', 'Use it again'],
  ['CODEX-SETUP.md', 'codex', 'Set up Codex', 'Set up your tools'],
  ['CLAUDE-SETUP.md', 'claude', 'Set up Claude', 'Set up your tools'],
  ['HOST-AVAILABILITY.md', 'host-availability', 'Keep your computer available', 'Set up your tools'],
  ['EXPENSES-WALKTHROUGH.md', 'expenses', 'An expenses workbook', 'Optional worked example'],
  ['SOURCES.md', 'sources', 'Sources & further reading', 'Reference'],
  ['SETUP-SOURCES.md', 'setup-sources', 'Product sources & limits', 'Reference'],
].map(([file, slug, label, group], index) => ({ file, slug, label, group, index }));
const byFile = new Map(chapters.map(c => [c.file, c]));
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const slugify = value => value.toLowerCase().replace(/<[^>]*>/g, '').replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-');
const plain = value => value.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`_]/g, '');
const origin = 'https://use-ai-well-7q4m.kitgotspark.chatgpt.site';

function targetLink(href, print = false, chapter) {
  const [pathname, hash = ''] = href.split('#');
  const name = pathname.split('/').at(-1);
  const evidence = { 'CODEX-SETUP-EVIDENCE.md': 'codex', 'CLAUDE-SETUP-EVIDENCE.md': 'claude' };
  if (evidence[name]) return print ? `#setup-sources--${evidence[name]}` : `setup-sources.html#${evidence[name]}`;
  if (byFile.has(name)) {
    const dest = byFile.get(name);
    return print ? `#${dest.slug}${hash ? '--' + hash : ''}` : `${dest.slug}.html${hash ? '#' + hash : ''}`;
  }
  if (!pathname && hash && print) return `#${chapter.slug}--${hash}`;
  return href;
}

function render(source, chapter, print = false) {
  let currentHeading = chapter.label;
  let codeIndex = 0;
  const headings = [];
  const ids = new Map();
  const parser = new Marked({ gfm: true, breaks: false });
  parser.use({ renderer: {
    heading({ tokens, depth, text }) {
      const label = plain(text);
      let id = slugify(label);
      const count = ids.get(id) || 0;
      ids.set(id, count + 1);
      if (count) id += `-${count}`;
      const target = print ? `${chapter.slug}--${id}` : id;
      if (depth === 2) { headings.push({ label, id: target }); currentHeading = label; }
      return `<h${depth} id="${escape(target)}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      if (/^(javascript|data|vbscript):/i.test(href)) throw new Error(`Unsafe URL: ${href}`);
      const dest = targetLink(href, print, chapter);
      return `<a href="${escape(dest)}"${title ? ` title="${escape(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
    },
    code({ text }) {
      codeIndex++;
      const id = `${chapter.slug}-copy-${codeIndex}`;
      const noun = chapter.slug === 'instructions' && codeIndex === 1 ? 'instructions' : 'prompt';
      return `<div class="copy-block"><div class="copy-toolbar no-print"><span>${escape(currentHeading)}</span><button type="button" class="copy-button" data-copy="${id}" aria-label="Copy ${noun}: ${escape(currentHeading)}">Copy ${noun}<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="6" width="9" height="11" rx="1"/><path d="M12 6V3H3v11h4"/></svg></button></div><pre><code id="${id}">${escape(text)}</code></pre><span class="copy-status no-print" role="status" aria-live="polite"></span></div>\n`;
    },
    table(token) { return `<div class="table-scroll" role="region" aria-label="${escape(currentHeading)} table" tabindex="0">${Object.getPrototypeOf(this).table.call(this, token)}</div>`; },
    html() { throw new Error('Raw HTML is not allowed in reader source'); }
  }});
  let html = parser.parse(source);
  if (chapter.slug === 'instructions' && !print) html = html.replace('<h2', '<div class="download-strip"><span>Prefer a file?</span><a href="downloads/setup-prompt.txt" download>Personalize &amp; merge prompt <span aria-hidden="true">↓</span></a><a href="downloads/codex-instructions.txt" download>Codex template <span aria-hidden="true">↓</span></a><a href="downloads/claude-instructions.txt" download>Claude template <span aria-hidden="true">↓</span></a><small>Paste the setup prompt into your agent, or review a template before saving as AGENTS.md or CLAUDE.md.</small></div><h2');
  return { html, headings };
}
function nav(current, mobile = false) {
  let group = '';
  return `<nav aria-label="${mobile ? 'Mobile chapters' : 'Chapters'}"><ol class="chapters">${chapters.map(c => {
    const groupHeader = group !== c.group ? `<li class="nav-group" aria-hidden="true">${escape(c.group)}</li>` : '';
    group = c.group;
    return `${groupHeader}<li><a href="${c.slug}.html"${current === c.slug ? ' aria-current="page"' : ''}><span class="chapter-number">${String(c.index + 1).padStart(2, '0')}</span><span>${escape(c.label)}</span></a></li>`;
  }).join('')}</ol></nav>`;
}
function header(current) {
  return `<header class="site-header"><a class="wordmark" href="index.html"><span class="mark" aria-hidden="true">a<span>i</span></span><span>AI, put to work<small>An everyday field guide</small></span></a><nav class="quick-links" aria-label="Quick links"><a href="index.html"${current === 'index' ? ' aria-current="page"' : ''}>Start in 5 minutes</a><a href="prompts.html"${current === 'prompts' ? ' aria-current="page"' : ''}>Copy a prompt <span aria-hidden="true">↗</span></a><a href="print.html">Whole guide <span aria-hidden="true">↗</span></a></nav><details class="mobile-menu"><summary>Chapters <span aria-hidden="true">＋</span></summary><div>${nav(current, true)}<a class="mobile-print" href="print.html">Read / print the whole guide →</a></div></details></header>`;
}
function document(title, description, body, slug) {
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${escape(title)} · AI, put to work</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${origin}/${slug}.html"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:type" content="article"><meta property="og:url" content="${origin}/${slug}.html"><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/styles.css"><script src="assets/guide.js" defer></script></head><body${slug === 'print' ? ' class="print-edition"' : ''}><a class="skip-link" href="#main">Skip to the guide</a>${body}</body></html>\n`;
}

await mkdir(dist, { recursive: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });
await mkdir(path.join(dist, 'downloads'), { recursive: true });
for (const c of chapters) {
  c.source = await readFile(path.join(root, 'content', c.file), 'utf8');
  c.title = c.source.split('\n')[0].replace(/^# /, '');
  c.words = c.source.split(/\s+/).length;
}
for (const c of chapters) {
  const { html, headings } = render(c.source, c);
  const previous = chapters[c.index - 1];
  const next = chapters[c.index + 1];
  const toc = headings.length ? `<aside class="page-toc"><p>On this page</p><nav aria-label="On this page"><ol>${headings.map(h => `<li><a href="#${h.id}">${escape(h.label)}</a></li>`).join('')}</ol></nav><a class="print-link" href="print.html">Read / print the whole guide <span aria-hidden="true">↗</span></a></aside>` : '';
  const body = `${header(c.slug)}<div class="reading-layout"><aside class="chapter-sidebar">${nav(c.slug)}<p class="sidebar-note">A practical way to ask,<br>approve, check, and refine.</p></aside><main id="main" tabindex="-1"><div class="chapter-meta"><span>${String(c.index + 1).padStart(2, '0')} / ${escape(c.group)}</span><span>${c.slug === 'index' ? 5 : Math.max(2, Math.ceil(c.words / 190))} min read</span></div><article class="prose">${html}</article><nav class="chapter-pagination no-print" aria-label="Continue reading">${previous ? `<a href="${previous.slug}.html"><small>← Previous</small><span>${escape(previous.label)}</span></a>` : '<span></span>'}${next ? `<a href="${next.slug}.html"><small>Next →</small><span>${escape(next.label)}</span></a>` : '<a href="prompts.html"><small>Put it to work →</small><span>Choose a starting prompt</span></a>'}</nav><footer class="page-footer">A guide to useful work, with checks you can see.<span><a href="sources.html">Sources &amp; limits</a> · <a href="https://github.com/Yottawatts/ai-put-to-work">GitHub</a></span></footer></main>${toc}</div>`;
  await writeFile(path.join(dist, `${c.slug}.html`), document(c.title, `An everyday AI field guide. ${c.title}.`, body, c.slug));
}
const printContents = `<nav class="print-contents" aria-label="Whole guide chapters"><h2>Contents</h2><ol>${chapters.map(c => `<li><a href="#${c.slug}">${escape(c.title)}</a></li>`).join('')}</ol></nav>`;
const printBody = `${header('print')}<main id="main" class="whole-guide" tabindex="-1"><div class="print-introduction"><p class="eyebrow">The complete field guide</p><h1>AI, put to work</h1><p>All chapters in one place, including copyable prompts, setup notes, and sources.</p><button class="print-button no-print" type="button" data-print>Print / save as PDF <span aria-hidden="true">↗</span></button></div>${printContents}${chapters.map(c => `<section class="print-chapter" id="${c.slug}"><div class="chapter-meta"><span>${String(c.index + 1).padStart(2, '0')} / ${escape(c.group)}</span></div><article class="prose">${render(c.source, c, true).html}</article></section>`).join('')}<footer class="page-footer">End of the guide.<a href="index.html">Back to the five-minute version ↑</a></footer></main>`;
await writeFile(path.join(dist, 'print.html'), document('The complete guide', 'All chapters of the everyday AI field guide in one readable, printable edition.', printBody, 'print'));
const instructions = chapters.find(c => c.slug === 'instructions').source.match(/```text\n([\s\S]*?)\n```/)[1] + '\n';
for (const name of ['codex-instructions', 'claude-instructions']) await writeFile(path.join(dist, 'downloads', `${name}.txt`), instructions);
const setupPrompt = await readFile(path.join(root, 'SETUP.md'), 'utf8');
await writeFile(path.join(dist, 'downloads', 'setup-prompt.txt'), setupPrompt);
for (const asset of ['styles.css', 'guide.js', 'favicon.svg']) await copyFile(path.join(root, 'assets', asset), path.join(dist, 'assets', asset));
console.log(`Built ${chapters.length + 1} HTML pages, 3 assets, and 3 plain-text downloads.`);
