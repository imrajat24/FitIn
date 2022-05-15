import { useState } from "react";
import Nav from "../Components/Nav";
import CardContainer from "../Components/CardContainer";
function Home() {
  // Lifting up the state so that it can be used within its child components
  const [inputText, setInputText] = useState("");
  const [searchNum, setSearchNum] = useState(5);
  return (
    <>
      <Nav />
      <CardContainer
        inputText={inputText}
        setInputText={setInputText}
        searchNum={searchNum}
        setSearchNum={setSearchNum}
      />
    </>
  );
}

export default Home;
