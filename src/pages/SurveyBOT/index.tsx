import { useCallback } from "react";
import { Form } from "react-final-form";
import { difference } from "lodash";

import { QuestionCardType } from "../../components/QuestionCard/type";
import { useSetAnswer } from "../../services/question/question-query";
import { useRouter } from "../../utils/helper";
import * as paths from "../../constants/paths";
import { questionMock } from "../../utils/api/mock-data";

import { FormValues } from "./type";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { StyleForm } from "./style";

const SurveyBOT = () => {
  const { mutate: setAnswer } = useSetAnswer();
  const { navigate } = useRouter();

  const onSubmit = useCallback(
    (value: FormValues) => {
      const newValue = Object.entries(value.questions).map(([key, value]) => {
        const id = Number(key.replace("question", ""));
        return { id, value };
      });

      setAnswer(newValue);
      navigate(paths.finish());
    },
    [setAnswer, navigate]
  );

  const validateForm = useCallback((value: FormValues) => {
    const { questions } = value;
    const errors = { questions: {} };

    const newQuestion = (questions && Object.entries(questions)) || [];

    if (newQuestion.length !== questionMock.length) {
      const x = newQuestion.map(([key]) => key);

      const errorNumber = difference(
        questionMock.map((q: QuestionCardType) => `question${q.id}`),
        x
      );

      for (const n of errorNumber) {
        errors["questions"][n] = "กรุณาเลือกคำตอบ";
      }
    }

    return errors;
  }, []);

  return (
    <Form<FormValues> onSubmit={onSubmit} validate={validateForm}>
      {({ handleSubmit }) => {
        return (
          <StyleForm onSubmit={handleSubmit}>
            <Content />
            <Footer />
          </StyleForm>
        );
      }}
    </Form>
  );
};

export default SurveyBOT;
