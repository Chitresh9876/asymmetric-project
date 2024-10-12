import { useEffect, useState } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setLoading(true);
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, callback]);

  return [loading, setLoading] as const;
};

export default useInfiniteScroll;
