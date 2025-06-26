import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import Providers from '@/components/Providers';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: "ConsultoriaTech",
  description: "Consultoria técnica especializada em integrações, desenvolvimento e modernização de sistemas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}