export const ToastConfig = {
  Limit: 3,
  Delay: 4000,
  Newest: false,
  Position: 'top-right',
};

export enum ToastMessages {
  Registration = 'Registration completed successfully',
  Login ='Login completed successfully',
  JWT = 'Your authorization is finished, plz sign in',
  Error = 'Error required'
}
