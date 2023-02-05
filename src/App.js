import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Navigation from "./navigator/Navigation";

const App = () => {
  return (
    <div className="routine-tracker-wrapper">
      <BrowserRouter>
        <AppLayout>
          <Navigation />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
