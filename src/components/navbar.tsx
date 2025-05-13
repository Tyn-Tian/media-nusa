"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-2 xl:px-16">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={75}
            height={50}
            className="w-16 xl:w-20"
          />
          <h5 className="font-semibold text-xl -ml-2 xl:ml-0">
            <span className="font-bold text-green-700">Saling</span>Bantu
          </h5>
        </div>

        <div className="hidden xl:flex items-center gap-8 font-semibold">
          <Link href="#" className="hover:text-green-500">Platform SalingBantu</Link>
          <Link href="#" className="hover:text-green-500">BantuServices</Link>
          <Link href="#" className="hover:text-green-500">Konsultasi</Link>
          <Link href="#" className="hover:text-green-500">Masuk ke Akun</Link>
          <Button
            className="rounded-sm bg-green-700 text-white cursor-pointer hover:bg-green-700"
            size="lg"
          >
            Daftar Akun
          </Button>
        </div>

        <Button
          variant="ghost"
          className="xl:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div className="xl:hidden mt-4 space-y-4 font-semibold text-sm">
          <Link href="#" className="block hover:text-green-500">
            Platform SalingBantu
          </Link>
          <Link href="#" className="block hover:text-green-500">
            BantuServices
          </Link>
          <Link href="#" className="block hover:text-green-500">
            Konsultasi
          </Link>
          <Link href="#" className="block hover:text-green-500">
            Masuk ke Akun
          </Link>
          <Button
            className="w-full rounded-sm bg-green-700 text-white cursor-pointer hover:bg-green-700"
            size="lg"
          >
            Daftar Akun
          </Button>
        </div>
      )}
    </header>
  );
}
