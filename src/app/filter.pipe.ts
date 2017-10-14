import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrData: any, filter: any): any {
    var arr = [];
    var countToPush = [];
    var temp = new Object();
    var cateId = filter.cateId;
    var itemId = filter.itemId;
    var supId = filter.supId;
    var page = filter.page;
    var section = filter.section;
    var i, j, k, l, m, n, o, r, p;
    var controlCheck;
    var guideCheck;
    var languageCheck;
    if (!arrData || !filter) {
      return arrData;
    }

    if (cateId != "" && itemId != "" && page == "itemDetail") {
      if (section == "specFilter") {
        for (i in arrData) {
          if (cateId == arrData[i].id) {
            for (j in arrData[i].items) {
              if (itemId == arrData[i].items[j].id) {
                temp["guide"] = arrData[i].items[j].guide;
                temp["control"] = arrData[i].items[j].control;
                arr.push(temp);
              }
            }
          }
        }
        console.log(arr)
        return arr;
      } else {
        var guide = filter.guide;
        var control = filter.control;
        var language = filter.language;
        if (guide.guide[0] == undefined && control.control[0] == undefined && language.language[0] == undefined) {
          for (i in arrData) {
            for (j in arrData[i].categories) {
              for (k in arrData[i].categories[j].id) {
                if ((cateId == arrData[i].categories[j].id) && (itemId == arrData[i].categories[j].items[k].id)) {
                  arr.push(arrData[i]);
                }
              }
            }
          }
          console.log(arr)
          return arr;
        } else {
          for (i in arrData) {
            for (j in arrData[i].categories) {
              for (k in arrData[i].categories[j].id) {

                if ((cateId == arrData[i].categories[j].id) && (itemId == arrData[i].categories[j].items[k].id)) {
                  for (l = 0; l < guide.guide.length; l++) {
                    if (arrData[i].categories[j].items[k].guide.indexOf(guide.guide[l]) > -1) {
                      guideCheck = 1;
                    }
                  }
                  for (l = 0; l < control.control.length; l++) {
                    if (arrData[i].categories[j].items[k].control.indexOf(control.control[l]) > -1) {
                      controlCheck = 1;
                    }
                  }
                  for (m = 0; m < language.language.length; m++) {
                    if (arrData[i].language.indexOf(language.language[m]) > -1) {
                      languageCheck = 1;
                    }
                  }
                }
              }

              if (guideCheck == 1 && controlCheck == 1 && languageCheck == 1) {
                arr.push(arrData[i]);
              } else if ((guideCheck == 1 && controlCheck == 1) && language.language[0] == undefined) {
                arr.push(arrData[i]);
              } else if ((guideCheck == 1 && languageCheck == 1) && control.control[0] == undefined) {
                arr.push(arrData[i]);
              } else if ((controlCheck == 1 && languageCheck == 1) && guide.guide[0] == undefined) {
                arr.push(arrData[i]);
              } else if (guideCheck == 1 && (control.control[0] == undefined && language.language[0] == undefined)) {
                arr.push(arrData[i]);
              } else if (controlCheck == 1 && (guide.guide[0] == undefined && language.language[0] == undefined)) {
                arr.push(arrData[i]);
              } else if (languageCheck == 1 && (guide.guide[0] == undefined && control.control[0] == undefined)) {
                arr.push(arrData[i]);
              }
            }
          }
          return arr;
        }
      }
    } else if (cateId != "" && itemId == "" && page == "Catagories") {
      for (i in arrData) {
        for (j in arrData[i].items) {
          if (cateId == arrData[i].id) {
            arr.push(arrData[i].items[j]);
          }
        }
      }
      return arr;
    } else if (cateId != "" && itemId != "" && supId != "" && page == "SupplierDetail") {
      for (i in arrData) {
        if (supId == arrData[i].id) {
          arr.push(arrData[i]);
        }
      }
      return arr;
    }
  }
}
