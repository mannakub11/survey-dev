import { FieldArray } from "react-final-form-arrays";
import QuestionCard from "../../common/QuestionCard";
import { QuestionCardType } from "../../common/QuestionCard/type";
import { Container } from "../styled";
import { useMemo } from "react";
import { QuestionListProp } from "./type";

const QuestionList = (props: QuestionListProp) => {
  const { data } = props;
  const questionCard = useMemo(() => {
    return data?.map((x: QuestionCardType, index: number) => {
      return <QuestionCard key={`${index}-${x.id}`} {...x} />;
    });
  }, []);

  return <Container>{questionCard}</Container>;
};

export default QuestionList;
