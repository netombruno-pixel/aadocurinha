import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
      </main>
      <Footer />
    </>
  );
}

