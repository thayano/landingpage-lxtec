import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar className="text-black" />
      {children}
      <Footer />
    </section>
  );
}
