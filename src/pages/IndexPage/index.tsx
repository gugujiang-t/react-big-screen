import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../TopPage';
// import { LeftPage } from '../LeftPage';
// import { CenterPage } from '../CenterPage';
// import { RightPage } from '../RightPage';

// 总页面
export const IndexPage = () => {
  return (
    <IndexPageStyle>
      <TopPage />
      <IndexPageContent>
        {/* <LeftPage />
        <CenterPage className='center-page' />
        <RightPage /> */}
      </IndexPageContent>
    </IndexPageStyle>
  )
}