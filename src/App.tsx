import axios from "axios";
import { useEffect, useState } from "react";
import { Advice, Card, Center, IconButton, Title } from "./components";
import { useMediaQuery } from "./hooks";
import { PatterDividerDesktop, PatterDividerMobile } from "./icons";

const URL = "https://api.adviceslip.com/advice";

type Advice = {
  id: string;
  text: string;
};

function App() {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const [advice, setAdvice] = useState<Advice>();
  const getAdvice = () => {
    axios.get(URL).then((res) => {
      const id = res.data?.slip?.id ?? "";
      const text = res.data?.slip?.advice ?? "";
      setAdvice({ id, text });
    });
  };

  useEffect(getAdvice, []);

  if (!advice) return null;
  return (
    <Center>
      <Card>
        <Title title={`ADVICE #${advice?.id ?? ""}`} />
        <Advice advice={advice?.text ?? ""} />
        {isDesktop ? <PatterDividerDesktop /> : <PatterDividerMobile />}
        <IconButton onClick={getAdvice} />
      </Card>
    </Center>
  );
}

export default App;
