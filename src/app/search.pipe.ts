import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items; // Return original items if searchText is empty or items are null
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => item.id.toString().includes(searchText));
  }
}
