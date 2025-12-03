import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import Event from "./pages/Eventi";
import MainLayout from "./pages/MainLayout";
import Authentication from "./pages/Authentication";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="/eventi" element={<Event />} />
          <Route path="/contatti" element={<Contatti />} />
        </Route>
        <Route path="/autenticazione" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
