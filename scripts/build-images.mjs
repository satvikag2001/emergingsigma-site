// Makes a WebP copy of every photo in public/assets/img, which is what the
// stylesheet actually serves: about half the bytes of the JPEG at the same size
// and no visible difference. Runs before `npm run dev` and `npm run build`, so
// replacing a photo is still just dropping in a new JPEG with the same name.
// The .webp files are build output and stay out of git.
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(import.meta.dirname, "..", "public", "assets", "img");
const QUALITY = 78;

const mtime = (file) =>
  stat(file).then(
    (s) => s.mtimeMs,
    () => 0,
  );

const jpegs = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));
let made = 0;
for (const file of jpegs) {
  const src = path.join(DIR, file);
  const out = path.join(DIR, file.replace(/\.jpe?g$/i, ".webp"));
  if ((await mtime(out)) > (await mtime(src))) continue; // already current
  await sharp(src).webp({ quality: QUALITY, effort: 6 }).toFile(out);
  made++;
}
console.log(`images: ${made} WebP written, ${jpegs.length - made} already current`);
