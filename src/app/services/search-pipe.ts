import { Pipe, PipeTransform } from '@angular/core';

// a simple pipe to filter devices via a search string and a specified property name
@Pipe({
  name: 'filter'
})
export class searchPipe implements PipeTransform {

  transform(items: any[], field1:string, field2:string, value: string): any[] {
    if(!items) return [];
    if(!value) return items;

    return items.filter( str => {
        if(str[field1].toLowerCase().includes(value.toLowerCase())){
            return str[field1].toLowerCase().includes(value.toLowerCase());
        }
        if(str[field2].toLowerCase().includes(value.toLowerCase())){
            return str[field2].toLowerCase().includes(value.toLowerCase());
        }
    });
  }
}