import { Leaf, Store } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-100 via-white to-emerald-100 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-lime-700 font-medium bg-lime-50 px-3 py-1 rounded-full">
              <Leaf size={16} /> Freschezza ogni giorno
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Non solo frutta
            </h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Frutta e verdura di stagione, bevande, alimentari e accessori per la cucina. Qualità selezionata e cortesia del negozio di quartiere.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#prodotti" className="inline-flex items-center justify-center rounded-md bg-lime-600 px-5 py-3 text-white hover:bg-lime-700">
                Scopri i prodotti
              </a>
              <a href="#dove-siamo" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-lime-700 border border-lime-200 hover:border-lime-300">
                <Store size={18} className="mr-2" /> Vieni a trovarci
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1600&auto=format&fit=crop"
              alt="Casse di frutta fresca"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
