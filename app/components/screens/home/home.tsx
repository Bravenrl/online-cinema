import Heading from '@/components/ui/heading/heading';
import Meta from '@/components/meta/meta';
import { HeadingClassName, HeadingTitle } from '@/config/heading.config';

import { DESCRIPTION, MetaTitle } from '@/shared/data/meta.data';

type Home = {};

function Home({}: Home): JSX.Element {
  return (
    <>
      <Meta title={MetaTitle.Home} description={DESCRIPTION} />
      <Heading title={HeadingTitle.Home} className={HeadingClassName.Home} />
    </>
  );
}

export default Home;
