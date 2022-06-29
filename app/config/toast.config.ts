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
  Error = 'Error required',
  ErrorUserList = 'Error user list',
  ErrorDeleteUser = 'Error delete user',
  DeleteUser = 'delete is successful',
  ErrorMovieList = 'Error movie list',
  ErrorDeleteMovie = 'Error delete movie',
  DeleteMovie = 'delete is successful',
  ErrorActorList = 'Error actor list',
  ErrorDeleteActor = 'Error delete actor',
  DeleteActor = 'delete is successful',
  ErrorGenreList = 'Error genre list',
  ErrorDeleteGenre = 'Error delete genre',
  DeleteGenre = 'delete is successful'
}
