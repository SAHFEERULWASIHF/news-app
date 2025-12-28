import { Link } from 'react-router-dom';
import type { Post, User } from '../api/newsApi';
import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';
import { translations } from '../utils/translations';

interface NewsCardProps {
  post: Post;
  author?: User;
}

const FALLBACK_IMAGE = 'https://via.placeholder.com/400x200?text=No+Image+Available';

export default function NewsCard({ post, author }: NewsCardProps) {
  const language = useSelector((state: RootState) => state.settings.language);
  const t = translations[language];

  return (
    <div className="group border dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail with Fallback logic */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={`https://picsum.photos/seed/${post.id}/400/200`}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-blue-500 transition-colors">
          {post.title}
        </h2>
        
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {t.author}: {author?.name || 'Anonymous'}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-grow">
          {post.body}
        </p>

        <Link
          to={`/post/${post.id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          {t.readMore} 
          <span className={language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}>→</span>
        </Link>
      </div>
    </div>
  );
}