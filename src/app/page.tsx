import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import About from '@/components/About';
import Bungalows from '@/components/Bungalows';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/globalStyles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <BookingForm />
        <About />
        <Bungalows />
        <Reviews />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
