import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  addManager(id:any)
  {
    return this.http.post<any>("http://localhost:3000/person",id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
