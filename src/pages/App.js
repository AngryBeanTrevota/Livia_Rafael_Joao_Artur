import "./app.css";
import React from "react";
import Rotas from "../components/Rotas";
import { BrowserRouter as Router } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Rotas />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
