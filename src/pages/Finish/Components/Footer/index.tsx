import { useCallback } from "react";
import FooterComponent, {
  ButtonFooter,
} from "../../../../components/common/Footer";
import Text from "../../../../components/common/Text";
import { useRouter } from "../../../../utils/helper";
import * as paths from "../../../../constants/paths";

const Footer = () => {
  const { navigate } = useRouter();

  const onClickButton = useCallback(() => {
    navigate(paths.home());
  }, [navigate]);
  return (
    <FooterComponent>
      <ButtonFooter onClick={onClickButton}>
        <Text
          color="white"
          weight={700}
          type="Bold"
          size="16px"
          lineHeight="24px"
        >
          กลับหน้าหลัก
        </Text>
      </ButtonFooter>
    </FooterComponent>
  );
};

export default Footer;
