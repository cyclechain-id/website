import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import {
  Leaf,
  Recycle,
  Cpu,
  TrendingUp,
  Users,
  Package,
  Scale,
  Truck,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Trash2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import StatCard from "@/components/StatCard.jsx";
import CategoryCard from "@/components/CategoryCard.jsx";
import ProcessStep from "@/components/ProcessStep.jsx";
import FAQItem from "@/components/FAQItem.jsx";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Cycle Value - Kelola Limbah Bisnis Anda Dari Pickup Hingga Proses
          Akhir
        </title>
        <meta
          name="description"
          content="Solusi manajemen limbah terpadu untuk bisnis. Sistem pickup, pemrosesan, dan daur ulang limbah organik, anorganik, dan elektronik yang sistematis dan bertanggung jawab."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1567516847971-81df16eefa90"
              alt="Waste management facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
                Kelola Limbah Bisnis Anda — Dari Pickup Hingga Proses Akhir
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Solusi manajemen limbah terpadu yang sistematis dan bertanggung
                jawab. Kami menangani limbah organik, anorganik, dan elektronik
                dengan proses yang transparan dan terukur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg text-base px-8 transition-all duration-300 active:scale-95"
                >
                  Mulai Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-base px-8 transition-all duration-300 active:scale-95 border-2 border-white"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard number="12,400+" label="Pickups" delay={0} />
              <StatCard number="96" label="Partners" delay={0.1} />
              <StatCard
                number="3,200+"
                label="Waste Items Processed"
                delay={0.2}
              />
              <StatCard number="500+" label="Tons Recycled" delay={0.3} />
            </div>
          </div>
        </section>

        {/* Category Cards Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tiga Kategori, Satu Sistem
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Kami mengelola berbagai jenis limbah dengan pendekatan yang
                disesuaikan untuk setiap kategori
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CategoryCard
                icon={Leaf}
                title="Limbah Organik"
                description="Sisa makanan, daun, dan bahan organik lainnya diproses menjadi kompos berkualitas tinggi untuk pertanian dan perkebunan."
                delay={0}
              />
              <CategoryCard
                icon={Recycle}
                title="Limbah Anorganik"
                description="Plastik, kertas, logam, dan kaca dipilah dan didaur ulang menjadi bahan baku baru untuk industri manufaktur."
                delay={0.1}
              />
              <CategoryCard
                icon={Cpu}
                title="Limbah Elektronik"
                description="Perangkat elektronik bekas diproses dengan aman untuk mengekstrak komponen berharga dan mencegah pencemaran lingkungan."
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Cycle Value Registration Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                  Bergabung sebagai Member Cycle Value
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  Dapatkan akses penuh ke sistem manajemen limbah kami dengan
                  berbagai keuntungan eksklusif untuk bisnis Anda.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Penjadwalan pickup otomatis dan fleksibel",
                    "Dashboard real-time untuk tracking limbah",
                    "Laporan bulanan tentang dampak lingkungan",
                    "Harga khusus untuk member setia",
                    "Konsultasi gratis dengan ahli manajemen limbah",
                    "Sertifikat pengelolaan limbah yang bertanggung jawab",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="px-8 transition-all duration-300 active:scale-95"
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-accent/20 rounded-xl">
                      <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-card-foreground mb-1">
                        47.2%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Pengurangan Limbah
                      </div>
                    </div>
                    <div className="text-center p-6 bg-accent/20 rounded-xl">
                      <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-card-foreground mb-1">
                        2,847
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Member Aktif
                      </div>
                    </div>
                    <div className="text-center p-6 bg-accent/20 rounded-xl">
                      <Package className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-card-foreground mb-1">
                        98.3%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tingkat Daur Ulang
                      </div>
                    </div>
                    <div className="text-center p-6 bg-accent/20 rounded-xl">
                      <Scale className="w-12 h-12 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-card-foreground mb-1">
                        1,240
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ton/Bulan
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pickup & Settlement Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proses Pickup & Settlement yang Mudah
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Sistem yang dirancang untuk kemudahan dan transparansi penuh
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Pickup Process */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                  <Truck className="w-8 h-8 text-primary" />
                  Proses Pickup
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Jadwalkan Pickup",
                      desc: "Pilih tanggal dan waktu yang sesuai melalui dashboard atau aplikasi mobile",
                    },
                    {
                      step: "2",
                      title: "Konfirmasi Tim",
                      desc: "Tim kami akan mengonfirmasi jadwal dan memberikan estimasi waktu kedatangan",
                    },
                    {
                      step: "3",
                      title: "Pickup Limbah",
                      desc: "Petugas terlatih akan mengambil limbah dengan peralatan yang sesuai",
                    },
                    {
                      step: "4",
                      title: "Dokumentasi",
                      desc: "Setiap pickup didokumentasikan dengan foto dan berat limbah yang diambil",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Settlement Process */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                  <ClipboardCheck className="w-8 h-8 text-primary" />
                  Proses Settlement
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Penimbangan & Sortir",
                      desc: "Limbah ditimbang dan disortir berdasarkan kategori di fasilitas kami",
                    },
                    {
                      step: "2",
                      title: "Perhitungan Nilai",
                      desc: "Sistem menghitung nilai limbah berdasarkan jenis, berat, dan harga pasar",
                    },
                    {
                      step: "3",
                      title: "Invoice Digital",
                      desc: "Invoice otomatis dikirim ke email dengan rincian lengkap",
                    },
                    {
                      step: "4",
                      title: "Pembayaran",
                      desc: "Transfer langsung ke rekening atau kredit untuk pickup berikutnya",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waste Management Process Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                Waste Management yang Sistematis & Terpadu
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Dari pengumpulan hingga daur ulang, setiap tahap dikelola dengan
                standar tertinggi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep
                number="1"
                icon={Truck}
                title="Pengumpulan"
                description="Limbah dikumpulkan dari lokasi Anda dengan jadwal yang teratur dan dapat disesuaikan"
                delay={0}
              />
              <ProcessStep
                number="2"
                icon={BarChart3}
                title="Pemilahan"
                description="Sortir otomatis dan manual untuk memisahkan limbah berdasarkan jenis dan nilai ekonomis"
                delay={0.1}
              />
              <ProcessStep
                number="3"
                icon={Trash2}
                title="Pemrosesan"
                description="Pengolahan dengan teknologi modern untuk memaksimalkan nilai dan meminimalkan dampak lingkungan"
                delay={0.2}
              />
              <ProcessStep
                number="4"
                icon={RefreshCw}
                title="Daur Ulang"
                description="Transformasi limbah menjadi produk baru atau bahan baku untuk industri"
                delay={0.3}
              />
            </div>

            {/* Process Flow Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-card-foreground mb-1">
                    83%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Efisiensi Proses
                  </div>
                </div>
                <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-card-foreground mb-1">
                    96.7%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tingkat Kepuasan
                  </div>
                </div>
                <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-card-foreground mb-1">
                    -42%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Emisi Karbon
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Temukan jawaban untuk pertanyaan umum tentang layanan kami
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <FAQItem
                  value="item-1"
                  question="Jenis limbah apa saja yang bisa dikelola oleh Cycle Value?"
                  answer="Kami mengelola tiga kategori utama: limbah organik (sisa makanan, daun, bahan organik), limbah anorganik (plastik, kertas, logam, kaca), dan limbah elektronik (perangkat elektronik bekas). Setiap kategori ditangani dengan metode yang sesuai untuk memaksimalkan daur ulang dan meminimalkan dampak lingkungan."
                />
                <FAQItem
                  value="item-2"
                  question="Bagaimana cara menjadwalkan pickup limbah?"
                  answer="Anda dapat menjadwalkan pickup melalui dashboard online atau aplikasi mobile kami. Pilih tanggal dan waktu yang sesuai, dan tim kami akan mengonfirmasi jadwal Anda. Untuk member reguler, kami juga menyediakan opsi penjadwalan otomatis berdasarkan pola pickup Anda."
                />
                <FAQItem
                  value="item-3"
                  question="Apakah ada biaya untuk layanan pickup?"
                  answer="Biaya pickup bervariasi tergantung pada jenis limbah, volume, dan lokasi. Untuk limbah yang memiliki nilai ekonomis (seperti plastik, logam, kertas), kami bahkan memberikan kompensasi. Member Cycle Value mendapatkan harga khusus dan berbagai keuntungan tambahan."
                />
                <FAQItem
                  value="item-4"
                  question="Bagaimana saya bisa melacak proses pengelolaan limbah saya?"
                  answer="Setiap pickup didokumentasikan dengan foto dan berat limbah. Anda dapat melacak seluruh proses melalui dashboard real-time kami, mulai dari pickup, pemilahan, pemrosesan, hingga daur ulang. Laporan bulanan juga dikirimkan untuk menunjukkan dampak lingkungan dari pengelolaan limbah Anda."
                />
                <FAQItem
                  value="item-5"
                  question="Apa keuntungan menjadi member Cycle Value?"
                  answer="Member mendapatkan berbagai keuntungan termasuk penjadwalan pickup otomatis, dashboard tracking real-time, laporan dampak lingkungan bulanan, harga khusus, konsultasi gratis dengan ahli manajemen limbah, dan sertifikat pengelolaan limbah yang bertanggung jawab untuk keperluan CSR perusahaan."
                />
                <FAQItem
                  value="item-6"
                  question="Apakah Cycle Value melayani area di luar kota besar?"
                  answer="Saat ini kami melayani area perkotaan utama dan sekitarnya. Namun, kami terus memperluas jangkauan layanan. Untuk area di luar cakupan saat ini, silakan hubungi tim kami untuk mendiskusikan kemungkinan layanan khusus atau kemitraan regional."
                />
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                Setiap Limbah Punya Tempatnya
              </h2>
              <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto">
                Bergabunglah dengan ratusan bisnis yang telah mempercayakan
                pengelolaan limbah mereka kepada Cycle Value. Mulai perjalanan
                menuju operasi yang lebih berkelanjutan hari ini.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-base px-10 transition-all duration-300 active:scale-95"
              >
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
