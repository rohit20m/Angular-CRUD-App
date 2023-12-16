import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggenIn()
  {
    // return !!localStorage.getItem('token');
    let isLoggenIn = (Boolean)(localStorage.getItem('isLoggenIn'));
    return isLoggenIn;

  }
}
