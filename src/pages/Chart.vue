<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row justify-around">
      <div class="col-6" style="width: 500px">
        <h6>Column Chart Örnek</h6>
        <apexchart
          width="380"
          :theme="options.theme"
          type="bar"
          :options="options"
          :series="options.series"
        ></apexchart>
      </div>

      <div class="col-6" style="width: 500px">
        <h6>Pie Chart Örnek</h6>
        <!-- <apexchart type="line" height="350" :chart="multiAxis.chart" :xaxis="multiAxis.xaxis" :yaxis="multiAxis.yaxis" :dataLabels="multiAxis.dataLabels" :legend="multiAxis.legend" :tooltip="multiAxis.tooltip" :stroke="multiAxis.stroke" :colors="multiAxis.colors"  :options="multiAxis.plotOptions" :series="multiAxis.series"></apexchart> -->
        <apexchart
          type="pie"
          width="380"
          :options="pieChart.chartOptions"
          :series="pieChart.series"
        ></apexchart>
      </div>
    </div>
  </div>

  <div class="q-pa-md example-row-equal-width">
    <div class="row justify-around">
      <div class="col-6" style="width: 500px">
        <h6>Multi-Axis Chart Örnek</h6>
        <!-- <apexchart type="line" height="350" :chart="multiAxis.chart" :xaxis="multiAxis.xaxis" :yaxis="multiAxis.yaxis" :dataLabels="multiAxis.dataLabels" :legend="multiAxis.legend" :tooltip="multiAxis.tooltip" :stroke="multiAxis.stroke" :colors="multiAxis.colors"  :options="multiAxis.plotOptions" :series="multiAxis.series"></apexchart> -->
        <apexchart
          type="line"
          height="250"
          :options="multiAxis2.chartOptions"
          :series="multiAxis2.series"
        ></apexchart>
      </div>

      <div class="col-6" style="width: 500px">
        <h6>Multi-Axis Chart Örnek</h6>
        <!-- <apexchart type="line" height="350" :chart="multiAxis.chart" :xaxis="multiAxis.xaxis" :yaxis="multiAxis.yaxis" :dataLabels="multiAxis.dataLabels" :legend="multiAxis.legend" :tooltip="multiAxis.tooltip" :stroke="multiAxis.stroke" :colors="multiAxis.colors"  :options="multiAxis.plotOptions" :series="multiAxis.series"></apexchart> -->
        <apexchart
          type="line"
          height="250"
          :options="multiAxis.chartOptions"
          :series="multiAxis.series"
          :chart="multiAxis.chart"
        ></apexchart>
      </div>
    </div>
  </div>

  <div>
    <h6>HeatMap Chart Örnek</h6>
    <apexchart
      type="heatmap"
      height="350"
      :options="optionsHeatMap.chartOptions"
      :series="optionsHeatMap.series"
    ></apexchart>
  </div>
</template>

<script setup>
import { Dark } from "quasar";
import { reactive } from "vue";
import Apexchart from "vue3-apexcharts";

const pieChart = reactive({
  series: [44, 55, 13, 43, 22],
  chartOptions: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
});
const options = reactive({
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [20, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  theme: {
    mode: "light",
    palette: "palette5",
    monochrome: {
      enabled: false,
      color: "#775DD0",
      shadeTo: "light",
      shadeIntensity: 0.65,
    },
  },
});
const optionsHeatMap = reactive({
  series: [
    {
      name: "Eylül",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Ağustos",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Temmuz",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Haziran",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Mayıs",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Nisan",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Mart",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Şubat",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      name: "Ocak",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
  ],

  chartOptions: {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: -60,
              to: 31,
              name: "Takvim",
              color: "#128FD9",
            },
          ],
        },
      },
    },
    //colors: ["#008FFB"],
    title: {
      text: "HeatMap Chart (Single color)",
    },
  },
});

const multiAxis = reactive({
  series: [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Sosyal Medya",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Web Site Trafiği",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Şub",
      "02 Şub",
      "03 Şub",
      "04 Şub",
      "05 Şub",
      "06 Şub",
      "07 Şub",
      "08 Şub",
      "09 Şub",
      "10 Şub",
      "11 Şub",
      "12 Şub",
    ],
    xaxis: {
      type: "string",
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Sosyal Medya",
        },
      },
    ],
  },
});

const multiAxis2 = reactive({
  series: [
    {
      name: "Gelir",
      type: "column",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "Nakit Akımı",
      type: "column",
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: "Hasılat",
      type: "line",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: "XYZ - Stok Analizi (2009 - 2016)",
      align: "left",
      offsetX: 0,
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        title: {
          text: "Gelir (Bin Lira)",
          style: {
            color: "#008FFB",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Gelir",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#00E396",
        },
        labels: {
          style: {
            colors: "#00E396",
          },
        },
        title: {
          text: "İşletme Nakit Akışı (Bin Lira)",
          style: {
            color: "#00E396",
          },
        },
      },
      {
        seriesName: "Hasılat",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#FEB019",
        },
        labels: {
          style: {
            colors: "#FEB019",
          },
        },
        title: {
          text: "Hasılat (Bin Lira)",
          style: {
            color: "#FEB019",
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  },
});
</script>
