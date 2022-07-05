import { MotionValue, PanInfo } from "framer-motion";

export interface IconProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}
export interface SkillProps {
  className?: string;
  name: string;
  color: string;
  image: string;
  variant?: any;
}

export interface PageProps {
  index: number;
  renderPage: (props: { index: number }) => JSX.Element;
  x: MotionValue,
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}
export interface virtualizedPageProps{
  children:( props:{index:number})=>JSX.Element;
}