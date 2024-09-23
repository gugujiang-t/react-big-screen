import { useEffect, useRef } from "react";
import { LayoutStyle, IndexPageStyle, IndexPageContent } from "./style";
import TopPage from "../TopPage";
import { LeftPageIndex } from "../LeftPage";
import { CenterPageIndex } from "../CenterPage";
import { RightPageIndex } from "../RightPage";
import { previewFitScale } from "@/utils/previewScale";

// 总页面 cyl: 画布大小自适应
export const LayoutPage = () => {
  const scaleDom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { calcRate, windowResize, unWindowResize } = previewFitScale(
      1920, // cyl: 画布原始宽度
      1080, // cyl: 画布原始高度
      scaleDom.current
    );
    calcRate(); // cyl: 计算初始的缩放比例，并应用到 scaleDom 上。
    windowResize(); // cyl: 添加窗口大小变化监听器
    return () => {
      unWindowResize(); // cyl: 移除resize监听事件
    };
  }, []);

  return (
    <LayoutStyle ref={scaleDom} className="scale-layout">
      <IndexPageStyle>
        <TopPage />
        <IndexPageContent>
          <LeftPageIndex />
          <CenterPageIndex />
          <RightPageIndex />
        </IndexPageContent>
      </IndexPageStyle>
    </LayoutStyle>
  );
};
