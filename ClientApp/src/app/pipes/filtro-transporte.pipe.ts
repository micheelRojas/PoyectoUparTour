import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTransporte'
})
export class FiltroTransportePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
