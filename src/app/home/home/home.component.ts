import { Component } from '@angular/core';
import { HomeServicesService } from '../homeServices/home-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userData: any[] = [];
  loaderPage: boolean = false;
  filterName: string = '';

  constructor(private userServ: HomeServicesService) {}

  ngOnInit() {
    this.getAll();
    this.userServ.filterName$.subscribe((filterName: string) => {
      this.filterName = filterName;
    });
  }

  getAll() {
    this.loaderPage = true;
    this.userServ.getAllDataUser().subscribe((data: any) => {
      this.userData = data.data;
      this.loaderPage = false;
      //   console.log(this.userData);

      /*   if (data  && data.data && Array.isArray(data.data)) {
    this.userData = data.data;
  } else {
    console.error('Unexpected response structure:', data);
  } */
    });
  }
}
