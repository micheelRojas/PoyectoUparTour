import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTour'
})
export class FiltroTourPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
