import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import ErrorFallback from './components/errors/ErrorFallback';
import AppRoutes from './routes';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <AppRoutes />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;