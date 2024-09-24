import CryptoJS from 'crypto-js';

interface IDioBank {
  login: boolean 
}

const dioBank = {
  login: false
}

const secretKey = 'forever';

export const getAllLocalStorage = (): string | null => {
  //const encryptedFromStorage = localStorage.getItem('diobank');
  const loggedIn = localStorage.getItem('diobank');
  //const decryptedData = encryptedFromStorage !== null ? CryptoJS.AES.decrypt(encryptedFromStorage, secretKey) : null;
  //const originalData = decryptedData !== null ? JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8)) : false;
  //console.log(originalData)
  return loggedIn;
}

export const createLocalStorage = ():void => {
  //const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(dioBank), secretKey).toString();
  //localStorage.setItem('diobank', JSON.stringify(loggedIn));
  localStorage.setItem('diobank', JSON.stringify(dioBank));
  console.log('criei')
}

export const changeLocalStorage = (value: IDioBank): void => {
  //const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
  localStorage.setItem('diobank', JSON.stringify(value));
  console.log('mudei')
}