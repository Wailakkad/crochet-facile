import React from 'react';
import { ArticleTemplate } from '../components/blog/ArticleTemplate';
import { BlogLayout } from '../components/blog/BlogLayout';
import {
  articleCrochetNoelFacile,
  BLOG_PAGES,
} from '../content/blog';
import { ROUTES } from '../config/site';

export const ArticleCrochetNoelFacile: React.FC = () => {
  return (
    <BlogLayout record={BLOG_PAGES[ROUTES.crochetNoelFacile]}>
      <ArticleTemplate article={articleCrochetNoelFacile} />
    </BlogLayout>
  );
};
