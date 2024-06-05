import EChartsCommon from '@/components/EChartsCommon'
import { trafficOptions } from './options'

const TrafficSituation = props => {
  return (
    <div
      style={{
        width: '5.375rem',
        height: '3.125rem'
      }}
    >
      {props.trafficStatus ? (
        <EChartsCommon option={trafficOptions(props.trafficStatus)} />
      ) : (
        ''
      )}
    </div>
  )
}

export default TrafficSituation
