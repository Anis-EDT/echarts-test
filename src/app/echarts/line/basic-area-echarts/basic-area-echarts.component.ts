import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from 'src/app/common/service/echart.service';
import { BasicEchartLineModel } from 'src/app/common/model/echart.model';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-basic-area-echarts',
  templateUrl: './basic-area-echarts.component.html',
  styleUrls: ['./basic-area-echarts.component.scss']
})
export class BasicAreaEchartsComponent implements OnInit, OnDestroy {

  _chartOption: EChartOption;
  subscription: Subscription;
  _isDarkMode: boolean = false;
  _theme: string;
  constructor(private echartSevrice: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartSevrice.getbasicAreaEchartData().subscribe(data => {
      this._initBasicAreaEcharts(data);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
   onChartDataZoom ($event: any): void {
    console.log("hehi, ",$event.batch[0].end - $event.batch[0].start)
   if( ($event.batch[0].end - $event.batch[0].start) > 20) {
     console.log("madeit")
    this._chartOption.color = 'blue';
    this._chartOption.update();
    console.log("hehi, ",$event.batch[0].end - $event.batch[0].start)
   }


   // console.log($event.batch[0].start)
  }
  

  private _initBasicAreaEcharts(chartData: BasicEchartLineModel[]) {

    this._theme = this._isDarkMode ? 'dark' : '';

    this._chartOption = {
      tooltip: {
        show: true
      },
      xAxis : {
        type: 'time',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value'
      },
      
      series: [
      {
      data: [
        [946684800000, 0],
        [978307200000, 1],
        [1009843200000, 2],
        [1041379200000, 3],
        [1072915200000, 4],
        [1104537600000, 5],
        [1136073600000, 6],
        [1167609600000, 7],
        [1199145600000, 8],
        [1230768000000, 9],
        [1262304000000, 10],
        [1293840000000, 11],
        [1325376000000, 12],
        [1356998400000, 13],
        [1388534400000, 14],
        [1420070400000, 15],
        [1451606400000, 16],
        [1483228800000, 17],
        [1514764800000, 18],
        [1546300800000, 19],
        [1577836800000, 20],
        [1609459200000, 21],
        [1640995200000, 22],
        [1672531200000, 23],
        [1704067200000, 24],
        [1735689600000, 25],
        [1767225600000, 26],
        [1798761600000, 27],
        [1830297600000, 28],
        [1861920000000, 29],
        [1893456000000, 30],
        [1924992000000, 31],
        [1956528000000, 32],
        [1988150400000, 33],
        [2019686400000, 34],
        [2051222400000, 35],
        [2082758400000, 36],
        [2114380800000, 37],
        [2145916800000, 38],
        [2177452800000, 39],
        [2208988800000, 40],
        [2240611200000, 41],
        [2272147200000, 42],
        [2303683200000, 43],
        [2335219200000, 44],
        [2366841600000, 45],
        [2398377600000, 46],
        [2429913600000, 47],
        [2461449600000, 48],
        [2493072000000, 49],
        [2524608000000, 50],
        [2556144000000, 51],
        [2587680000000, 52],
        [2619302400000, 53],
        [2650838400000, 54],
        [2682374400000, 55],
        [2713910400000, 56],
        [2745532800000, 57],
        [2777068800000, 58],
        [2808604800000, 59],
        [2840140800000, 60],
        [2871763200000, 61],
        [2903299200000, 62],
        [2934835200000, 63],
        [2966371200000, 64],
        [2997993600000, 65],
        [3029529600000, 66],
        [3061065600000, 67],
        [3092601600000, 68],
        [3124224000000, 69],
        [3155760000000, 70],
        [3187296000000, 71],
        [3218832000000, 72],
        [3250454400000, 73],
        [3281990400000, 74],
        [3313526400000, 75],
        [3345062400000, 76],
        [3376684800000, 77],
        [3408220800000, 78],
        [3439756800000, 79],
        [3471292800000, 80],
        [3502915200000, 81],
        [3534451200000, 82],
        [3565987200000, 83],
        [3597523200000, 84],
        [3629145600000, 85],
        [3660681600000, 86],
        [3692217600000, 87],
        [3723753600000, 88],
        [3755376000000, 89],
        [3786912000000, 90],
        [3818448000000, 91],
        [3849984000000, 92],
        [3881606400000, 93],
        [3913142400000, 94],
        [3944678400000, 95],
        [3976214400000, 96],
        [4007836800000, 97],
        [4039372800000, 98],
        [4070908800000, 99],
      ],
        type: 'line',
        areaStyle: {},
      }],
      color: 'red',
      dataZoom: [
        {
          type: 'slider',
          xAxisIndex: 0,
          filterMode: 'none'
        },
        {
          type: 'slider',
          yAxisIndex: 0,
          filterMode: 'none'
        },
        {
          type: 'inside',
          xAxisIndex: 0,
          filterMode: 'none'
        },
        {
          type: 'inside',
          yAxisIndex: 0,
          filterMode: 'none'
        }
      ],
    }
  }

}
