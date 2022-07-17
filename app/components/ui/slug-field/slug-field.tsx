import { FieldError, UseFormRegister } from 'react-hook-form';

import { InputSlug } from '@/config/input.config';

import InputField from '../input-field/input-field';

import styles from './slug-field.module.scss';

type SlugFieldProps = {
  error?: FieldError;
  register: UseFormRegister<any>;
  generate: () => void;
};

function SlugField({ generate, register, error }: SlugFieldProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <InputField
        {...register(InputSlug.Name, {
          required: InputSlug.Required,
        })}
        placeholder={InputSlug.Placeholder}
        error={error}
      />
      <button type={'button'} className={styles.button} onClick={generate}>
        generate
      </button>
    </div>
  );
}

export default SlugField;
