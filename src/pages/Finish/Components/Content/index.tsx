import Text from "../../../../components/common/Text";
import { GRAY_565656 } from "../../../../constants/colors";
import {
  Container,
  ContainerImage,
  StyledImage,
  StyledLayoutText,
} from "./style";
import ImageBOTGuide from "../../../../constants/images/image_bot_guide.jpeg";

const Content = () => {
  return (
    <Container>
      <StyledLayoutText>
        <Text weight={700} type="Bold" size="20px">
          ขอบคุณที่ร่วมทำแบบทดสอบ
        </Text>
        <Text weight={400} size={"16px"} color={GRAY_565656}>
          อ่านคำแนะนำเพิ่มเติมเกี่ยวกับการทำธุรกรรมอย่าง ปลอดภัยได้ที่ด้านล่าง
        </Text>
      </StyledLayoutText>
      <ContainerImage>
        <StyledImage src={ImageBOTGuide} alt="ImageBOTGuide" />
      </ContainerImage>
    </Container>
  );
};

export default Content;
