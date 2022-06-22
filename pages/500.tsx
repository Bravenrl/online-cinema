import Heading from '@/components/heading/heading';
import Meta from '@/components/meta/meta';

import { TITLE_ERR } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

function Error500() {
  return (
    <>
      <Meta title={TITLE_ERR} />
      <Heading title={HeadingTitle.Err500} />
    </>
  );
}
export default Error500;
