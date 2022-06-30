import { useForm } from 'react-hook-form';

import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Heading from '@/components/ui/heading/heading';
import InputField from '@/components/ui/input-field/input-field';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { useGenreEdit } from '@/hooks/query-hooks/use-genre-edit';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeGenreEdit } from '@/shared/types/movie.types';

import { HeadingTitle } from '@/config/heading.config';
import { InputGenre } from '@/config/input.config';

import styles from './genre-edit.module.scss';

type GenreEditProps = {};

function GenreEdit({}: GenreEditProps): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <SkeletonLoader count={3} />
          ) : (
            <>
              <div>
                <InputField
                  {...register(InputGenre.Name, {
                    required: InputGenre.Required,
                  })}
                  placeholder={InputGenre.Placeholder}
                  error={errors.name}
                  className={styles.item}
                />

                <div className={styles.item}>

                  {/* slug field */}

                </div>

                <InputField
                  {...register(InputGenre.Name, {
                    required: InputGenre.Required,
                  })}
                  placeholder={InputGenre.Placeholder}
                  error={errors.name}
                  className={styles.item}
                />

                {/* text editor */}

                <button>Update</button>
              </div>
            </>
          )}
        </form>
      </main>
    </>
  );
}

export default GenreEdit;
