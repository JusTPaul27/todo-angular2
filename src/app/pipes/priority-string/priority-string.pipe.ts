import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityString'
})
export class PriorityStringPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 0: 
      return 'Bassa';
      case 1: 
      return 'Media';
      case 2: 
      return 'Alta';
      
      default:
        return 'Molto alta'
    }
  }

}
