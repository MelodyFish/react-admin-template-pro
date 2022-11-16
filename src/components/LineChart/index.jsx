import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function LineChart() {
  const option = {
    color: ['rgb(98,218,171)', 'rgb(99,149,249)'],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      show: true
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '代码量',
        type: 'line',
        data: [120, 132, 101, 134, 90, 150, 140],
        showSymbol: false,
      },
      {
        name: 'Git提交量',
        type: 'line',
        data: [70, 100, 120, 76, 56, 78, 97],
        showSymbol: false,
      }
    ]
  }
  return <ReactECharts option={option} notMerge={true} style={{width: '95%', height: '300px'}} />
}
