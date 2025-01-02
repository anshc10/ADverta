import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import ErrorFallback from '../errors/ErrorFallback';
import SEO, { SEOProps } from '../SEO';

interface PageLayoutProps {
  children: React.ReactNode;
  seo?: SEOProps;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, seo }) => {
  return (
    <>
      {seo && <SEO {...seo} />}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen flex flex-col bg-background-primary">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default PageLayout;