import React from 'react';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background font-sans antialiased">
        <div className="container mx-auto">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;