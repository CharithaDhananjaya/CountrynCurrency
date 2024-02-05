export interface inputUser {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password?: string;
  userId: string;
  firstName: string;
  lastName: string;
}
