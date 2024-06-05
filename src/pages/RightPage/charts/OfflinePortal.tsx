import EChartsCommon from '@/components/EChartsCommon'
import { OfflinePortalOptions } from './offlinePortalOptions';
import { RendererType } from 'echarts/types/src/util/types.js';


const state: {
  renderer: RendererType
} = {
  renderer: 'canvas'
}
export const OfflinePortal = (props) => {
  return (
    <div
      style={{
        width: '5.375rem',
        height: '2.875rem',
      }}>
      <EChartsCommon
        renderer={state.renderer}
        option={OfflinePortalOptions(props.offlinePortalData)}
      />
    </div>
  )
}



export default OfflinePortal;
