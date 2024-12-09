import React from "react";
import { Providers } from "./providers";
import { router } from "./routers/router";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Providers router={router} />
      <Footer />
    </div>
  );
}

export default App;
