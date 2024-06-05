import EChartsCommon from '@/components/EChartsCommon'
import { mapOptions } from './options'
import { RendererType } from 'echarts/types/src/util/types.js'

const state: {
  renderer: RendererType
} = {
  renderer: 'canvas'
}

const Map = ({ mapData }) => {
  return (
    <div
      style={{
        width: '10.625rem',
        height: '8.125rem'
      }}
    >
      {(mapData) ? (
        <EChartsCommon
          renderer={state.renderer}
          option={mapOptions(mapData)}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default Map
