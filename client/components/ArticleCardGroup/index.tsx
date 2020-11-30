import React from "react";
import ArticleCard from "../ArticleCard";
import styles from "./ArticleCardGroup.module.scss";

interface Props {
  articles: Array<string>;
}

export default function ArticleCardGroup({ articles }: Props) {
  const articlesArray = articles.map((contentValue) => {
    return <ArticleCard content={contentValue} title="Testing" url="test" />;
  });

  return <div className={styles.root}>{articlesArray}</div>;
}
