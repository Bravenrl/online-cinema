import { CSSTransition } from 'react-transition-group';

import { useSlider } from '@/hooks/use-slider';

import { TypeMovie } from '@/shared/types/movie.types';
import { TypeSlide } from '@/shared/types/slider.types';

import SlideArrow from './slide-arrow/slide-arrow';
import SlideItem from './slide-item/slide-item';
import styles from './slider.module.scss';

type SliderProps = {
  slides: TypeSlide[];
  buttonTitle?: string;
};

function Slider({ slides, buttonTitle }: SliderProps): JSX.Element {
  const { index, slideIn, isNext, isPrev, handleClick } = useSlider(
    slides.length
  );
  return (
    <div className={styles.slider}>
      <CSSTransition
        in={slideIn}
        classNames='slide-animation'
        timeout={300}
        unmountOnExit
      >
        <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
      </CSSTransition>

      {isPrev && (
        <SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
      )}
      {isNext && (
        <SlideArrow variant='right' clickHandler={() => handleClick('next')} />
      )}
    </div>
  );
}

export default Slider;
