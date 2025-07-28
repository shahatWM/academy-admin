import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CertificationsList from "./pages/admin/CertificationsList";
import CertificationCreate from "./pages/admin/CertificationCreate";
import ModulesList from "./pages/admin/ModulesList";
import ChaptersList from "./pages/admin/ChaptersList";
import ChapterCreate from "./pages/admin/ChapterCreate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/certifications" element={<AdminLayout><CertificationsList /></AdminLayout>} />
          <Route path="/admin/certifications/create" element={<AdminLayout><CertificationCreate /></AdminLayout>} />
          <Route path="/admin/modules" element={<AdminLayout><ModulesList /></AdminLayout>} />
          <Route path="/admin/chapters" element={<AdminLayout><ChaptersList /></AdminLayout>} />
          <Route path="/admin/chapters/create" element={<AdminLayout><ChapterCreate /></AdminLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;