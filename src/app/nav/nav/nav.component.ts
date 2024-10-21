import { Component } from '@angular/core';
import { HomeServicesService } from 'src/app/home/homeServices/home-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  filterName: string = '';
  constructor(private serv: HomeServicesService) {}
  onFilterNameChange(): void {
    this.serv.updateFilterName(this.filterName); // Update the shared filter name
  }
}
