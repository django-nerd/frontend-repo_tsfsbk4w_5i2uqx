import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import FindUs from './components/FindUs';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Hero />
      <Products />
      <FindUs />
      <Contacts />

      <footer className="py-10 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Non solo frutta — Tutti i diritti riservati</p>
          <p>Qualità e freschezza ogni giorno.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
