import styles from "./blog-preview-card-main.module.css";
import Image from "next/image";

export default function Page() {
  console.log(styles.page);
  return (
    <body className={styles.page}>
      <div className={styles.container}>
        <div className={styles.shape}>
          <div className={styles.image}>
            <Image
              src="/images/blogimage.png"
              alt="blog image"
              width={336}
              height={200}
            />
          </div>
          <div className={styles.container2}>
            <div className={styles.learning}>
              <p className={styles.bold_text2}>Learning</p>
            </div>
            <p className={styles.semibold_text}>Published 21 Dec 2023</p>
            <h2 className={styles.bold_text}>HTML & CSS foundations</h2>
            <p className={`${styles.semibold_text} ${styles.description}`}>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
            <div className={styles.author}>
              <Image
                src="/images/userpic.png"
                alt="userpic"
                width={32}
                height={32}
              />
              <p className={`${styles.author_name} ${styles.bold_text}`}>
                Greg Hooper
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
