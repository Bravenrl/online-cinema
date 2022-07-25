import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Button from '@/components/ui/button/button';
import Heading from '@/components/ui/headings/heading/heading';
import InputField from '@/components/ui/form-elements/input-field/input-field';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';
import SlugField from '@/components/ui/form-elements/slug-field/slug-field';

import { useGenreEdit } from '@/hooks/query-hooks/use-genre-edit';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeGenreEdit } from '@/shared/types/movie.types';

import { generateSlug } from '@/utils/slug';

import { HeadingTitle } from '@/config/heading.config';
import { InputName, InputIcon, InputSlug } from '@/config/input.config';

import styles from '../edit-form.module.scss';

const DynamicTextEditor = dynamic(
  () => import('@/components/ui/form-elements/text-editor/text-editor'),
  { ssr: false }
);

function GenreEdit(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<TypeGenreEdit>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useGenreEdit(setValue);

  return (
    <>
      <Meta title={MetaTitle.EditGenre} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.EditGenre} />
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
                  className={styles.item}
                />

                <div className={styles.item}>
                  <SlugField
                    register={register}
                    error={errors.slug}
                    generate={() =>
                      setValue('slug', generateSlug(getValues(InputName.Name)))
                    }
                  />
                </div>

                <InputField
                  {...register(InputIcon.Name, {
                    required: InputIcon.Required,
                  })}
                  placeholder={InputIcon.Placeholder}
                  error={errors.name}
                  className={styles.item}
                />
              </div>
              <Controller
                control={control}
                name='description'
                defaultValue=''
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <DynamicTextEditor
                    onChange={onChange}
                    value={value}
                    error={error}
                    placeholder={'description'}
                  />
                )}
                rules={{
                  validate: {
                    required: (v) =>
                      (v && stripHtml(v).result.length > 0) ||
                      'Description is required',
                  },
                }}
              />

              <Button type='submit'>Update</Button>
            </>
          )}
        </form>
      </main>
    </>
  );
}

export default GenreEdit;
