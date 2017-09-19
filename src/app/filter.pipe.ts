import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrSups: any, filter: any): any {
    var arr = [];
    var cateId = filter.cateId;
    var itemId = filter.itemId;
    var page = filter.page;
    var i, j;
    if (!arrSups || !filter) {
      return arrSups;
    }
    if (cateId != "" && itemId != "" && page == "itemDetail") {
      for (i in arrSups) {
        for (j in arrSups[i].items) {
          if ((itemId == arrSups[i].items[j].id) && (cateId == arrSups[i].items[j].cate_id)) {
            arr.push(arrSups[i]);
          }
        }
      }
      return arr;
    } else if (cateId != "" && itemId == "" && page == "Catagories") {
      for (i in arrSups) {
        for (j in arrSups[i].items) {
          if (cateId == arrSups[i].id) {
            arr.push(arrSups[i].items[j]);
          }
        }
      }
      return arr;
    }
  }
}
