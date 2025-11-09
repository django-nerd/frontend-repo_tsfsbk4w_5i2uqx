import Header from './components/Header';
import Products from './components/Products';
import FindUs from './components/FindUs';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      {/* Intro banner */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-50 via-white to-white pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Non solo frutta</h1>
              <p className="mt-4 text-lg text-neutral-600 max-w-prose">
                Negozio di frutta e verdura e non: bevande, alimentari selezionati (no carne) e accessori per la cucina.
                Qualità, freschezza e cortesia ogni giorno.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#prodotti" className="inline-flex items-center justify-center rounded-md bg-lime-600 px-5 py-3 text-white font-medium hover:bg-lime-700">
                  Scopri i prodotti
                </a>
                <a href="#dove-siamo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-neutral-800 hover:bg-neutral-50">
                  Vieni a trovarci
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
                alt="Frutta e verdura fresca"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <Products />
      <FindUs />
      <Contacts />

      <footer className="py-10 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Non solo frutta — Tutti i diritti riservati</p>
          <p>
            Realizzato con cura, prodotti freschi ogni giorno.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
