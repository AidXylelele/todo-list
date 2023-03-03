export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUserSignUp extends IUserSignIn {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
