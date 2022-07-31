import { Controller, useForm } from 'react-hook-form';

import AuthFields from '@/components/auth-fields/auth-fields';
import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Button from '@/components/ui/button/button';
import Heading from '@/components/ui/headings/heading/heading';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { useUserEdit } from '@/hooks/query-hooks/use-user-edit';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeUserProfileEdit } from '@/shared/types/user.types';

import { HeadingTitle } from '@/config/heading.config';
import { BtnUserText } from '@/config/input.config';

import styles from '../edit-form.module.scss';

function UserEdit(): JSX.Element {
  const { handleSubmit, register, formState, setValue, getValues, control } =
    useForm<TypeUserProfileEdit>({
      mode: 'onChange',
    });

  const { isLoading, onSubmit } = useUserEdit(setValue);

  return (
    <>
      <Meta title={MetaTitle.EditUser} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.EditUser} />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {isLoading ? (
            <SkeletonLoader count={3} />
          ) : (
            <>
              <div className={styles.fields}>
                <AuthFields register={register} formState={formState} />

                <Controller
                  control={control}
                  name='isAdmin'
                  render={({ field }) => (
                    <button
                      className={styles.admin}
                      onClick={(evt) => {
                        evt.preventDefault();
                        field.onChange(!field.value);
                      }}
                    >
                      {field.value ? BtnUserText.Regular : BtnUserText.Admin}
                    </button>
                  )}
                />
              </div>
              <Button type='submit'>Update</Button>
            </>
          )}
        </form>
      </main>
    </>
  );
}

export default UserEdit;
