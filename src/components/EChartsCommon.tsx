import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsType } from 'echarts';

type OptionType = {
  [T: string]: unknown
}

const state = {
  width: '100%',
  height: '100%',
};

const EChartsCommon = (props: {
  renderer: 'canvas' | 'svg',
  notMerge: boolean,
  lazyUpdate: boolean,
  option: OptionType
}) => {

  const drawDomRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<EChartsType | null>(null);

  const dispose = () => {
    if (!chartRef.current) {
      return;
    }
    chartRef.current.dispose();
    chartRef.current = null;
  };

  const initChart = (dom: HTMLDivElement | null) => {
    if (!dom) return
    // renderer 用于配置渲染方式 可以是 svg 或者 canvas
    const renderer = props.renderer || 'canvas';
    chartRef.current = echarts.init(dom, null, {
      renderer,
      width: 'auto',
      height: 'auto',
    });
  }


  const setOption = useCallback((option: OptionType) => {
    if (!chartRef.current) {
      return;
    }
    const notMerge = props.notMerge;
    const lazyUpdate = props.lazyUpdate;
    chartRef.current.setOption(option, notMerge, lazyUpdate);
  }, [props.notMerge, props.lazyUpdate]);

  const resize = debounce(() => {
    chartRef.current && chartRef.current.resize();
  }, 100);

  const initHandle = () => {
    // 初始化图表
    initChart(drawDomRef.current);
    // 将传入的配置(包含数据)注入
    setOption(props.option);
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', resize);
  }

  useEffect(() => {
    initHandle()
    // 组件卸载
    return () => {
      window.removeEventListener('resize', resize);
      dispose()
    }
  }, [])

  // 每次更新组件都重置
  useEffect(() => {
    setOption(props.option)
  }, [props.option, setOption])

  return (
    <div
      className='default-chart'
      ref={drawDomRef}
      style={{ width: state.width, height: state.height }}
    />
  )
}

export default EChartsCommon