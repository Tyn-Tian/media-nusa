import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StatisticProps {
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

export default function Statistic({
  link = {
    text: "Lihat laporan lengkap",
    url: "/laporan",
  },
  stats = [
    {
      id: "stat-1",
      value: "Rp1,2M",
      label: "Total donasi terkumpul",
    },
    {
      id: "stat-2",
      value: "5.300+",
      label: "Jumlah donatur",
    },
    {
      id: "stat-3",
      value: "120+",
      label: "Proyek bantuan aktif",
    },
    {
      id: "stat-4",
      value: "98%",
      label: "Proyek berhasil didanai",
    },
  ],
}: StatisticProps) {
  return (
    <section className="my-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 text-left sm:text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-4xl">
            Statistik <span className="text-green-700">Penggalangan Dana</span>
          </h2>
          <p className="text-muted-foreground">
            Transparansi dan dampak nyata dari donasi yang telah terkumpul
          </p>
          <div className="sm:justify-center lg:justify-start flex">
            <Link
              href={link.url}
              className="flex items-center gap-1 font-bold text-green-700 hover:underline"
            >
              {link.text}
              <ArrowRight className="h-auto w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-3">
              <div className="text-4xl sm:text-5xl font-bold text-green-700">
                {stat.value}
              </div>
              <p className="font-medium text-sm sm:text-base text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
