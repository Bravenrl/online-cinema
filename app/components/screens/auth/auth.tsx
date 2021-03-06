import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import AuthFields from '@/components/auth-fields/auth-fields';
import Heading from '@/components/ui/headings/heading/heading';
import Meta from '@/components/meta/meta';
import Button from '@/components/ui/button/button';

import { useActions } from '@/hooks/use-actions';
import { useAuth } from '@/hooks/use-auth';
import { useAuthRedirect } from '@/hooks/use-auth-redirect';

import { MetaTitle } from '@/shared/data/meta.data';
import { TypeUserAuth } from '@/shared/types/user.types';

import { AuthConfig } from '@/config/auth.config';
import { HeadingClassName, HeadingTitle } from '@/config/heading.config';

import styles from './auth.module.scss';

type AuthProps = {};

function Auth({}: AuthProps): JSX.Element {
  useAuthRedirect();
  const { isLoading } = useAuth();
  const { login, registration } = useActions();

  const [type, setType] = useState<AuthConfig.Login | AuthConfig.Register>(
    AuthConfig.Login
  );

  const { register, handleSubmit, formState, reset } = useForm<TypeUserAuth>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TypeUserAuth> = (data) => {
    if (type === AuthConfig.Login) login(data);
    if (type === AuthConfig.Register) registration(data);

    reset();
  };

  return (
    <>
      <Meta title={MetaTitle.Auth} />
      <main className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            title={HeadingTitle.Auth}
            className={HeadingClassName.Auth}
          />
          <AuthFields
            register={register}
            formState={formState}
            isPasswordRequired
          />
          <div className={styles.buttons}>
            <Button
              type='submit'
              onClick={() => setType(AuthConfig.Login)}
              disabled={isLoading}
            >
              Login
            </Button>
            <Button
              type='submit'
              onClick={() => setType(AuthConfig.Register)}
              disabled={isLoading}
            >
              Register
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Auth;
