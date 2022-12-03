export interface UserLogin extends Array<UserLogin> {}

export interface UserLogin {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface UserLoginApi {
  payload: UserLogin;
}
