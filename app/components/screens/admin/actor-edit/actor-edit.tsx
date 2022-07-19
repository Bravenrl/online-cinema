import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Button from '@/components/ui/button/button';
import Heading from '@/components/ui/heading/heading';
import InputField from '@/components/ui/input-field/input-field';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';
import SlugField from '@/components/ui/slug-field/slug-field';
import UploadField from '@/components/ui/upload-field/upload-field';

import { useActorEdit } from '@/hooks/query-hooks/use-actor-edit';
import { useGenreEdit } from '@/hooks/query-hooks/use-genre-edit';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeActorEdit, TypeGenreEdit } from '@/shared/types/movie.types';

import { generateSlug } from '@/utils/slug';

import { HeadingTitle } from '@/config/heading.config';
import { InputIcon, InputName } from '@/config/input.config';

import styles from './actor-edit.module.scss';

// const DynamicTextEditor = dynamic(
//   () => import('@/components/ui/text-editor/text-editor'),
//   { ssr: false }
// );

function ActorEdit(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<TypeActorEdit>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useActorEdit(setValue);

  return (
    <>
      <Meta title={MetaTitle.EditActor} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.EditActor} />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {isLoading ? (
            <SkeletonLoader count={3} />
          ) : (
            <>
              <div className={styles.fields}>
                <InputField
                  {...register(InputName.Name, {
                    required: InputName.Required,
                  })}
                  placeholder={InputName.Placeholder}
                  error={errors.name}
                />

                <SlugField
                  register={register}
                  error={errors.slug}
                  generate={() =>
                    setValue('slug', generateSlug(getValues(InputName.Name)))
                  }
                />

                <Controller
                  control={control}
                  name='photo'
                  defaultValue=''
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <UploadField
                      onChange={onChange}
                      value={value}
                      error={error}
                      folder='actors'
                      placeholder='photo'
                    />
                  )}
                  rules={{
                    required: 'Photo is required',
                  }}
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

export default ActorEdit;
