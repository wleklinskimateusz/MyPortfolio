import React, { FC } from "react";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import { IProject } from "../types/IProject";

export const Project: FC<{ item: IProject }> = ({ item }) => {
  const { title, time, technologies, description, imageSrc, link } = item;
  return (
    <div className={styles.project}>
      <div className={styles.project__content}>
        <div className={styles.project__content__title}>
          {title}
          <div className={styles.project__content__title__time}>{time}</div>
        </div>

        {!!imageSrc && (
          <div className={styles.project__content__img}>
            <Image width={400} height={400} src={imageSrc} alt={title} />{" "}
          </div>
        )}

        <div className={styles.project__content__text}>{description}</div>
        {!!link && (
          <a href={link} className={styles.project__content__checkout}>
            Check Out!
          </a>
        )}
      </div>

      <ul className={styles.project__technologies}>
        {technologies.map((tech, i) => (
          <li className={styles.project__technologies__item} key={i}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};