import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "../../utils/helper";

import Questions from "../../components/Questions";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Questions />
    </Container>
  );
};
export default Home;
