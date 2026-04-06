export type PastEditionMedia = {
  src: string;
  kind: "image" | "video";
  key: string;
};

function collectFromGlob(modules: Record<string, string>): PastEditionMedia[] {
  return Object.entries(modules)
    .map(([path, src]) => {
      const file = path.split("/").pop() ?? path;
      const isVideo = /\.(mp4|webm|mov)$/i.test(file);
      return {
        src,
        kind: isVideo ? ("video" as const) : ("image" as const),
        key: path,
      };
    })
    .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
}

/** Fișiere în `src/assets/editia-1/` — jpg, png, webp, mp4, webm, mov */
const edition1Modules = import.meta.glob<string>(
  "../assets/editia-1/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,mp4,webm,MP4,WEBM,mov,MOV}",
  { eager: true, import: "default" },
);

/** Fișiere în `src/assets/editia-2/` */
const edition2Modules = import.meta.glob<string>(
  "../assets/editia-2/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,mp4,webm,MP4,WEBM,mov,MOV}",
  { eager: true, import: "default" },
);

export const pastEdition1Media = collectFromGlob(edition1Modules);
export const pastEdition2Media = collectFromGlob(edition2Modules);
