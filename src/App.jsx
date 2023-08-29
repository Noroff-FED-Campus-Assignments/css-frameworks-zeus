import { Outlet } from "@tanstack/react-router";
import "./App.scss";

function App() {
  return (
    <>
    
      <main>
        <Outlet />
      </main>

      <footer>
        <small>Created with ❤️ by _REPLACE_</small>
      </footer>
    </>
  );
}


export default App;
