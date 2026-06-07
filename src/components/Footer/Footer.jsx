import { House, Phone, Mail, MapPin, Clock3 } from "lucide-react";

const Footer = () => {
  const now = new Date();

  const currentDay = now.getDay();
  const currentHour = now.getHours();

  const isWeekDay = currentDay >= 1 && currentDay <= 5;

  const openHour = 9;
  const closeHour = 17;

  const isOpen =
    isWeekDay && currentHour >= openHour && currentHour < closeHour;

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-600 p-3">
                <House size={22} />
              </div>

              <h2 className="text-2xl font-bold tracking-tight">Nestora</h2>
            </div>

            <p className="max-w-sm leading-7 text-slate-400">
              Helping people discover comfortable, modern and affordable rental
              properties.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} />
                <span>(021) 44936580</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <span>niloufarhashami@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span>Tehran, Iran</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Office Status</h3>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full ${
                    isOpen ? "bg-green-500" : "bg-red-500"
                  }`}
                />

                <strong>
                  {isOpen ? "We're Open Now" : "We're Currently Closed"}
                </strong>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Clock3 size={18} />

                <span>Mon - Fri | 09:00 - 17:00</span>
              </div>

              <button
                className="
                  mt-6
                  w-full
                  rounded-2xl
                  bg-blue-600
                  px-5
                  py-3
                  font-medium
                  transition
                  hover:bg-blue-700
                "
              >
                Call Us
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Nestora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
