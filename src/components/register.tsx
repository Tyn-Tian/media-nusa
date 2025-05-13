import { Rocket } from "lucide-react";
import { Button } from "./ui/button";

export default function Register() {
  return (
    <section className="text-center py-5">
      <div className="flex items-center justify-center gap-2">
        <Rocket className="text-green-500 w-4 xl:w-6 xl:h-6" />
        <h5 className="font-semibold text-lg sm:text-xl text-green-500">
          Daftar Gratis
        </h5>
      </div>

      <h2 className="font-bold text-2xl sm:text-4xl text-gray-700 mt-2 sm:mt-5">
        Mulai Galang Dana Sekarang!
      </h2>

      <p className="mt-2 text-sm sm:text-base text-muted-foreground">
        Registrasi sekarang dan buat campaign online pertamamu
        <br className="hidden sm:block" />
        hanya dalam 3 langkah.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 xl:gap-4 mt-8">
        <Button
          className="rounded-sm bg-green-700 text-white hover:bg-green-800 w-full sm:w-auto"
          size="lg"
        >
          Registrasi Sekarang
        </Button>
        <Button
          className="rounded-sm w-full sm:w-auto"
          variant="outline"
          size="lg"
        >
          Konsultasikan Kebutuhanmu
        </Button>
      </div>
    </section>
  );
}
