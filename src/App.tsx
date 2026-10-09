import React, { useState } from 'react';
import { AdminProvider } from '@/context/AdminContext';
import { ToastProvider } from '@/context/ToastContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToastContainer from '@/components/ToastContainer';
import AdminLoginModal from '@/components/AdminLoginModal';
import HomePage from '@/pages/HomePage';
import StudentCornerPage from '@/pages/StudentCornerPage';
import ResourcesPage from '@/pages/ResourcesPage';

type Page = 'home' | 'student-corner' | 'resources';

function AppShell() {
  const [page, setPage]             = useState<Page>('home');
  const [adminModal, setAdminModal] = useState(false);

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar
        currentPage={page}
        onNavigate={navigate}
        onAdminClick={() => setAdminModal(true)}
      />

      <div className="flex-1">
        {page === 'home'           && <HomePage />}
        {page === 'student-corner' && <StudentCornerPage />}
        {page === 'resources'      && <ResourcesPage />}
      </div>

      <Footer onAdminClick={() => setAdminModal(true)} />

      {adminModal && (
        <AdminLoginModal onClose={() => setAdminModal(false)} />
      )}

      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <ToastProvider>
        <AppShell />
      </ToastProvider>
    </AdminProvider>
  );
}
