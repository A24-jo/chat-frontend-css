export const setlocalstorage = (id:string,data: string) => {
  localStorage.setItem(id, data);
};

export const getlocalstorage = (data: string) => {
  const date: string | null = localStorage.getItem(data);
  return date;
};

export const deletestorage = (data: string) => {
    localStorage.removeItem(data);
}