import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="text-center px-4 sm:px-6 md:px-8 lg:px-0 max-w-4xl mx-auto my-16">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-4 xl:mb-8">
        Pertanyaan Sering Diajukan
      </h2>
      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="item-1">
          <AccordionTrigger>Apa itu SalingBantu?</AccordionTrigger>
          <AccordionContent>
            SalingBantu adalah Software-as-a-Service (SaaS) yang dirancang untuk
            organisasi nirlaba, yang memungkinkan individu maupun komunitas
            memiliki platform sendiri untuk membuat dan mengelola kampanye
            Penggalangan Dana secara mudah, cepat, dan aman.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Siapa yang bisa menggunakan platform dari SalingBantu?
          </AccordionTrigger>
          <AccordionContent>
            Software dari SalingBantu dapat digunakan oleh individu maupun
            komunitas yang ingin menggalang dana termasuk namun tidak terbatas
            pada tujuan amal (charity), atau proyek yang ingin didukung.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Berapa biaya yang dikenakan untuk menggunakan platform dari
            SalingBantu?
          </AccordionTrigger>
          <AccordionContent>
            SalingBantu menarik 5%* dari setiap transaksi yang terjadi pada
            platform Pengguna. *Biaya tidak termasuk biaya administrasi yang
            dikenakan untuk masing-masing metode pembayaran.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Apakah SalingBantu sudah berizin?</AccordionTrigger>
          <AccordionContent>
            PT Saling Bantu Tekno Integra (SalingBantu) telah terdaftar sebagai
            Penyelenggara Sistem Elektronik (PSE) di Kementerian Komunikasi dan
            Informatika dengan nomor 005836.01/DJAI.PSE/04/2024.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
