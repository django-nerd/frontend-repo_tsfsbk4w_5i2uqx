import { Bottle, ShoppingBasket, Utensils, Wheat } from 'lucide-react';

const categories = [
  {
    icon: ShoppingBasket,
    title: 'Frutta & Verdura',
    desc: 'Prodotti freschi, locali e di stagione selezionati ogni mattina.',
    color: 'from-lime-500 to-emerald-500',
  },
  {
    icon: Bottle,
    title: 'Bevande',
    desc: 'Succhi, bibite, acqua e bevande vegetali per ogni gusto.',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Wheat,
    title: 'Alimentari vari',
    desc: 'Pasta, farine, conserve, legumi secchi e molto altro (no carne).',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Utensils,
    title: 'Per la cucina',
    desc: 'Carta forno, piatti e bicchieri, sacchetti e accessori utili.',
    color: 'from-fuchsia-500 to-pink-500',
  },
];

export default function Products() {
  return (
    <section id="prodotti" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Cosa trovi da noi</h2>
          <p className="mt-3 text-neutral-600">Una selezione curata di prodotti per una spesa completa e di qualità.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white mb-3`}>
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
