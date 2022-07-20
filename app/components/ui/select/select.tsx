import { InputHTMLAttributes } from 'react';
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import ReactSelect, { OnChangeValue, Options } from 'react-select';
import makeAnimated from 'react-select/animated';

import { OptionsType } from '@/shared/types/assets.types';

import styles from './select.module.scss';

type SelectProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  error?: FieldError | undefined;
  autoComplete?: string;
  options: Options<OptionsType>;
  isMulti?: boolean;
  field: ControllerRenderProps<any, any>;
  isLoading: boolean;
};

const animatedComponents = makeAnimated();

function Select({
  placeholder,
  field,
  options,
  isMulti,
  isLoading,
  error,
}: SelectProps): JSX.Element {
  const onChange = (newValue: OnChangeValue<any, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as OptionsType[]).map((item) => item.value)
        : (newValue as OptionsType).value
    );
  };

  const getValue = () => {
    if (field.value) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  };

  return (
    <div className={styles.container}>
      <label>
        <span>{placeholder}</span>
        <ReactSelect
            classNamePrefix='custom-select'
            options={options}
            value={getValue()}
            isMulti={isMulti}
            onChange={onChange}
            components={animatedComponents}
            isLoading={isLoading}
        />
      </label>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default Select;
