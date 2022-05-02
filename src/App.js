import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import GlobalState from "./component/context/GlobalState";
import TableData from "./component/pages/TableData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<TableData />} />
          </Routes>
        </GlobalState>
      </BrowserRouter>
    </div>
  );
}

export default App;
