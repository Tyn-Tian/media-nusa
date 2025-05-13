import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="flex flex-col gap-10 md:flex-row">
        <h5 className="font-semibold text-3xl">
          <span className="font-bold text-green-500">Saling</span>Bantu
        </h5>

        <div className="flex flex-col gap-2">
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/term-and-condition" className="hover:underline">
            Term and Condition
          </Link>
        </div>

        <div className="font-semibold">
          <h4 className="text-lg mb-2">Hubungi Kami</h4>
          <h5 className="text-green-500">Contact Person</h5>
          <p className="mb-3">0813-1744-4741 (Syifa)</p>
          <h5 className="text-green-500">Email Kami</h5>
          <p>deanmartio@salingbantu.com</p>
        </div>

        <div className="font-semibold">
          <h4 className="text-lg mb-2">Kunjungi Kami di</h4>
          <h5 className="text-green-500">Website kami</h5>
          <p>www.salingbantu.com</p>
        </div>
      </div>
    </footer>
  );
}
