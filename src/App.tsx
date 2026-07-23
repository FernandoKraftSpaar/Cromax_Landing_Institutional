import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import ServicosPage from './pages/ServicosPage';
import ContextoPage from './pages/ContextoPage';
import NoticiasPage from './pages/NoticiasPage';
import ContatoPage from './pages/ContatoPage';

/** Rola para o topo a cada troca de rota. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/contexto" element={<ContextoPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          {/* Qualquer rota desconhecida volta para a Home (sem 404). */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
