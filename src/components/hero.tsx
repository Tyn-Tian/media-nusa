import { Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center mt-10 xl:mt-15">
      <Badge className="text-green-700 bg-green-100 text-xs md:text-sm xl:text-lg mb-5">
        #SemuaBisaBerdampak
      </Badge>

      <h1 className="md:max-w-lg xl:max-w-3xl font-bold text-3xl md:text-4xl xl:text-6xl mx-auto leading-tight">
        <span className="text-green-700 italic">Solusi All-in-One</span>{" "}
        Termudah untuk Seluruh{" "}
        <span className="text-green-700 italic">Kebutuhan Galang Dana</span>
      </h1>

      <p className="sm:max-w-sm md:max-w-lg text-xs md:text-lg mt-6 mx-auto">
        Mulai dari{" "}
        <span className="font-bold italic">platform galang dana gratis</span>{" "}
        milik sendiri{" "}
        <span className="font-bold italic">
          services untuk peningkatan hasil fundraising
        </span>
        , hingga <span className="font-bold italic">program edukasi</span> untuk
        skill fundraising. Kami punya semuanya.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-10">
        <Button
          className="rounded-sm bg-green-700 text-white hover:bg-green-800 w-full sm:w-auto"
          size="lg"
        >
          Buat Campaign Sekarang
        </Button>
        <Button
          className="rounded-sm cursor-pointer w-full sm:w-auto"
          variant="outline"
          size="lg"
        >
          <Play className="mr-2" />
          Liat Video Demo
        </Button>
      </div>

      <p className="font-medium text-muted-foreground mt-4 text-sm">
        Hanya dalam 3 langkah saja, tanpa bayar, dan tanpa komitmen
      </p>

      <Badge className="my-5 p-2 bg-gray-400 text-xs sm:text-sm">
        SalingBantu terdaftar dan diawasi oleh Kominfo
      </Badge>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-0 mt-10">
        <Image
          src="/hero-1.webp"
          alt="Hero Image"
          width={750}
          height={100}
          className="max-h-[500px] object-contain"
        />
        <Image
          src="/hero-2.webp"
          alt="Hero Image"
          width={550}
          height={100}
          className="max-h-[500px] object-contain"
        />
      </div>
    </section>
  );
}
