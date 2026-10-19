import React from 'react';
import { ArticleTemplate } from '../components/blog/ArticleTemplate';
import { BlogLayout } from '../components/blog/BlogLayout';
import {
  articleDecorationsNoel,
  BLOG_PAGES,
} from '../content/blog';
import { ROUTES } from '../config/site';

export const ArticleDecorationsNoel: React.FC = () => {
  return (
    <BlogLayout record={BLOG_PAGES[ROUTES.decorationsNoel]}>
      <ArticleTemplate article={articleDecorationsNoel} />
    </BlogLayout>
  );
};
