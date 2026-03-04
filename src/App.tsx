import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { CareersPage } from "./pages/CareersPage";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
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
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/careers" element={<CareersPage />} />
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
