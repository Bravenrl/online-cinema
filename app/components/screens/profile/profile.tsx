import { useForm } from 'react-hook-form';

import AuthFields from '@/components/auth-fields/auth-fields';
import Meta from '@/components/meta/meta';
import Button from '@/components/ui/button/button';
import Heading from '@/components/ui/headings/heading/heading';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { useProfile } from '@/hooks/query-hooks/useProfile';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeUserProfile } from '@/shared/types/user.types';

import { HeadingClassName, HeadingTitle } from '@/config/heading.config';

import styles from './profile.module.scss';


function Profile(): JSX.Element {
  const { handleSubmit, register, formState, setValue } =
    useForm<TypeUserProfile>({
      mode: 'onChange',
    });

  const { isLoading, onSubmit } = useProfile(setValue);
  return (
    <>
      <Meta title={MetaTitle.Profile} />
      <main className={styles.wrapper}>
          <Heading
            title={HeadingTitle.Auth}
            className={HeadingClassName.Profile}
          />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <SkeletonLoader count={2} />
          ) : (
            <AuthFields register={register} formState={formState} />
          )}
          <div className={styles.buttons}>
            <Button>Update</Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
