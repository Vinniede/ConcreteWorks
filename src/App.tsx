import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CategoryProductsPage } from "./pages/CategoryProductsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { DesignsPage } from "./pages/DesignsPage";
import { ProjectsGalleryPage } from "./pages/ProjectsGalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ScrollToTop />
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Products Routes */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route
              path="/category/:categoryKey"
              element={<CategoryProductsPage />}
            />

            {/* Other Pages */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/projects" element={<ProjectsGalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <WhatsAppButton phoneNumber="+254722000000" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
