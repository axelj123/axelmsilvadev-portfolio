import { Inter } from "next/font/google"; // Solo importamos Inter
import "./globals.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Axel Muñoz Silva - Explore Next.js, Web Development, and More", 
  titleTemplate: "%s | My Website", 
  icons:{
    icon:[
      {
        url: '/icon.svg',
        href: '/icon.svg',
      }
    ]
  },
  description: "Welcome to my website where you can learn more about Next.js, web development, SEO, and tech-related topics. Check out our blogs, including one by Axel Muñoz.", 
  description_es: "Bienvenido a mi sitio web donde puedes aprender más sobre Next.js, desarrollo web, SEO y temas relacionados con la tecnología. Mira nuestros blogs, incluido uno de Axel Muñoz.", 
  keywords: "Next.js, SEO, web development, Axel Muñoz, blogs, JavaScript, React, technology, programming, coding tutorials", 
  keywords_es: "Next.js, SEO, desarrollo web, Axel Muñoz, blogs, JavaScript, React, tecnología, programación, tutoriales de codificación", 
  openGraph: {
    title: "My Website - Explore Next.js and Web Development", 
    description: "Discover blog posts, tutorials, and resources about web development, Next.js, and programming. Authored by experts including Axel Muñoz.", 
    description_es: "Descubre publicaciones, tutoriales y recursos sobre desarrollo web, Next.js y programación. Escrito por expertos, incluido Axel Muñoz.", 
    type: "website", 
    site_name: "My Website",
  },

  blog: {
    author: "Axel Muñoz", 
    publishedDate: "2024-12-20", 
    modifiedDate: "2024-12-21", 
    tags: ["Next.js", "SEO", "Web Development", "JavaScript"], 
    category: "Web Development", 
    readingTime: "5 min read", 
  },
  locale: "en_US", 
  locale_es: "es_ES", 
  robots: "index, follow", 
  author: "Axel Muñoz", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme="dark" themes={['light', 'dark']}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
