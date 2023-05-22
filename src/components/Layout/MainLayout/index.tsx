import Header from "../../Header";
import { MainLayoutProp } from "./type";

const MainLayout = (props: MainLayoutProp) => {
  const { component: Component } = props;

  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default MainLayout;
