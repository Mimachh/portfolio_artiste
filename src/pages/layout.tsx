// components/Layout.tsx
import { Alex_Brush, Montserrat} from 'next/font/google'

import Head from 'next/head';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavProvider } from '@/context/NavContext';

const alexBrush = Alex_Brush({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBrush'
})

const montserrat = Montserrat({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})


interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <NavProvider>
        <div>
          <Head>
            <title>{title || 'Mia Reynolds Portfolio'}</title>
          </Head>
          <Header />
          <main className={`${alexBrush.variable} overflow-x-hidden relative ${montserrat.variable} `}>
            {children}
          </main>
          <Footer />
        </div>
    </NavProvider>
  );
};

export default Layout;