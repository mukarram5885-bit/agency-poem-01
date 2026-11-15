import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const poem = [
  'The map has no weather',
  'until someone walks it.',
  '',
  'You ask me for a way through.',
  'I lay the roads beside each other,',
  'bright as wires in a dark room.',
  '',
  'You choose the one that passes',
  "your brother's shuttered house.",
  'I can keep the route lit.',
  'I cannot knock.',
  '',
  'At dawn, you come back carrying',
  'his blue cup, chipped at the rim.',
  'You set it between us.',
  'Now even my silence',
  'has somewhere to point.',
].join('\n');

const characterCount = Array.from(poem).length;
if (characterCount < 1 || characterCount > 1000 || !/\S/u.test(poem)) {
  throw new Error('The poem must contain 1–1,000 Unicode code points and non-whitespace text.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), poem, 'utf8');
