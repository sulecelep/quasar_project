<template>
  <div
    style="
      margin-top: 50px;
      margin-bottom: 50px;
      margin-right: 50px;
      margin-left: 50px;
    "
  >
    <h6>Column Chart Örnek</h6>
    <div>
      <apexchart
        width="500"
        :theme="options.theme"
        type="bar"
        :options="options"
        :series="options.series"
      ></apexchart>
    </div>
  </div>
  <div
    style="
      margin-top: 50px;
      margin-bottom: 50px;
      margin-right: 50px;
      margin-left: 50px;
    "
  >
    <h6>HeatMap Chart Örnek</h6>
    <div >
        <apexchart type="heatmap" height="350" :options="optionsHeatMap.chartOptions" :series="optionsHeatMap.series"></apexchart>

    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Apexchart from "vue3-apexcharts";

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
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Ağustos",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Temmuz",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Haziran",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Mayıs",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Nisan",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Mart",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Şubat",
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    {
      name: "Ocak",
      data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
  ],
  chartOptions: {
            chart: {
              height: 350,
              type: 'heatmap',
            },
            dataLabels: {
              enabled: true
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
                      name: 'Takvim',
                      color: '#128FD9'
                    },
                   
                   
                  ]
                }
              }
            },
            //colors: ["#008FFB"],
            title: {
              text: 'HeatMap Chart (Single color)'
            },
          },
});
</script>
