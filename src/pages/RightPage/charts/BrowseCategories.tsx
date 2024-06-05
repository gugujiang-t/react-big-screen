import { BrowseCategoriesOptions } from './offlinePortalOptions';
import EChartsCommon from '@/components/EChartsCommon'
import { RendererType } from 'echarts/types/src/util/types.js';

const state: {
  renderer: RendererType
} = {
  renderer: 'canvas'
}

// 关联数据类别
export const BrowseCategories = (props) => {

  const { browseCategories } = props;
  return (
    <div
      style={{
        width: '5.375rem',
        height: '2.5rem',
      }}>
      {browseCategories ? (
        <EChartsCommon
          renderer={state.renderer}
          option={BrowseCategoriesOptions(browseCategories)}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default BrowseCategories;
