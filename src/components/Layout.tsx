
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-primary-color font-bold mb-1">THEORETICAL CALCULATION ASSISTANT</h1>
          <div className="h-1 w-48 mx-auto bg-primary-color mb-4"></div>
        </header>
        <main>
          {children}
        </main>
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Theoretical Calculation Assistant</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
