import { FormState, UseFormRegister } from 'react-hook-form';

import { validEmail } from '@/shared/regex';

import { InputEmail, InputPassword } from '@/config/input.config';

import InputField from '../ui/form-elements/input-field/input-field';


type AuthFieldsProps = {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  isPasswordRequired?: boolean;
};

function AuthFields({
  register,
  formState: { errors },
  isPasswordRequired = false,
}: AuthFieldsProps): JSX.Element {
  return (
    <>
      <InputField
        autoComplete={InputEmail.AutoComplete}
        error={errors[InputEmail.Name]}
        type={InputEmail.Type}
        placeholder={InputEmail.Placeholder}
        {...register(InputEmail.Name, {
          required: InputEmail.Required,
          pattern: {
            value: validEmail,
            message: InputEmail.ErrorMessage,
          },
        })}
      />
      <InputField
        error={errors[InputPassword.Name]}
        type={InputPassword.Type}
        placeholder={InputPassword.Placeholder}
        autoComplete = {InputPassword.AutoComplete}
        {...register(
          InputPassword.Name,
          isPasswordRequired
            ? {
                required: InputPassword.Required,
                minLength: {
                  value: +InputPassword.Length,
                  message: InputPassword.ErrorMessage,
                },
              }
            : {}
        )}
      />
    </>
  );
}

export default AuthFields;
