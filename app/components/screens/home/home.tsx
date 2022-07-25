import Heading from '@/components/ui/heading/heading';
import Meta from '@/components/meta/meta';
import { HeadingClassName, HeadingTitle } from '@/config/heading.config';

import { DESCRIPTION, MetaTitle } from '@/shared/data/meta.data';
import { TypeSlide } from '@/shared/types/slider.types';
import Slider from '@/components/ui/slider/slider';

type Home = {
  slides: TypeSlide[];
};

function Home({slides}: Home): JSX.Element {
  return (
    <>
      <Meta title={MetaTitle.Home} description={DESCRIPTION} />
      <Heading title={HeadingTitle.Home} className={HeadingClassName.Home} />
      {slides.length && <Slider slides={slides} />}
    </>
  );
}

export default Home;
