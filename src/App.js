import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { NotFoundView } from './views/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
