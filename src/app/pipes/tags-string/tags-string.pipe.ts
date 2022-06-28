import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsString'
})
export class TagsStringPipe implements PipeTransform {

  transform(value: string[], prefix?: string): string {
    let newValue = value;
    if (prefix) {
      newValue = value.map(t => prefix + t)
    }
    return newValue.join(' ').toUpperCase();
  }

}
