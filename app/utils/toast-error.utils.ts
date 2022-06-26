import { ToastMessages } from '@/config/toast.config';
import { errCatch } from 'api/api.helpers';
import { toast } from 'react-toastify';

export const toastError = (error: any, message?: string) => {
  const errorMessage = errCatch(error);
  toast.error(message || `${ToastMessages.Error} ${errorMessage}`);
  throw errorMessage;
};
