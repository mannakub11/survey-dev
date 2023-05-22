import FooterComponent, {
  ButtonFooter,
} from "../../../../components/common/Footer";
import Text from "../../../../components/common/Text";
import { FormSpy } from "react-final-form";
import { FormValues } from "../../type";
import { GRAY_8A9FAB } from "../../../../constants/colors";

const Footer = () => {
  return (
    <FormSpy<FormValues>
      subscription={{
        valid: true,
      }}
    >
      {({ valid }) => {
        return (
          <FooterComponent backgroundColor="white">
            <ButtonFooter type="submit" isValid={valid}>
              <Text
                color={valid ? "white" : GRAY_8A9FAB}
                weight={700}
                type="Bold"
                size="16px"
                lineHeight="24px"
              >
                ส่งคำตอบ
              </Text>
            </ButtonFooter>
          </FooterComponent>
        );
      }}
    </FormSpy>
  );
};

export default Footer;
