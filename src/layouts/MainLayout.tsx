import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className='bg-amber-200 flex-1 flex flex-col w-full pb-17 px-15 border-t-2'>{children}</main>
      <Footer />
    </div>
  );
}