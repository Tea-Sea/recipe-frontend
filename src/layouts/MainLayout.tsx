import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='bg-amber-200 flex-1 w-full pb-10 px-15'>{children}</main>
      <Footer />
    </div>
  );
}