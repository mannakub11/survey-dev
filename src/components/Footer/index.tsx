import { StyledFooter } from "./styled";
import { FooterProp } from "./type";

const Footer = (props: FooterProp) => {
  const { children } = props;
  return <StyledFooter>{children && children}</StyledFooter>;
};

export default Footer;
