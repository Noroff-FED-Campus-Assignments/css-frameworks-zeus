// import { useState } from "react";
import { Outlet} from "@tanstack/react-router";
import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <header>
      <Header />

    </header>
      <main>
        <Outlet />
      </main>
      <footer>
      <Footer />

      </footer>
    </>
  );
}

export default App;
