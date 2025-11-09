import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contatti" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Contatti</h2>
          <p className="mt-3 text-neutral-600">Scrivici o chiamaci: saremo felici di aiutarti con ordini e informazioni.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <a href="tel:+390000000000" className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-lime-100 text-lime-700 mb-3">
              <Phone size={20} />
            </div>
            <h3 className="font-semibold text-neutral-900">Telefono</h3>
            <p className="mt-1 text-sm text-neutral-600">+39 000 000 0000</p>
          </a>

          <a href="mailto:info@nonsolofrutta.it" className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-lime-100 text-lime-700 mb-3">
              <Mail size={20} />
            </div>
            <h3 className="font-semibold text-neutral-900">Email</h3>
            <p className="mt-1 text-sm text-neutral-600">info@nonsolofrutta.it</p>
          </a>

          <a href="#" className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-lime-100 text-lime-700 mb-3">
              <MessageSquare size={20} />
            </div>
            <h3 className="font-semibold text-neutral-900">WhatsApp</h3>
            <p className="mt-1 text-sm text-neutral-600">Scrivici su WhatsApp</p>
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500">Consegne a domicilio su richiesta nelle zone vicine al negozio.</p>
      </div>
    </section>
  );
}
