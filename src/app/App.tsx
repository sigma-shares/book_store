import { Providers } from "./providers";
import { router } from "./routers/router";
import { Header } from "../widgets/header/index";
import { Footer } from "../widgets/footer/index";
import Navigation from "../widgets/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Providers router={router} />
      <Footer />
    </div>
  );
}

export default App;
