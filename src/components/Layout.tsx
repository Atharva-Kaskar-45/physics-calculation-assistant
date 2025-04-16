
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center animate-fade-in">
          <h1 className="text-primary-color font-bold mb-2">
            PHYSICS CALCULATION ASSISTANT
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-primary via-secondary to-accent mb-4 rounded-full"></div>
        </header>
        <main className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          {children}
        </main>
        <footer className="mt-8 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p>© 2025 Physics Calculation Assistant</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
