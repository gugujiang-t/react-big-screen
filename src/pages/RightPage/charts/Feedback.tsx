import EChartsCommon from '@/components/EChartsCommon'
import { FeedbackOptions } from './offlinePortalOptions'
import { RendererType } from 'echarts/types/src/util/types.js'

const state: {
  renderer: RendererType
} = {
  renderer: 'canvas'
}

export const Feedback = (props) => {
  return (
    <div
      style={{
        width: '1.25rem',
        height: '1.25rem'
      }}
    >
      <EChartsCommon
        renderer={state.renderer}
        option={FeedbackOptions(props.FeedbackData)}
      />
    </div>
  )
}

export default Feedback
