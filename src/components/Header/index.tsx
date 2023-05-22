import Text from "../common/Text";
import { Container, ContainerContent, ContainerIcon } from "./styled";
import closeIcon from "../../constants/icons/ic_close.svg";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <Container>
      <ContainerContent>
        <Text weight={700} type="Bold" lineHeight="30px" size="20px">
          แบบทดสอบความรู้
        </Text>
        <ContainerIcon>
          <IconButton size="small">
            <img src={closeIcon} alt="close" width={20} height={20} />
          </IconButton>
        </ContainerIcon>
      </ContainerContent>
    </Container>
  );
};
export default Header;
