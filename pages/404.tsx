import Heading from '@/components/ui/headings/heading/heading';
import Meta from '@/components/meta/meta';

import { TITLE_ERR } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

function Error404() {
  return (
    <>
      <Meta title={TITLE_ERR} />
      <Heading title={HeadingTitle.Err404} />
    </>
  );
}
export default Error404;
