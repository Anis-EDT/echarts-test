import { Component } from '@angular/core';
import { EchartsTypeModel } from 'src/app/common/model/echart.model';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html'
})
export class LineComponent {
  selectedEchartsType: string = 'SELECT';
  echartsTypeList: EchartsTypeModel[] = [
    {
      name: 'Select',
      code: 'SELECT'
    },
    {
      name: 'Basic Bar Echart',
      code: 'BASIC_LINE_ECHART'
    },
    {
      name: 'Basic Area Echart',
      code: 'BASIC_AREA_ECHART'
    }
  ];
}
