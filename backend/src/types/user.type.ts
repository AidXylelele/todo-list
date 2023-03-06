export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserSignUp extends IUserSignIn {
  name: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}
