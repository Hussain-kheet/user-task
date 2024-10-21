import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { HomeServicesService } from '../home/homeServices/home-services.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  id: any;
  detailsProduct: any = {};
  loaderPage: boolean = false;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private serv: HomeServicesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.loaderPage = true;
    this.serv.getOneUserInformation(this.id).subscribe((data: any) => {
      this.detailsProduct = data.data;
      console.log(this.detailsProduct);
      this.loaderPage = false;
    });
  }
  goBack() {
    this.location.back();
  }
}
