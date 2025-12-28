import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, language } = useSelector((state: RootState) => state.settings);

  return (
    /* This outer div ensures the background color covers the full viewport height/width */
    <div className={`${theme} min-h-screen w-full transition-colors duration-300`}>
      <div 
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen w-full flex flex-col" 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <Navbar />
        
        {/* Main Content Area: Centered and responsive */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Optional Footer to push content up */}
        <footer className="py-6 text-center opacity-50 text-sm">
          © 2025 News App
        </footer>
      </div>
    </div>
  );
}