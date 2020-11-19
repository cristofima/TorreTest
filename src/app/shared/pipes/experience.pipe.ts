import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      const array = value.split("-");
      if(array.length == 3){
        return `+${array[0]} ${array[2]}`;
      }
    }

    return null;
  }

}
