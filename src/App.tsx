import React from "react";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container bg-light"></div>
      <Card />
    </main>
  );
}

export default App;
