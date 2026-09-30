import Image from "next/image";
import styles from "./home.module.css";

// Stand-in for the design's <image-slot>: fills its (aspect-ratio) parent.
// Pass `src` (a path in /public or an allowed remote URL) to show a photo;
// otherwise a labelled placeholder is rendered.
export function ImageSlot({
  src,
  alt = "",
  placeholder,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src?: string;
  alt?: string;
  placeholder: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={styles.slot}>
        <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div className={`${styles.slot} ${styles.slotEmpty}`} role="img" aria-label={placeholder}>
      <span>{placeholder}</span>
    </div>
  );
}
