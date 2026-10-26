import React from 'react';
import App from './App';
import { ArticleDecorationsNoel } from './pages/ArticleDecorationsNoel';
import { ArticleCrochetNoelFacile } from './pages/ArticleCrochetNoelFacile';
import { BlogHub } from './pages/BlogHub';
import { FreeChristmasIdeasPage } from './pages/FreeChristmasIdeasPage';
import { Seo } from './components/blog/Seo';
import { HOME_PAGE } from './content/seo';
import { ROUTES } from './config/site';
import { usePath } from './router';

/**
 * Route table.
 * The landing page (App) is untouched: it still owns every non-blog path.
 */
export default function Root() {
  const path = usePath();

  switch (path) {
    case ROUTES.blog:
      return <BlogHub />;
    case ROUTES.decorationsNoel:
      return <ArticleDecorationsNoel />;
    case ROUTES.crochetNoelFacile:
      return <ArticleCrochetNoelFacile />;
    case ROUTES.freeChristmasIdeas:
      return <FreeChristmasIdeasPage />;
    default:
      return (
        <>
          <Seo record={HOME_PAGE} />
          <App />
        </>
      );
  }
}
