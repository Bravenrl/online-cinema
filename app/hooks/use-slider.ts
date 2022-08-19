import { TypeSlide } from '@/shared/types/slider.types';
import { useEffect, useState } from 'react';

export const useSlider = (slides: TypeSlide[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
const length = slides.length;

useEffect(() => {
  slides.forEach(slide => {
    new Image().src = slide.bigPoster;
  });
}, [slides])


  const isExistNext = currentIndex + 1 < length;
  const isExistPrev = currentIndex ? currentIndex - 1 < length : false;

  const handlerArrowClick = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    setSlideIn(false);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSlideIn(true);
    }, 300);
  };

  return {
    slideIn,
    index: currentIndex,
    isNext: isExistNext,
    isPrev: isExistPrev,
    handleClick: handlerArrowClick,
  };
};
