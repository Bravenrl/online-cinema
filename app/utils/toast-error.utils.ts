import { errCatch } from 'api/api.helpers';
import { toast } from 'react-toastify';

import { AuthConfig } from '@/config/auth.config';
import { ToastMessages } from '@/config/toast.config';

export const toastError = (error: any) => {
  const errorMessage = errCatch(error);

  const toastMessage =
    errorMessage === AuthConfig.JwtExpired
      ? ToastMessages.JWT
      : `${ToastMessages.Error} ${errorMessage}`;

  toast.error(toastMessage);
  throw errorMessage;
};
