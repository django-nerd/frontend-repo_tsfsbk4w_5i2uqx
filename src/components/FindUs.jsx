import { MapPin, Clock } from 'lucide-react';

export default function FindUs() {
  return (
    <section id="dove-siamo" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Dove siamo</h2>
            <p className="mt-3 text-neutral-600">Ti aspettiamo nel nostro punto vendita. Parcheggio comodo e accesso senza barriere.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-lime-600" size={20} />
                <div>
                  <p className="font-medium text-neutral-800">Via Esempio 123, 00100 Roma</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Via%20Esempio%20123%2C%20Roma"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lime-700 hover:underline"
                  >
                    Apri su Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-lime-600" size={20} />
                <div>
                  <p className="font-medium text-neutral-800">Orari</p>
                  <p className="text-neutral-600 text-sm">Lun-Sab 8:00–13:30 / 16:00–19:30 • Domenica chiuso</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
            <iframe
              title="Mappa Non solo frutta"
              src="https://www.google.com/maps?q=Roma&output=embed"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
