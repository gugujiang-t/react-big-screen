import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../TopPage';
import { LeftPageIndex } from '../LeftPage';
import { CenterPageIndex } from '../CenterPage';
import { RightPageIndex } from '../RightPage';

// 总页面
export const IndexPage = () => {
  return (
    <IndexPageStyle>
      <TopPage />
      <IndexPageContent>
        <LeftPageIndex />
        <CenterPageIndex />
        <RightPageIndex />
      </IndexPageContent>
    </IndexPageStyle>
  )
}