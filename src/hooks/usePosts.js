import { useMemo } from 'react';

export const useSortedPosts = (posts, sortMethod) => {

  const sortedPosts = useMemo(() => {
    if (sortMethod) {
      return [...posts].sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]))
    }
    return posts
  }, [sortMethod, posts])

  return sortedPosts
}

export const usePosts = (posts, sortMethod, query) => {

  const sortedPosts = useSortedPosts(posts, sortMethod)

  const sortedAndSearchPost = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(query))
  }, [query, sortedPosts])

  return sortedAndSearchPost
}