<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: { Pie },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          "Raúl Peres",
          "Fabricio López",
          "Mauricio Rangel",
          "Jorge Martinez",
        ],
        datasets: [
          {
            label: "Conductores",
            data: [40, 20, 12, 30],
            backgroundColor: [
              "rgba(255, 199, 132, 0.2)",
              "rgba(154, 162, 235, 0.2)",
              "rgba(155, 206, 86, 0.2)",
              "rgba(5, 106, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 199, 132, 1)",
              "rgba(154, 162, 235, 1)",
              "rgba(155, 206, 86, 1)",
              "rgba(5, 106, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position:'bottom'
            }
        }
      },
    };
  },
};
</script>

<style>
</style>