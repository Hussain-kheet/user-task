import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor(private http:HttpClient) {

  }

  getAllDataUser(){
    return this.http.get('https://reqres.in/api/users')
  }
  getOneUserInformation(id: any) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  private filterSubject = new BehaviorSubject<string>(''); // Initial value is empty
  filterName$ = this.filterSubject.asObservable(); // Expose as observable

  updateFilterName(filterName: string): void {
    this.filterSubject.next(filterName); // Update the filter name
  }
}
