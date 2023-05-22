import Card from "../common/Card";
import Text from "../common/Text";
import { QuestionCardType, QuestionOptionType } from "./type";
import Radio from "@mui/material/Radio";

import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioGroupField } from "../fields";
import { Divider } from "@mui/material";
import { Container } from "./style";
import { ReactComponent as RadioIcon } from "../../constants/icons/ic_radio.svg";
import { ReactComponent as RadioSelectedIcon } from "../../constants/icons/ic_radio_selected.svg";

const QuestionCard = (props: QuestionCardType) => {
  const { id, index, title, type, option, divider = true } = props;

  return (
    <Container>
      <Card key={`${id}`}>
        <Text weight={700} size="16px" lineHeight="24px" type="Bold">
          {`${index}. ${title}`}
        </Text>

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
                  control={
                    <Radio
                      icon={<RadioIcon width={24} height={24} />}
                      checkedIcon={<RadioSelectedIcon width={24} height={24} />}
                    />
                  }
                />
              );
            })}
          </RadioGroupField>
        )}
      </Card>
      {divider && <Divider variant="middle" />}
    </Container>
  );
};

export default QuestionCard;
