import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';

import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Button from '@/components/ui/button/button';
import Heading from '@/components/ui/heading/heading';
import InputField from '@/components/ui/form-elements/input-field/input-field';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';
import SlugField from '@/components/ui/form-elements/slug-field/slug-field';
import UploadField from '@/components/ui/form-elements/upload-field/upload-field';

import { useMovieActors } from '@/hooks/query-hooks/use-movie-actors';
import { useMovieEdit } from '@/hooks/query-hooks/use-movie-edit';
import { useMovieGenres } from '@/hooks/query-hooks/use-movie-genres';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeMovieEdit } from '@/shared/types/movie.types';

import { generateSlug } from '@/utils/slug';

import { HeadingTitle } from '@/config/heading.config';
import {
  InputCountry,
  InputDuration,
  InputTitle,
  InputYear,
} from '@/config/input.config';

import styles from '../edit-form.module.scss';

const DynamicSelect = dynamic(() => import('@/components/ui/form-elements/select/select'), {
  ssr: false,
});

function MovieEdit(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<TypeMovieEdit>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useMovieEdit(setValue);

  const { isLoading: isGenresLoading, data: genres } = useMovieGenres();

  const { isLoading: isActorsLoading, data: actors } = useMovieActors();

  return (
    <>
      <Meta title={MetaTitle.EditMovie} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.EditMovie} />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {isLoading ? (
            <SkeletonLoader count={3} />
          ) : (
            <>
              <div className={styles.fields}>
                <InputField
                  {...register(InputTitle.Name, {
                    required: InputTitle.Required,
                  })}
                  placeholder={InputTitle.Placeholder}
                  error={errors.title}
                />

                <SlugField
                  register={register}
                  error={errors.slug}
                  generate={() =>
                    setValue('slug', generateSlug(getValues(InputTitle.Name)))
                  }
                />

                <InputField
                  {...register(InputCountry.Name, {
                    required: InputCountry.Required,
                  })}
                  placeholder={InputCountry.Placeholder}
                  error={errors.parameters?.country}
                  className={styles.item}
                />
                <InputField
                  {...register(InputDuration.Name, {
                    required: InputDuration.Required,
                  })}
                  placeholder={InputDuration.Placeholder}
                  error={errors.parameters?.duration}
                  className={styles.item}
                />

                <InputField
                  {...register(InputYear.Name, {
                    required: InputYear.Required,
                  })}
                  placeholder={InputYear.Placeholder}
                  error={errors.parameters?.year}
                  className={styles.item}
                />

                <Controller
                  control={control}
                  name='genres'
                  render={({ field, fieldState: { error } }) => (
                    <DynamicSelect
                      field={field}
                      options={genres || []}
                      isLoading={isGenresLoading}
                      error={error}
                      placeholder='Genres'
                      isMulti
                    />
                  )}
                  rules={{
                    required: 'Please select at least one genre',
                  }}
                />

                <Controller
                  control={control}
                  name='actors'
                  render={({ field, fieldState: { error } }) => (
                    <DynamicSelect
                      field={field}
                      options={actors || []}
                      isLoading={isActorsLoading}
                      error={error}
                      placeholder='Actors'
                      isMulti
                    />
                  )}
                  rules={{
                    required: 'Please select at least one actor',
                  }}
                />

                <Controller
                  control={control}
                  name='poster'
                  defaultValue=''
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <UploadField
                      onChange={onChange}
                      value={value}
                      error={error}
                      folder='movies'
                      placeholder='Poster'
                    />
                  )}
                  rules={{
                    required: 'Poster is required',
                  }}
                />

                <Controller
                  control={control}
                  name='bigPoster'
                  defaultValue=''
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <UploadField
                      onChange={onChange}
                      value={value}
                      error={error}
                      folder='movies'
                      placeholder='big poster'
                    />
                  )}
                  rules={{
                    required: 'Big poster is required',
                  }}
                />

                <Controller
                  control={control}
                  name='videoUrl'
                  defaultValue=''
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <UploadField
                      onChange={onChange}
                      value={value}
                      error={error}
                      folder='movies'
                      placeholder='Video'
                      isNoImage={true}
                    />
                  )}
                  rules={{
                    required: 'Video is required',
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

export default MovieEdit;
