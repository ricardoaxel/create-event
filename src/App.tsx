import { Header } from "@components/organisms";

import CreateEvent from "./components/templates/createEvent/createEvent";
import "./App.css";

function App() {
  return (
    <>
      <Header altText="CREWFARE" />
      <CreateEvent />
    </>
  );
}

export default App;
