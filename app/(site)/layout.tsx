import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
