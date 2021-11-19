import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  highcharts_dornut = Highcharts;
  highcharts_pie = Highcharts;
  highcharts_map = Highcharts

  MapHighcharts = {}
  DornutHighcharts = {}
  BarHighcharts = {}

  constructor() { }

  ngOnInit(): void {


    this.DornutHighcharts = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Number Of Facilities Per Region'
      },
      subtitle: {
          text: 'Mininstry Of Health'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Number Of Facilities',
          data: [
              ['Central Region', 8],
              ['Teso', 3],
              ['Western', 1],
              ['Northern', 6],
              ['Eastern', 8],
              ['Toro', 4],
              ['Buganda North', 4],
              ['South Western', 1],
              ['Ankore', 1],
              HC_exporting(Highcharts)
          ]
      }]
  };


  this.BarHighcharts = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Number Of Facilities Against Facilicity Levels in The last 12 Years'
      },
      subtitle: {
          text: 'Source: moh.com'
      },
      xAxis: {
          categories: [
              '2009',
              '2010',
              '2011',
              '2012',
              '2013',




          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Facilities (N0)'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0,
              size:80
          }
      },
      series: [{
          name: 'Fuctional',
          data: [49.9, 71.5, 106.4, 129.2, 144.0]

      }, {
          name: 'Non Fuctional',
          data: [83.6, 78.8, 98.5, 93.4, 106.0]

      }, {
          name: 'Completed',
          data: [48.9, 38.8, 39.3, 41.4, 47.0]

      }, {
          name: 'Under Construction',
          data: [42.4, 33.2, 34.5, 39.7, 52.6]

      }]
  };
  }
  }

