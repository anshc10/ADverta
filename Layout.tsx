import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-primary text-white">
      <Navbar />
      <main className="pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;