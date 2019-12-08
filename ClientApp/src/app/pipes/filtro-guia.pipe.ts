import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGuia'
})
export class FiltroGuiaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
