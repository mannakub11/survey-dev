import Card from "../Card";
import Text from "../Text";
import { QuestionCardType, QuestionOptionType } from "./type";
import Radio from "@mui/material/Radio";

import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioGroupField } from "../../fields";

const QuestionCard = (props: QuestionCardType) => {
  const { id, title, description, type, option } = props;

  return (
    <Card key={`${id}`}>
      <Text weight={500}>{title}</Text>
      <Text weight={300}>{description}</Text>

      {type === 1 && (
        <RadioGroupField
          key={`questions.${title}`}
          aria-labelledby="demo-radio-buttons-group-label"
          name={`questions.question${id.toString()}`}
          row
        >
          {option.map((op: QuestionOptionType) => {
            const { label, value } = op;
            return (
              <FormControlLabel
                label={label}
                value={value}
                control={<Radio />}
              />
            );
          })}
        </RadioGroupField>
      )}
    </Card>
  );
};

export default QuestionCard;
