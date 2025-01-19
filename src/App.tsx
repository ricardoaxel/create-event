import { Header } from "@components/organisms";
import { Toaster } from "react-hot-toast";

import { CreateEventPage } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Header altText="CREWFARE" />
      <CreateEventPage />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
