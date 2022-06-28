import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor'
})
export class PriorityColorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case -1:
        return 'darkcyan'
      case 0:
        return 'green'
      case 1:
        return 'yellow'
      case 2:
        return 'orange'
      default:
        return 'red'
    }
  }

}
