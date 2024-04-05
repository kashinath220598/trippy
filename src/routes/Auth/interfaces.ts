export interface LoginResponse {
  token: string;
}

export interface LoginRequest {
  userName: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  username: string;
  userId: string;
}
