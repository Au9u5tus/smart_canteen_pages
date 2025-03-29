<template>
  <div>
    <div class="stats-container">
      <div class="stat-item">
        <img src="菜品数量图标路径" alt="菜品数量图标" />
        <span>菜品数量</span>
        <p>{{ dishCount }}</p>
      </div>
      <div class="stat-item">
        <img src="订单数量图标路径" alt="订单数量图标" />
        <span>订单数量</span>
        <p>{{ orderCount }}</p>
      </div>
      <div class="stat-item">
        <img src="订单总额图标路径" alt="订单总额图标" />
        <span>订单总额</span>
        <p>{{ orderTotal }}</p>
      </div>
<!--      <div class="stat-item">-->
<!--        <img src="资讯数量图标路径" alt="资讯数量图标" />-->
<!--        <span>资讯数量</span>-->
<!--        <p>{{ infoCount }}</p>-->
<!--      </div>-->
    </div>
    <div class="chart-container">
      <div id="sales-trend-chart" class="chart"></div>
    </div>
    <div class="sub-chart-container">
      <div class="sub-chart">
        <div id="dish-category-chart"></div>
      </div>
      <div class="sub-chart">
        <div id="ordering-dish-chart"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'Statistic',
  data() {
    return {
      dishCount: 13,
      orderCount: 0,
      orderTotal: 0,
      infoCount: 8,
      salesTrendData: [
        { value: 0, name: '2025-01-23' },
        // 补充更多数据
      ],
      dishCategoryData: [
        { value: 3, name: '肉类', percent: '23.08%' },
        { value: 2, name: '鱼', percent: '15.39%' },
        { value: 4, name: '蔬菜', percent: '30.77%' },
        { value: 2, name: '主食', percent: '15.38%' },
        { value: 2, name: '下饭菜', percent: '15.38%' },
      ],
      orderingDishData: [
        { value: 1, name: '里脊肉', percent: '0.96%' },
        { value: 2, name: '蒜香鸡腿', percent: '1.92%' },
        { value: 5, name: '土豆泥拌面', percent: '4.81%' },
        { value: 2, name: '风味茄子', percent: '1.92%' },
        { value: 23, name: '鱼香肉丝', percent: '22.12%' },
        { value: 11, name: '包菜炒粉丝', percent: '10.58%' },
        { value: 19, name: '青椒肉丝', percent: '18.27%' },
        { value: 41, name: '葱爆肥牛', percent: '39.42%' },
      ],
    };
  },
  mounted() {
    this.initSalesTrendChart();
    this.initDishCategoryChart();
    this.initOrderingDishChart();
  },
  methods: {
    initSalesTrendChart() {
      const chartDom = document.getElementById('sales-trend-chart');
      const myChart = this.$echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
          data: this.salesTrendData.map(item => item.name),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: this.salesTrendData.map(item => item.value),
            type: 'line',
            symbol: 'pin',
          },
        ],
      };
      myChart.setOption(option);
    },
    initDishCategoryChart() {
      const chartDom = document.getElementById('dish-category-chart');
      const myChart = this.$echarts.init(chartDom);
      const option = {
        title: {
          text: '系统不同菜品分类下的菜品数量',
          subtext: '统计维度：菜品分类',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'left',
          top: '10%',
        },
        series: [
          {
            name: '菜品数量',
            type: 'pie',
            radius: '50%',
            data: this.dishCategoryData.map(item => ({
              value: item.value,
              name: item.name,
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    initOrderingDishChart() {
      const chartDom = document.getElementById('ordering-dish-chart');
      const myChart = this.$echarts.init(chartDom);
      const option = {
        title: {
          text: '系统中正在点餐的菜品统计',
          subtext: '统计维度：菜品名称',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'left',
          top: '10%',
        },
        series: [
          {
            name: '正在点餐的菜品',
            type: 'pie',
            radius: '50%',
            data: this.orderingDishData.map(item => ({
              value: item.value,
              name: item.name,
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  text-align: left;
  margin-bottom: 20px;
}
.stats-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.stat-item {
  border: 1px solid #ccc;
  padding: 10px;
  width: 150px;
}
.chart-container {
  margin-bottom: 20px;
}
.chart {
  height: 300px;
}
.sub-chart-container {
  display: flex;
  justify-content: space-around;
}
.sub-chart {
  width: 48%;
}
</style>