export interface UserLogin extends Array<UserLogin> {}

export interface UserLogin {
  id: number;
  email: string;
  password: string;
}

export interface UserLoginApi {
  payload: UserLogin;
}
