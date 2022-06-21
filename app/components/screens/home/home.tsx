import Heading from '@/components/heading/heading';
import Meta from '@/components/meta/meta';
import { HeadingClassName, HeadingTitle } from '@/config/heading.config';

import { DESCRIPTION, TITLE } from '@/shared/data/meta.data';

type Home = {};

function Home({}: Home): JSX.Element {
  return (
    <>
      <Meta title={TITLE} description={DESCRIPTION} />
      <Heading title={HeadingTitle.Home} className={HeadingClassName.Home} />
    </>
  );
}

export default Home;
