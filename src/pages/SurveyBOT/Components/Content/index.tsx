import Text from "../../../../components/common/Text";
import { GRAY_5A6E7B } from "../../../../constants/colors";
import { questionMock } from "../../../../utils/api/mock-data";
import QuestionList from "./Components/QuestionList";
import { Container, ContainerTextDescription, ContainerTitle } from "./styled";

const Content = () => {
  return (
    <Container>
      <ContainerTitle>
        <Text weight={700} size="16px" lineHeight="24px" type="Bold">
          แบบสอบถามการใช้งานโทรศัพท์มือถืออย่างปลอดภัย
        </Text>
        <ContainerTextDescription>
          <Text weight={400} color={GRAY_5A6E7B} size="16px" lineHeight="24px">
            ตอบคำถามต่อไปนี้เพื่อทบทวนความเข้าใจของคุณในการใช้โทรศัพท์อย่างปลอดภัยตามมาตรการป้องกันภัยทุจริต
            ทางออนไลน์
          </Text>
        </ContainerTextDescription>
      </ContainerTitle>
      <QuestionList key={"questionList"} data={questionMock} />
    </Container>
  );
};

export default Content;
