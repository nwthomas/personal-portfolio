import React from "react";
import styles from "./ArticleCard.module.scss";

interface Props {
  title: string;
  content: string;
  url: string;
}

export default function ArticleCard({ content, title, url }: Props) {
  const splitContentArray = content.split(" ");
  let finalContent = content;

  if (splitContentArray.length > 25) {
    finalContent = splitContentArray.slice(0, 25).join(" ");
    finalContent += "....";
  }

  return (
    <div className={styles.root}>
      <h3>{title}</h3>
      <p>{finalContent}</p>
    </div>
  );
}
