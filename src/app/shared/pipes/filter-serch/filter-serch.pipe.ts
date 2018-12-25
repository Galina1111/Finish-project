import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterSerch'
})
export class FilterSerchPipe implements PipeTransform {

  // transform(data: any, search: string): any {
  //   if (!search) { return data; }

  //   return data.filter((el) => {
  //     return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  
  //   });
  // }
  transform(data: any, search: string): any {
    if (!search) { return data; }

    return data.filter((el) => {
      return el.first.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
}

