import HeaderEmpty from "../../HeaderEmpty";
import { EmptyLayoutProp } from "./type";

const EmptyLayout = (props: EmptyLayoutProp) => {
  const { component: Component } = props;

  return (
    <>
      <HeaderEmpty />
      <Component />
    </>
  );
};

export default EmptyLayout;
