// use Tanstack Query to fetch posts
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const usePosts = () => {
  return useQuery(['posts'], fetchPosts);
};

export default usePosts;    
