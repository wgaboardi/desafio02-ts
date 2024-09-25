// valor padrao para status de login
const dioBank = {
  login: false
}

export const getAllLocalStorage = (type: string): string | null => {
  const content = localStorage.getItem(type);
  return (content);
}

export const createLocalStorage = (type: string, value: any):void => {
  localStorage.setItem(type, JSON.stringify(dioBank));
}

export const changeLocalStorage = (type: string, value: any): void => {
  localStorage.setItem(type, JSON.stringify(value));
}