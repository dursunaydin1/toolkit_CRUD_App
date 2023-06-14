import Header from "./components/Header";
import CrudPage from "./pages/crudPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CrudPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
