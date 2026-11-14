import React from 'react';
import App from './App';
import { ArticleDecorationsNoel } from './pages/ArticleDecorationsNoel';
import { ArticleCrochetNoelFacile } from './pages/ArticleCrochetNoelFacile';
import { BlogHub } from './pages/BlogHub';
import { FreeChristmasIdeasPage } from './pages/FreeChristmasIdeasPage';
import { SapinPatronPage } from './pages/SapinPatronPage';
import { StorePage } from './pages/StorePage';
import { FreeResourcesPage } from './pages/FreeResourcesPage';
import { BreloquesLandingPage } from './pages/BreloquesLandingPage';
import { GnomesNoelLandingPage } from './pages/GnomesNoelLandingPage';
import { LapinAmigurumiLandingPage } from './pages/LapinAmigurumiLandingPage';
import { BonhommeNeigeLandingPage } from './pages/BonhommeNeigeLandingPage';
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
    case ROUTES.sapinPatron:
      return <SapinPatronPage />;
    case ROUTES.store:
      return <StorePage />;
    case ROUTES.freeResources:
      return <FreeResourcesPage />;
    case ROUTES.breloques:
      return <BreloquesLandingPage />;
    case ROUTES.gnomesNoel:
      return <GnomesNoelLandingPage />;
    case ROUTES.lapinAmigurumi:
      return <LapinAmigurumiLandingPage />;
    case ROUTES.bonhommeNeige:
      return <BonhommeNeigeLandingPage />;
    default:
      return (
        <>
          <Seo record={HOME_PAGE} />
          <App />
        </>
      );
  }
}
