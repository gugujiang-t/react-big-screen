import React, { PureComponent } from 'react';
import EChartsCommon from '@/components/EChartsCommon';
import { trafficOptions } from './options';

class TrafficSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { trafficStatus } = this.props;
    return (
      <div
        style={{
          width: '5.375rem',
          height: '3.125rem',
        }}>
        {trafficStatus ? (
          <EChartsCommon renderer={renderer} option={trafficOptions(trafficStatus)} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default TrafficSituation;
