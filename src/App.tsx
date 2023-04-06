import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ClientArea from "./pages/ClientArea";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>loading</div>}>
                <ClientArea />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
