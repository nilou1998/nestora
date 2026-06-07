import { House, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
              <House size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Nestora
              </h1>

              <p className="text-sm text-slate-500">Find your perfect place</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:gap-8">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100">
              <Phone size={18} className="text-blue-600" />

              <div>
                <p className="text-xs text-slate-400">Call Us</p>

                <p className="font-medium text-slate-700">(021) 44936580</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100">
              <Mail size={18} className="text-blue-600" />

              <div>
                <p className="text-xs text-slate-400">Email</p>

                <p className="font-medium text-slate-700">
                  niloufarhashami@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
