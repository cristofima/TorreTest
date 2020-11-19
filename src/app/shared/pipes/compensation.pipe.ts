import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/person.model';

@Pipe({
  name: 'compensation'
})
export class CompensationPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if(args && args.length){
      let emp = args[0];
      if(value.includes("employment") && emp.employee){
        return this.getCompensationDetail(emp.employee);
      }

      if(value.includes("freelance") && emp.freelancer){
        return this.getCompensationDetail(emp.freelancer);
      }

      if(value.includes("internships") && emp.intern){
        return this.getCompensationDetail(emp.intern);
      }
    }

    return null;
  }

  private getCompensationDetail(data: Employee){
    return `${data.currency} ${data.amount} ${data.periodicity}`;
  }

}
