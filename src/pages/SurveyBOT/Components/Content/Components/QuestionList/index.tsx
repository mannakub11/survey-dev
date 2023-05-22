import QuestionCard from "../../../../../../components/QuestionCard";
import { QuestionCardType } from "../../../../../../components/QuestionCard/type";
import { Container, ContainerBackground, ContainerCard } from "./styled";
import { QuestionListProp } from "./type";

const QuestionList = (props: QuestionListProp) => {
  const { data } = props;

  return (
    <Container>
      <ContainerBackground>
        <ContainerCard>
          {data?.map((x: QuestionCardType, index: number) => {
            return (
              <QuestionCard
                key={`${index}-${x.id}`}
                {...x}
                divider={index !== data?.length - 1}
                index={index + 1}
              />
            );
          })}
        </ContainerCard>
      </ContainerBackground>
    </Container>
  );
};

export default QuestionList;
