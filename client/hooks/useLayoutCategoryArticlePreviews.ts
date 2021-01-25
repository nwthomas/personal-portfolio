import { useEffect, useState } from "react";
import { ArticlePreviewType } from "../api/articles";
import { CategoryType } from "../api/categories";

const UNCATEGORIZED_ARTICLES = "Uncategorized";

export function useLayoutCategoryArticlePreviews(
  categories: Array<CategoryType>,
  articles: Array<ArticlePreviewType>,
  selectedCategoryName?: string
) {
  const categoryTracker = {};
  const uncategorized = [];

  categories.forEach((category) => {
    if (category.title) {
      categoryTracker[category.title] = [];
    }
  });

  articles.forEach((article) => {
    if (
      article?.categoriesCollection?.items &&
      article.categoriesCollection.items.length >= 1
    ) {
      article.categoriesCollection.items.forEach((category) => {
        if (category.title) {
          categoryTracker[category.title].push(article);
        }
      });
    } else {
      uncategorized.push(article);
    }
  });

  const finalCategoryTracker =
    uncategorized.length >= 1
      ? { ...categoryTracker, [UNCATEGORIZED_ARTICLES]: uncategorized }
      : categoryTracker;

  return finalCategoryTracker;
}
