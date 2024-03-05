export interface User {
  id: number;
  userId: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  password?: string;
  avatarcolor?: string;
  active: boolean;
  friends: string[];
  notifications: string;
  createAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface UserLogin {
  user:string;
  password:string;
}

export interface UserFormData {
  name:string;
  phone:string;
  email:string;
  password:string;
  confirmPassword:string;
}

//type JOse = User & LoginRe    para unir dos tipor de interfaces

 //const objetooo:Omit<User, "friends"|"active"|"avatar"> ={
   //esto sirve para omitir alguno parametros de un tipo 
//}

