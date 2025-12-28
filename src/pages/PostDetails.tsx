import { useParams, useNavigate } from 'react-router-dom';
import { useGetPostByIdQuery, useGetUsersQuery } from '../api/newsApi';
import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';
import { translations } from '../utils/translations';

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading } = useGetPostByIdQuery(id!);
  const { data: users } = useGetUsersQuery();
  const language = useSelector((state: RootState) => state.settings.language);
  const t = translations[language];

  const author = users?.find(u => u.id === post?.userId);

  if (isLoading) return <div className="text-center py-10">{t.loading}</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-blue-500 flex items-center gap-2"
      >
        <span className={language === 'ar' ? 'rotate-180' : ''}>←</span> {t.back}
      </button>
      
      <img 
        src={`https://picsum.photos/seed/${id}/800/400`} 
        className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
        alt="Post"
      />
      
      <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
      <p className="text-lg text-gray-500 mb-8 border-b pb-4">
        {t.author}: <span className="font-semibold text-gray-900 dark:text-white">{author?.name}</span>
      </p>
      
      <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
        {post?.body}
      </div>
    </div>
  );
}