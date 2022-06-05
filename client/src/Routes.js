import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import ExternalCatalog from "./pages/ExternalCatalog";
import { Index } from "./pages/Index";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/external-catalog" element={<ExternalCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}
