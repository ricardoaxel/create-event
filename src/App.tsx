import { Header } from "@components/organisms";

import CreateEvent from "./pages/createEvent/createEvent";
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
