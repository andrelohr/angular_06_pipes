
// Pipe apenas ilustrativo. Não utilizado em projetos.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      (v: any) => v.toLocaleLowerCase().indexOf(filter) != -1
      //v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
    // 5:02

    return null;
  }

}
