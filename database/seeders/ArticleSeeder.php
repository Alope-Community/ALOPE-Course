<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $course = Course::whereSlug("html-dasar")->first();

        if (!$course) {
            return;
        }

        Article::insert([
            [
                'id' => Str::uuid(),
                "title" => "CSS Pseudo Class untuk Membuat Website Lebih Interaktif",
                "slug" => Str::slug("CSS Pseudo Class untuk Membuat Website Lebih Interaktif"),
                "cover" => "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "description" => "CSS pseudo class adalah kata kunci yang ditambahkan ke selector CSS untuk menerapkan gaya berdasarkan keadaan tertentu dari suatu elemen. Pseudo class sering digunakan untuk menyesuaikan tampilan.",
                "body" => "<h2>Apa Itu CSS Pseudo Class?</h2>
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
                            <p>Contoh</p>
                            <p>
                                Kode berikut akan mengubah warna tombol ketika
                                pengguna mengarahkannya dengan kursor:
                            </p>
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
                            <table border={1} cellSpacing='0'>
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
                            <table border={1} cellSpacing='0'>
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
                            <p>Penjelasan:</p>
                            <ul>
                                <li>
                                    :first-child → Paragraf pertama dalam parent
                                    akan menjadi bold.
                                </li>
                                <li>
                                    :nth-child(odd) & :nth-child(even) → Elemen
                                    'li' dengan nomor ganjil memiliki latar
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

                            <table border={1} cellSpacing='0'>
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
                            </blockquote>",
                "course_id" => $course->id
            ]
        ]);
    }
}
