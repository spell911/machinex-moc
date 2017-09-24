import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrSups: any, filter: any): any {
    var arr = [];
    var countToPush = [];
    var cateId = filter.cateId;
    var itemId = filter.itemId;
    var page = filter.page;
    var i, j, k, l, m, n, o, r, p;
    var controlCheck;
    var guideCheck;
    var languageCheck;
    if (!arrSups || !filter) {
      return arrSups;
    }
    if (cateId != "" && itemId != "" && page == "itemDetail") {
      var guide = filter.guide;
      var control = filter.control;
      var language = filter.language;
      if (guide.guide[0] == undefined && control.control[0] == undefined && language.language[0] == undefined) {
        for (i in arrSups) {
          for (j in arrSups[i].items) {
            if ((itemId == arrSups[i].items[j].id) && (cateId == arrSups[i].items[j].cate_id)) {
              arr.push(arrSups[i]);
            }
          }
        }
        return arr;
      } else {
        for (i in arrSups) {
          for (j in arrSups[i].items) {
            if ((itemId == arrSups[i].items[j].id) && (cateId == arrSups[i].items[j].cate_id)) {
              for (k = 0; k < guide.guide.length; k++) {
                if (arrSups[i].items[j].guide.indexOf(guide.guide[k]) > -1) {
                  guideCheck = 1;
                }
              }
              for (l = 0; l < control.control.length; l++) {
                if (arrSups[i].items[j].control.indexOf(control.control[l]) > -1) {
                  controlCheck = 1;
                }
              }
              for (m = 0; m < language.language.length; m++) {
                if (arrSups[i].language.indexOf(language.language[m]) > -1) {
                  languageCheck = 1;
                }
              }
              if (guideCheck == 1 && controlCheck == 1 && languageCheck == 1) {
                arr.push(arrSups[i]);
              } else if ((guideCheck == 1 && controlCheck == 1) && language.language[0] == undefined) {
                arr.push(arrSups[i]);
              } else if ((guideCheck == 1 && languageCheck == 1) && control.control[0] == undefined) {
                arr.push(arrSups[i]);
              } else if ((controlCheck == 1 && languageCheck == 1) && guide.guide[0] == undefined) {
                arr.push(arrSups[i]);
              } else if (guideCheck == 1 && (control.control[0] == undefined && language.language[0] == undefined)) {
                arr.push(arrSups[i]);
              } else if (controlCheck == 1 && (guide.guide[0] == undefined && language.language[0] == undefined)) {
                arr.push(arrSups[i]);
              } else if (languageCheck == 1 && (guide.guide[0] == undefined && control.control[0] == undefined)) {
                arr.push(arrSups[i]);
              }
            }
          }
        }
        return arr;
      }
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
