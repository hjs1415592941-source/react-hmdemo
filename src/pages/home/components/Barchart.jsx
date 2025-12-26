// 柱状图组件

  import * as echarts from 'echarts';
  import { useEffect, useRef } from 'react';


  const BarChart=({ title = '默认标题', sData = [0, 0, 0] })=>{
    
    const charRef=useRef(null)
    useEffect(()=>{
      //  基于准备好的dom，初始化echarts实例
  // const myChart = echarts.init(document.getElementById('main'));
    const chartDom=charRef.current
    const myChart=echarts.init(chartDom)
    // 绘制图表
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: sData
        }
      ]
    });
      },[title,sData])

    return <div><div ref={charRef} id='main' style={{ width: '600px', height: '400px' }}></div></div>
  }
  export default BarChart