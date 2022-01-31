import React from "react";
import Typeahead from "./Typeahead";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route except path="/" element={<Typeahead />} />
      </Routes>
    </Router>
  );
}

export default App;
