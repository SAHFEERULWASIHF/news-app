import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../features/store';
import { toggleTheme, setLanguage } from '../features/settingsSlice';
import { translations } from '../utils/translations';

export default function Navbar() {
  const dispatch = useDispatch();
  const { theme, language } = useSelector((state: RootState) => state.settings);
  const t = translations[language];

  return (
    <nav className="border-b p-4 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold">{t.title}</h1>
      <div className="flex gap-4">
        <button onClick={() => dispatch(toggleTheme())} className="p-2 border rounded">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <select 
          value={language} 
          onChange={(e) => dispatch(setLanguage(e.target.value as 'en' | 'ar'))}
          className="bg-transparent border rounded p-1"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </nav>
  );
}