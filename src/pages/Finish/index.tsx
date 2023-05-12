import Footer from "../../components/Footer";
import Text from "../../components/common/Text";
import { GRAY_565656 } from "../../constants/colors";
import { useRouter } from "../../utils/helper";
import * as paths from "../../constants/paths";
import {
  Container,
  ContainerNotFound,
  StyledButton,
  StyledLayoutText,
} from "./style";
import { useCallback } from "react";

const Finish = () => {
  const { navigate } = useRouter();

  const onClickButton = useCallback(() => {
    navigate(paths.home());
  }, [navigate]);

  return (
    <Container>
      <ContainerNotFound>
        <StyledLayoutText>
          <Text weight={500}>ขอบคุณที่ทำแบบสอบถามการใช้งาน</Text>
          <Text weight={500}>โทรศัพท์มือถืออย่างปลอดภัย</Text>
          <Text size={"12px"} color={GRAY_565656}>
            ระบบจะนำคำตอบของคุณไปพัฒนาต่อไป
          </Text>
        </StyledLayoutText>
      </ContainerNotFound>

      <Footer>
        <StyledButton onClick={onClickButton}>
          <Text color={"white"}>ตกลง</Text>
        </StyledButton>
      </Footer>
    </Container>
  );
};

export default Finish;
