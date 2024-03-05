import { getlocalstorage } from "./localStorage";

export const IsSessions = ():boolean=>{
  const data =   getlocalstorage("user");
  if(data){
    return true;
  }else{
    return false;
  }
}