import { useEffect } from 'react';

/**
 * Хук для реализации бесконечного скролла
 * @param callback - Функция, вызываемая при достижении конца страницы
 * @param offset - Отступ от нижней границы (в пикселях) для срабатывания
 */
export const useInfiniteScroll = (
  callback: () => void,
  offset: number = 100
): void => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const isBottomReached = scrollTop + clientHeight + offset >= scrollHeight;

      if (isBottomReached) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, offset]);
};