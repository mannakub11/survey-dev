import { useCallback } from "react";
import { Form, FormSpy } from "react-final-form";
import { GRAY_838383 } from "../../constants/colors";

import Text from "../common/Text";
import QuestionList from "./QuestionList";
import { QuestionCardType } from "../common/QuestionCard/type";

import { Container, StyledButton } from "./styled";
import { FormValues } from "./type";

import { difference } from "lodash";
import { useSetAnswer } from "../../services/question/question-query";
import Footer from "../Footer";
import { useRouter } from "../../utils/helper";
import * as paths from "../../constants/paths";

const questionMock: QuestionCardType[] = [
  {
    id: 1,
    title: "คำถามที่1",
    description: "คำถามที่1",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  {
    id: 2,
    title: "คำถามที่2",
    description: "คำถามที่2",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  {
    id: 3,
    title: "คำถามที่3",
    description: "คำถามที่3",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  {
    id: 4,
    title: "คำถามที่4",
    description: "คำถามที่4",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  {
    id: 5,
    title: "คำถามที่5",
    description: "คำถามที่5",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
];

const Questions = () => {
  const { mutate: setAnswer } = useSetAnswer();
  const { navigate } = useRouter();

  const onSubmit = useCallback(
    (value: FormValues) => {
      const newValue = Object.entries(value.questions).map(([key, value]) => {
        const id = Number(key.replace("question", ""));
        return { id, value };
      });
      console.log("=== onSubmit ===", newValue);
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
          <form onSubmit={handleSubmit}>
            <Container>
              <Text weight={500}>ชื่อแบบสอบถาม</Text>
              <Text weight={400} color={GRAY_838383}>
                กรุณาอ่านและทำความเข้าใจแบบสอบถาม
              </Text>

              <QuestionList key={"questionList"} data={questionMock} />
            </Container>

            <FormSpy<FormValues>
              subscription={{
                valid: true,
              }}
            >
              {({ valid }) => {
                return (
                  <Footer>
                    <StyledButton
                      type="submit"
                      valid={valid.toString()}
                      disabled={!valid}
                    >
                      <Text color={"white"}>ส่งคำตอบ</Text>
                    </StyledButton>
                  </Footer>
                );
              }}
            </FormSpy>
          </form>
        );
      }}
    </Form>
  );
};

export default Questions;
