import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import ExternalCatalog from "./pages/ExternalCatalog";
import { Index } from "./pages/Index";
import AddEdit from "./pages/AddEdit/AddEdit"
import View from "./pages/View"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/external-catalog" element={<ExternalCatalog />} />
        <Route path="/catalog/add" element={<AddEdit />} />
        <Route path="/catalog/update/:id" element={<AddEdit />} />
        <Route path="/catalog/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}
