import Meta from '@/components/meta/meta';
import Gallery from '@/components/ui/gallery/gallery';
import Heading from '@/components/ui/headings/heading/heading';
import SubHeading from '@/components/ui/headings/sub-heading/sub-heading';
import Slider from '@/components/ui/slider/slider';

import { DESCRIPTION, MetaTitle } from '@/shared/data/meta.data';
import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeSlide } from '@/shared/types/slider.types';

import {
  HeadingClassName,
  HeadingTitle,
  SubHeadingTitle,
} from '@/config/heading.config';

type Home = {
  slides: TypeSlide[];
  trendingMovies: TypeGalleryItem[];
  actors: TypeGalleryItem[];
};

function Home({ slides, trendingMovies, actors }: Home): JSX.Element {
  return (
    <>
      <Meta title={MetaTitle.Home} description={DESCRIPTION} />
      <Heading title={HeadingTitle.Home} className={HeadingClassName.Home} />
      {slides.length && <Slider slides={slides} buttonTitle={'Watch'}/>}
      <div className='my-10'>
        <SubHeading title={SubHeadingTitle.Trending} />
        {trendingMovies && <Gallery items={trendingMovies} />}
      </div>
      <div>
        <SubHeading title={SubHeadingTitle.Best} />
        {actors && <Gallery items={actors} />}
      </div>
    </>
  );
}

export default Home;
