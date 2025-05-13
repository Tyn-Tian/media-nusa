import Image from "next/image";
import { Badge } from "./ui/badge";

export default function Campaign() {
  return (
    <section className="text-center my-10">
      <h2 className="font-bold text-2xl md:text-4xl text-gray-700">
        Campaign Instan dalam 3 Langkah!
      </h2>
      <p className="mt-2 text-sm md:text-base text-muted-foreground">
        Dengan KawanBantu, buat campaign donasi-mu hanya butuh 3 langkah.
        <br className="hidden md:block" />
        Tidak perlu lagi menunggu lama hanya untuk membuat campaign donasi.
      </p>

      <div className="flex flex-col justify-center items-center gap-3 xl:gap-6 mt-10">
        <div className="w-full max-w-xl">
          <Badge className="font-bold text-sm md:text-2xl uppercase bg-green-700 -mb-0.5 p-1 xl:p-2 px-3 xl:px-6 rounded-bl-none rounded-br-none">
            Hanya 10 Menit
          </Badge>
          <Image
            src="/campaign-1.webp"
            alt="Campaign SalingBantu"
            width={750}
            height={100}
            className="w-full object-contain"
          />
        </div>

        <p className="text-sm font-semibold">VS</p>

        <div className="w-full max-w-xl">
          <p className="font-medium text-base md:text-lg mb-2">
            Platform Galang Dana Lainnya
          </p>
          <Image
            src="/campaign-2.webp"
            alt="Campaign SalingBantu"
            width={750}
            height={100}
            className="w-full object-contain"
          />
        </div>

        <p className="text-sm font-semibold">VS</p>

        <div className="w-full max-w-xl">
          <p className="font-medium text-base md:text-lg mb-2">
            Membuat Platform / Website Sendiri
          </p>
          <Image
            src="/campaign-3.webp"
            alt="Campaign SalingBantu"
            width={750}
            height={100}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
