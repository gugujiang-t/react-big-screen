import { useRoutes } from 'react-router-dom'
import { Iconstyle } from './assets/icon/iconfont';
import { Globalstyle } from './style/global.js';
import routes from './router'

function App() {
  return (
    <>
      {/* 全局样式注册到界面中 */}
      <Iconstyle></Iconstyle>
      <Globalstyle></Globalstyle>
      {/* 声明式路由管理 */}
      {useRoutes(routes)}
    </>
  )
}

export default App
