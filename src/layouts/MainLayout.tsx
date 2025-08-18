import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='bg-blue-600 flex-1 h-full w-full'>{children}</main>
      <Footer />
    </>
  );
}