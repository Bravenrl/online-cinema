import { ToastContainer, Zoom } from 'react-toastify';

import { ToastConfig } from '@/config/toast.config';

function StyledToastContainer(): JSX.Element {
  return (
    <ToastContainer
      limit={ToastConfig.Limit}
      autoClose={ToastConfig.Delay}
      hideProgressBar={false}
      newestOnTop={ToastConfig.Newest}
      closeOnClick
      draggable
      pauseOnHover
      transition={Zoom}
    />
  );
}

export default StyledToastContainer;
