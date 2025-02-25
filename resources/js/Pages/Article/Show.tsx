import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import ArticleCardComponent from '@/Components/Cards/Article';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import '../../../css/bodyContent.css';

export default function ArticleShowPage() {
    return (
        <>
            <Head title="Article" />

            <NavbarComponent />

            <section className="container mx-auto px-3 pt-10 sm:pt-24 md:px-10 xl:px-0">
                <BannerHorizontalComponent />
                <div className="grid grid-cols-4 gap-8 xl:gap-10">
                    <main className="col-span-4 lg:col-span-3">
                        <header>
                            <h1 className="mb-5 text-xl font-bold sm:text-2xl xl:text-3xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </h1>
                            <p className="my-3 text-xs text-gray-700 sm:text-sm">
                                alope.id/articles/slug - 24/02/2025, 16:43 WIB
                            </p>
                            <div className="mb-5 flex gap-2 sm:items-center">
                                <div>
                                    <img
                                        src="/images/ilham.jpg"
                                        alt="ilham hafidz photo"
                                        className="size-11 rounded-full border shadow"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <p className="text-sm font-semibold text-[#2276f0] xl:text-base">
                                        Ilham Hafidz
                                    </p>
                                    <p className="hidden sm:block">&#128900;</p>
                                    <p className="text-sm text-gray-500 xl:text-base">
                                        Mentor of ALOPE
                                    </p>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-[300px] w-full rounded object-cover sm:h-[450px] xl:h-[600px]"
                            />
                        </header>

                        <section id="body" className="mt-10">
                            <h1>
                                CSS Pseudo Class untuk Membuat Website Lebih
                                Interaktif
                            </h1>

                            <h2>Apa Itu CSS Pseudo Class?</h2>
                            <p>
                                CSS pseudo class adalah kata kunci yang
                                ditambahkan ke selector CSS untuk menerapkan
                                gaya berdasarkan keadaan tertentu dari suatu
                                elemen. Pseudo class sering digunakan untuk
                                menyesuaikan tampilan elemen ketika:
                            </p>
                            <ul>
                                <li>
                                    Pengguna meng-hover elemen dengan mouse.
                                </li>
                                <li>
                                    Elemen sedang dalam keadaan fokus saat
                                    diklik atau diisi.
                                </li>
                                <li>
                                    Elemen berada dalam urutan tertentu di dalam
                                    parent-nya.
                                </li>
                                <li>
                                    Form sedang dalam keadaan valid atau
                                    invalid.
                                </li>
                            </ul>
                            <p>
                                Dengan pseudo class, kita bisa menyesuaikan
                                tampilan elemen secara dinamis
                                <b>
                                    tanpa perlu menambahkan class atau
                                    menggunakan JavaScript.
                                </b>
                            </p>

                            <hr />

                            <h2>Sintaks CSS Pseudo Class</h2>
                            <p>
                                Pseudo class ditulis setelah selector utama
                                dengan format berikut:
                            </p>
                            {/* <code> selector:pseudo-class { property: value; } </code> */}
                            <p>Contoh</p>
                            <p>
                                Kode berikut akan mengubah warna tombol ketika
                                pengguna mengarahkannya dengan kursor:
                            </p>
                            {/* <code>button:hover { background-color: blue; color: white; } </code> */}
                            <p>
                                Saat pengguna mengarahkan mouse ke tombol
                                (button), background akan berubah menjadi biru
                                dan teks menjadi putih.
                            </p>

                            <h2>Jenis-Jenis CSS Pseudo Class</h2>
                            <h3>Pseudo Class untuk Interaksi Pengguna</h3>
                            <p>
                                Pseudo class ini mengubah tampilan elemen
                                berdasarkan interaksi pengguna, seperti hover,
                                klik, atau fokus pada input.
                            </p>
                            <table border={1} cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Pseudo Class</th>
                                        <th>Fungsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>:hover</td>
                                        <td>
                                            Saat pengguna mengarahkan mouse ke
                                            elemen.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:focus</td>
                                        <td>
                                            Saat elemen mendapatkan fokus
                                            (misalnya input aktif).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:active</td>
                                        <td>Saat elemen sedang diklik.</td>
                                    </tr>
                                    <tr>
                                        <td>:visited</td>
                                        <td>
                                            Untuk link yang sudah dikunjungi.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:checked</td>
                                        <td>
                                            Untuk checkbox atau radio button
                                            yang terpilih.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Contoh:</p>
                            {/* <code>
  input:focus { border: 2px solid blue; } a:visited { color: purple; }
  button:active { background-color: red; }
</code> */}

                            <p>Penjelasan:</p>
                            <ul>
                                <li>
                                    :focus → Border input berubah menjadi biru
                                    saat diklik.
                                </li>
                                <li>
                                    :visited → Warna link berubah menjadi ungu
                                    setelah dikunjungi.
                                </li>
                                <li>
                                    :active → Background tombol berubah menjadi
                                    merah saat ditekan.
                                </li>
                            </ul>

                            <hr />

                            <h3>Pseudo Class untuk Posisi Elemen</h3>
                            <p>
                                Digunakan untuk menargetkan elemen berdasarkan
                                posisinya dalam sebuah parent.
                            </p>
                            <table border={1} cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Pseudo Class</th>
                                        <th>Fungsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>:first-child</td>
                                        <td>
                                            Memilih elemen pertama dalam parent.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:last-child</td>
                                        <td>
                                            Memilih elemen terakhir dalam
                                            parent.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:nth-child(n)</td>
                                        <td>
                                            Memilih elemen ke-n dalam parent.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:nth-of-type(n)</td>
                                        <td>
                                            Memilih elemen ke-n dari tipe
                                            tertentu.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Contoh :</p>
                            {/* <code>
  p:first-child { font-weight: bold; } li:nth-child(odd) { background-color:
  lightgray; } li:nth-child(even) { background-color: white; }
</code> */}

                            <p>Penjelasan:</p>
                            <ul>
                                <li>
                                    :first-child → Paragraf pertama dalam parent
                                    akan menjadi bold.
                                </li>
                                <li>
                                    :nth-child(odd) & :nth-child(even) → Elemen
                                    "li" dengan nomor ganjil memiliki latar
                                    belakang abu-abu, sedangkan yang genap tetap
                                    putih.
                                </li>
                            </ul>

                            <hr />

                            <h3>Pseudo Class untuk Form dan Validasi</h3>
                            <p>
                                Digunakan untuk menentukan tampilan input
                                berdasarkan status validasi form.
                            </p>

                            <table border={1} cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Pseudo Class</th>
                                        <th>Fungsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>:disabled</td>
                                        <td>
                                            Memilih input yang dinonaktifkan.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:enabled</td>
                                        <td>
                                            Memilih input yang bisa digunakan.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:required</td>
                                        <td>Memilih input yang wajib diisi.</td>
                                    </tr>
                                    <tr>
                                        <td>:valid</td>
                                        <td>
                                            Memilih input yang memiliki nilai
                                            valid.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>:invalid</td>
                                        <td>
                                            Memilih input yang memiliki nilai
                                            tidak valid.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Contoh :</p>
                            {/* <code>
  input:required { border: 2px solid red; } input:valid { border: 2px solid
  green; } input:invalid { border: 2px solid orange; }
</code> */}

                            <p>Penjelasan :</p>
                            <ul>
                                <li>
                                    :required → Input wajib diisi akan memiliki
                                    border merah.
                                </li>
                                <li>
                                    :valid → Jika nilai input valid, border
                                    menjadi hijau.
                                </li>
                                <li>
                                    :invalid → Jika nilai input tidak valid,
                                    border menjadi oranye.
                                </li>
                            </ul>

                            <h2>Kesimpulan</h2>
                            <p>
                                CSS pseudo class adalah alat yang sangat berguna
                                dan fleksibel untuk meningkatkan interaktivitas
                                dan pengalaman pengguna di website. Dengan
                                pseudo class, kita dapat mengubah tampilan
                                elemen berdasarkan interaksi pengguna, posisi
                                elemen, dan status validasi form.
                            </p>

                            <p>
                                Dengan memahami dan menggunakan pseudo class
                                dengan benar, kita bisa membuat website yang
                                lebih dinamis, responsif, dan menarik, tanpa
                                perlu menambahkan JavaScript atau class
                                tambahan.
                            </p>

                            <blockquote>
                                Sudah siap menggunakan pseudo class di proyek
                                web kamu? Coba sekarang dan buat website lebih
                                interaktif! 🚀
                            </blockquote>
                        </section>
                    </main>
                    <aside className="relative hidden lg:block">
                        <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                            <span className="text-gray-500">// </span> Artikel
                            Terbaru
                        </h3>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    CSS
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    12 Jam yang lalu
                                </p>
                            </div>
                            <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium, recusandae.
                            </p>
                        </div>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    CSS
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    12 Jam yang lalu
                                </p>
                            </div>
                            <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium, recusandae.
                            </p>
                        </div>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    CSS
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    12 Jam yang lalu
                                </p>
                            </div>
                            <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium, recusandae.
                            </p>
                        </div>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    CSS
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    12 Jam yang lalu
                                </p>
                            </div>
                            <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium, recusandae.
                            </p>
                        </div>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    CSS
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    12 Jam yang lalu
                                </p>
                            </div>
                            <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium, recusandae.
                            </p>
                        </div>

                        {/*  */}

                        <section className="sticky top-24">
                            <h3 className="my-7 text-xl font-bold">
                                <span className="text-gray-500">// </span>{' '}
                                Sorotan
                            </h3>
                            <ArticleCardComponent />
                            <ArticleCardComponent />
                        </section>
                    </aside>
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
