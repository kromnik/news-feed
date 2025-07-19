import { useState } from 'react';
import type { FC } from 'react';
import { useGetPostsQuery } from '../newsApi';
import { NewsCard } from '../../../entities/news/ui/NewsCard';
import { LoadingIndicator } from '../../../shared/ui/LoadingIndicator';
import { useInfiniteScroll } from '../../../shared/hooks/useInfiniteScroll';

export const NewsList: FC = () => {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, isFetching, error } = useGetPostsQuery(skip);

  const loadMore = () => {
    if (!isFetching && data && skip + 10 < data.total) {
      setSkip(skip + 10);
    }
  };

  useInfiniteScroll(loadMore);

  if (isLoading) return <LoadingIndicator />;
  if (error) return <div>Error loading news</div>;

  return (
    <div style={{ padding: 24 }}>
      {data?.posts.map((post) => (
        <NewsCard
          key={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
        />
      ))}
      {isFetching && <LoadingIndicator />}
    </div>
  );
};