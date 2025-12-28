import { useGetPostsQuery, useGetUsersQuery } from '../api/newsApi';
import NewsCard from '../components/NewsCard';
import Skeleton from '../components/Skeleton';

export default function Home() {
  const { data: posts, isLoading } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {posts?.map((post) => (
        <NewsCard 
          key={post.id} 
          post={post} 
          author={users?.find(u => u.id === post.userId)} 
        />
      ))}
    </div>
  );
}