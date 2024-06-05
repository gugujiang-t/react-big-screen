import { CapsuleChart } from '@jiaminghi/data-view-react';

const state = {
  config: {
    // 单位
    unit: '（人）',
    showValue: false,
    data: [],
  },
}

const UserSituation = (props) => {
  const config = {
    ...state.config,
    ...props.userIdentityCategory,
  };
  return (
    <div>
      {props.userIdentityCategory ? (
        <CapsuleChart
          config={config}
          style={{
            width: '5.85rem',
            height: '2.625rem',
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default UserSituation;
