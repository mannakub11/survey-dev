import { GRAY_F9FAFB } from "../../../constants/colors";
import { StyledButton, StyledFooter } from "./styled";
import { ButtonFooterProp, FooterProp } from "./type";

export const ButtonFooter = (prop: ButtonFooterProp) => {
  const { children, isValid = true, onClick, ...restProps } = prop;

  return (
    <StyledButton
      type="submit"
      valid={isValid.toString()}
      disabled={!isValid}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

const FooterComponent = (props: FooterProp) => {
  const { children, backgroundColor = GRAY_F9FAFB } = props;
  return (
    <StyledFooter backgroundColor={backgroundColor}>
      {children && children}
    </StyledFooter>
  );
};

export default FooterComponent;
