import cn from 'classnames';
import { FC, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './input-field.module.scss';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  error?: FieldError | undefined;
  autoComplete?: string;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { placeholder, error, type = 'text', autoComplete='on', style, ...rest },
    ref
  ) => {
    return (
      <div className={cn(styles.common, styles.field)} style={style}>
        <label>
          <span>{placeholder}</span>
          <input type={type} ref={ref} {...rest} autoComplete={autoComplete} />
        </label>
        {error && <p className={styles.error}>{error.message}</p>}
      </div>
    );
  }
);

InputField.displayName = `InputField`;

export default InputField;
