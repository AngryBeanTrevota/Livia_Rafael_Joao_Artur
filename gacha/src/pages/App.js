import React from "react";
import Rotas from "../routes/Rotas";
import { BrowserRouter as Router } from "react-router-dom";
import {
  RecoilRoot,
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
