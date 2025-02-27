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
        $course = Course::whereSlug("lwd-pbk")->first();
        $courseCSS = Course::whereSlug("css-dasar")->first();

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
                            <pre style='color: rgb(158, 254, 255); background-color: rgb(45, 42, 85);'><div class='token-line' style='color: rgb(158, 254, 255);'><span>1</span><span class='token selector' style='color: rgb(255, 157, 0);'>selector</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:pseudo-class</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>2</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>property</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> value</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>3</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span></div></pre>
                            <p>Contoh: </p>
                            <p>
                                Kode berikut akan mengubah warna tombol ketika
                                pengguna mengarahkannya dengan kursor:
                            </p>
                            <pre style='color: rgb(158, 254, 255); background-color: rgb(45, 42, 85);'><div class='token-line' style='color: rgb(158, 254, 255);'><span>1</span><span class='token selector' style='color: rgb(255, 157, 0);'>button</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:hover</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>2</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>background-color</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token color'>blue</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>3</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>color</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token color'>white</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>4</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span></div></pre>
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
                            <pre style='color: rgb(158, 254, 255); background-color: rgb(45, 42, 85);'><div class='token-line' style='color: rgb(158, 254, 255);'><span>1</span><span class='token selector' style='color: rgb(255, 157, 0);'>input</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:focus</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>2</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>border</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token number' style='color: rgb(255, 98, 140);'>2</span><span class='token unit'>px</span><span class='token plain'> solid </span><span class='token color'>blue</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>3</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>4</span><span class='token plain'></span><span class='token selector' style='color: rgb(255, 157, 0);'>a</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:visited</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>5</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>color</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token color'>purple</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>6</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span><span class='token plain'></span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>7</span><span class='token plain'></span><span class='token selector' style='color: rgb(255, 157, 0);'>button</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:active</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>8</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>background-color</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token color'>red</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>9</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span></div></pre>
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
                            <pre style='color: rgb(158, 254, 255); background-color: rgb(45, 42, 85);'><div class='token-line' style='color: rgb(158, 254, 255);'><span>1</span><span class='token selector' style='color: rgb(255, 157, 0);'>p</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:first-child</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>2</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>font-weight</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> bold</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>3</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>4</span><span class='token plain'></span><span class='token selector' style='color: rgb(255, 157, 0);'>li</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:nth-child</span><span class='token selector punctuation' style='color: rgb(255, 255, 255);'>(</span><span class='token selector n-th' style='color: rgb(255, 157, 0);'>odd</span><span class='token selector punctuation' style='color: rgb(255, 255, 255);'>)</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>5</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>background-color</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token color'>lightgray</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>6</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>7</span><span class='token plain'></span><span class='token selector' style='color: rgb(255, 157, 0);'>li</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:nth-child</span><span class='token selector punctuation' style='color: rgb(255, 255, 255);'>(</span><span class='token selector n-th' style='color: rgb(255, 157, 0);'>even</span><span class='token selector punctuation' style='color: rgb(255, 255, 255);'>)</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>8</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>background-color</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token color'>white</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>9</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span></div></pre>
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
                            </table><p>Contoh :</p>
                            <pre style='color: rgb(158, 254, 255); background-color: rgb(45, 42, 85);'><div class='token-line' style='color: rgb(158, 254, 255);'><span>1</span><span class='token selector' style='color: rgb(255, 157, 0);'>input</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:required</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>2</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>border</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token number' style='color: rgb(255, 98, 140);'>2</span><span class='token unit'>px</span><span class='token plain'> solid </span><span class='token color'>red</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>3</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>4</span><span class='token plain'></span><span class='token selector' style='color: rgb(255, 157, 0);'>input</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:valid</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>5</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>border</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token number' style='color: rgb(255, 98, 140);'>2</span><span class='token unit'>px</span><span class='token plain'> solid </span><span class='token color'>green</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>6</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>7</span><span class='token plain'></span><span class='token selector' style='color: rgb(255, 157, 0);'>input</span><span class='token selector pseudo-class' style='color: rgb(255, 157, 0);'>:invalid</span><span class='token plain'> </span><span class='token punctuation' style='color: rgb(255, 255, 255);'>{</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>8</span><span class='token plain'>    </span><span class='token property' style='color: rgb(255, 157, 0);'>border</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>:</span><span class='token plain'> </span><span class='token number' style='color: rgb(255, 98, 140);'>2</span><span class='token unit'>px</span><span class='token plain'> solid </span><span class='token color'>orange</span><span class='token punctuation' style='color: rgb(255, 255, 255);'>;</span><span class='token plain'> </span></div><div class='token-line' style='color: rgb(158, 254, 255);'><span>9</span><span class='token plain'></span><span class='token punctuation' style='color: rgb(255, 255, 255);'>}</span></div></pre>border merah.</li><li>:valid → Jika nilai input valid, border menjadi hijau.</li><li>:invalid → Jika nilai input tidak valid, border menjadi oranye.</li></ul><h2>Kesimpulan</h2><p>CSS pseudo class adalah alat yang sangat bergunadan fleksibel untuk meningkatkan interaktivitasdan pengalaman pengguna di website. Dengan pseudo class, kita dapat mengubah tampilan elemen berdasarkan interaksi pengguna, posisi elemen, dan status validasi form.</p><p> Dengan memahami dan menggunakan pseudo class dengan benar, kita bisa membuat website yang lebih dinamis, responsif, dan menarik, tanpa perlu menambahkan JavaScript atau class tambahan. </p><blockquote> Sudah siap menggunakan pseudo class di proyek web kamu? Coba sekarang dan buat website lebih interaktif! 🚀</blockquote>",
                "course_id" => $courseCSS->id,
                "created_at" => now()
            ],
            [
                'id' => Str::uuid(),
                "title" => "Memulai Pemrograman Web dengan HTML",
                "slug" => Str::slug("Memulai Pemrograman Web dengan HTML"),
                "cover" => "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "description" => "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat struktur halaman web. Bagi pemula yang ingin terjun ke dunia web development, pemahaman dasar HTML adalah langkah awal yang sangat penting",
                "body" => '<h2>Pendahuluan</h2><p>HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat struktur halaman web. Bagi pemula yang ingin terjun ke dunia web development, pemahaman dasar HTML adalah langkah awal yang sangat penting. Artikel ini akan memandu Anda melalui instalasi, penjelasan basic template HTML, serta elemen-elemen dasar seperti heading, paragraph, text style, dan tag anchor.</p><h2>Instalasi dan Persiapan</h2><h3>Text Editor</h3><p>Untuk menulis kode HTML, Anda memerlukan text editor. Beberapa pilihan populer adalah Visual Studio Code, Sublime Text, dan Notepad++.</p><p>⚠️ NOTE: Visual Studio Code sangat direkomendasikan karena memiliki banyak fitur yang memudahkan penulisan kode, termasuk ekstensi untuk HTML.</p><h3>Web Browser</h3><p>Anda memerlukan web browser seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge untuk melihat hasil kode HTML Anda.</p><p>⚠️ NOTE: Pastikan browser Anda selalu diperbarui ke versi terbaru.</p><h3>Membuat Folder Proyek</h3><p>Buat folder khusus di komputer Anda untuk menyimpan semua file proyek web Anda. Ini akan membantu Anda mengatur file-file Anda dengan rapi.</p><h2>Basic Template HTML</h2><p>Setiap halaman HTML dimulai dengan struktur dasar yang disebut basic template. Berikut adalah contohnya:</p><pre style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30)"><div class="token-line" style="color: rgb(156, 220, 254);"><span>1</span><span class="token plain">&lt;!DOCTYPE html&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>2</span><span class="token plain">&lt;html lang=</span><span class="token string" style="color: rgb(206, 145, 120);">"en"</span><span class="token plain">&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>3</span><span class="token plain">&lt;head&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>4</span><span class="token plain">   &lt;meta charset=</span><span class="token string" style="color: rgb(206, 145, 120);">"UTF-8"</span><span class="token plain">&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>5</span><span class="token plain">   &lt;meta name=</span><span class="token string" style="color: rgb(206, 145, 120);">"viewport"</span><span class="token plain"> content=</span><span class="token string" style="color: rgb(206, 145, 120);">"width=device-width, initial-scale=1.0"</span><span class="token plain">&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>6</span><span class="token plain">   &lt;title&gt;Document&lt;/title&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>7</span><span class="token plain">&lt;/head&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>8</span><span class="token plain">&lt;body&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>9</span><span class="token plain">   </span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>10</span><span class="token plain">&lt;/body&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>11</span><span class="token plain">&lt;/html&gt;</span></div></pre><ul><li><code>&lt;!DOCTYPE html&gt;</code>: Mendefinisikan versi HTML yang digunakan.</li><li><code>&lt;html&gt;</code>: Elemen root yang membungkus semua konten HTML.</li><li><code>&lt;head&gt;</code>: Berisi informasi meta tentang halaman web, seperti judul halaman dan karakter set.</li><li><code>&lt;meta charset="UTF-8"&gt;</code>: Mendefinisikan karakter set yang digunakan (UTF-8 mendukung sebagian besar karakter).</li><li><code>&lt;title&gt;</code>: Menentukan judul halaman yang muncul di tab browser.</li><li><code>&lt;body&gt;</code>: Berisi konten utama halaman web yang akan ditampilkan kepada pengguna.</li><li><code>lang="id"</code>: mendefinisikan bahasa yang digunakan pada halaman web, dalam contoh ini menggunakan bahasa indonesia.</li></ul><h2>HTML Heading dan Paragraph</h2><h3>Heading</h3><p>Heading digunakan untuk memberikan judul pada bagian-bagian halaman web. HTML memiliki enam tingkat heading, dari <code>&lt;h1&gt;</code> (yang paling penting) hingga <code>&lt;h6&gt;</code> (yang paling tidak penting).</p><p>Contoh:</p><pre style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30)"><div class="token-line" style="color: rgb(156, 220, 254);"><span>1</span><span class="token plain">&lt;h1&gt;Judul Utama&lt;/h1&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>2</span><span class="token plain">&lt;h2&gt;Judul Sub-bagian&lt;/h2&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>3</span><span class="token plain">&lt;h3&gt;Judul Sub-sub-bagian&lt;/h3&gt;</span></div></pre><h3>Paragraph</h3><p>Paragraph digunakan untuk menampilkan teks biasa. Elemen <code>&lt;p&gt;</code> digunakan untuk membuat paragraph.</p><p>Contoh:</p><pre style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30)"><div class="token-line" style="color: rgb(156, 220, 254);"><span>1</span><span class="token plain" style="">&lt;p&gt;Ini adalah sebuah paragraph. Teks di dalam elemen ini akan ditampilkan sebagai teks biasa.&lt;/p&gt;</span></div></pre><h2>Text Style</h2><p>HTML memungkinkan Anda untuk memberikan gaya pada teks menggunakan elemen-elemen berikut:</p><ul><li><code>&lt;strong&gt;</code>: Menebalkan teks.</li><li><code>&lt;em&gt;</code>: Memiringkan teks.</li><li><code>&lt;br&gt;</code>: Membuat baris baru.</li></ul><p>Contoh:</p><pre style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30)"><div class="token-line" style="color: rgb(156, 220, 254);"><span>1</span><span class="token plain" style="">&lt;p&gt;Teks ini &lt;strong&gt;ditebalkan&lt;/strong&gt;</span><span class="token punctuation" style="color: rgb(212, 212, 212);">,</span><span class="token plain"> dan teks ini &lt;em&gt;dimiringkan&lt;/em&gt;.&lt;/p&gt;</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span>2</span><span class="token plain">&lt;p&gt;Baris pertama.&lt;br&gt;Baris kedua.&lt;/p&gt;</span>',
                "course_id" => $course->id,
                "created_at" => now()
            ],
            [
                'id' => Str::uuid(),
                "title" => "Tag List, Table, dan Form dalam HTML",
                "slug" => Str::slug("Tag List, Table, dan Form dalam HTML"),
                "cover" => "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "description" => "Tiga elemen penting dalam HTML adalah tag list, table, dan form. Elemen-elemen ini memungkinkan Anda untuk menyusun konten, menampilkan data tabular, dan mengumpulkan informasi dari pengguna.",
                "body" => '<p>HTML (Hypertext Markup Language) adalah bahasa markah standar untuk membuat halaman web. Tiga elemen penting dalam HTML adalah tag list, table, dan form. Elemen-elemen ini memungkinkan Anda untuk menyusun konten, menampilkan data tabular, dan mengumpulkan informasi dari pengguna.</p><h2>1. Tag List (Daftar)</h2><p>Tag list digunakan untuk membuat daftar item. HTML menyediakan tiga jenis daftar:</p><h3>Daftar Tidak Berurutan (Unordered List)</h3><ul><li>Apel</li><li>Pisang</li><li>Jeruk</li></ul><h3>Daftar Berurutan (Ordered List)</h3><ol><li>Langkah 1</li><li>Langkah 2</li><li>Langkah 3</li></ol><h3>Daftar Definisi (Definition List)</h3><dl><dt>HTML</dt><dd>Bahasa markah untuk membuat halaman web.</dd><dt>CSS</dt><dd>Bahasa gaya untuk mengatur tampilan halaman web.</dd></dl><h2>2. Tag Table (Tabel)</h2><p>Tag table digunakan untuk menampilkan data dalam format baris dan kolom. Elemen-elemen penting dalam table adalah:</p><ul><li><code>&lt;table&gt;</code>: Tag utama untuk membuat tabel.</li><li><code>&lt;tr&gt;</code>: Tag untuk membuat baris tabel (table row).</li><li><code>&lt;th&gt;</code>: Tag untuk membuat sel header tabel (table header).</li><li><code>&lt;td&gt;</code>: Tag untuk membuat sel data tabel (table data).</li><li><code>&lt;caption&gt;</code>: Tag untuk memberikan judul pada tabel.</li></ul><p>Contoh:</p><table><caption>Daftar Nilai Siswa</caption><thead><tr><th>Nama</th><th>Nilai</th></tr></thead><tbody><tr><td>Budi</td><td>90</td></tr><tr><td>Siti</td><td>85</td></tr></tbody></table><h2>3. Tag Form (Formulir)</h2><p>Tag form digunakan untuk mengumpulkan informasi dari pengguna. Elemen-elemen penting dalam form adalah:</p><ul><li><code>&lt;form&gt;</code>: Tag utama untuk membuat formulir.</li><li><code>&lt;input&gt;</code>: Tag untuk membuat berbagai jenis input, seperti teks, password, checkbox, dan radio button.</li><li><code>&lt;label&gt;</code>: Tag untuk memberikan label pada input.</li><li><code>&lt;textarea&gt;</code>: Tag untuk membuat area teks yang lebih besar.</li><li><code>&lt;select&gt;</code>: Tag untuk membuat dropdown list.</li><li><code>&lt;button&gt;</code>: Tag untuk membuat tombol.</li></ul><p>Contoh:</p><form action="/submit" method="post"><label for="nama">Nama:</label><br><input type="text" id="nama" name="nama"><br><br><label for="email">Email:</label><br><input type="email" id="email" name="email"><br><br><input type="submit" value="Kirim"></form><h2>Tips Tambahan:</h2><ul><li>Gunakan CSS untuk mengatur tampilan list, table, dan form agar lebih menarik.</li><li>Pastikan form Anda memiliki atribut <code>action</code> dan <code>method</code> yang benar.</li><li>Gunakan atribut <code>id</code> dan <code>for</code> untuk menghubungkan label dengan input.</li><li>Untuk table yang kompleks, gunakan tag <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, dan <code>&lt;tfoot&gt;</code> untuk mengelompokkan bagian-bagian tabel.</li></ul><p>Semoga artikel ini bermanfaat!</p>',
                "course_id" => $course->id,
                "created_at" => now()
            ],
            [
                'id' => Str::uuid(),
                "title" => "Pengenalan CSS, Type Selector, Text Styling, dan Font Styling",
                "slug" => Str::slug("Pengenalan CSS, Type Selector, Text Styling, dan Font Styling"),
                "cover" => "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "description" => "CSS (Cascading Style Sheets) adalah bahasa style sheet yang digunakan untuk mengatur tampilan dokumen HTML. Dengan CSS, Anda dapat mengontrol warna, font, layout, dan banyak lagi. Artikel ini akan membahas pengenalan CSS, type selector, text styling, dan font styling.",
                "body" => '<p>CSS (Cascading Style Sheets) adalah bahasa style sheet yang digunakan untuk mengatur tampilan dokumen HTML. Dengan CSS, Anda dapat mengontrol warna, font, layout, dan banyak lagi. Artikel ini akan membahas pengenalan CSS, type selector, text styling, dan font styling.</p><h2>Pengenalan CSS</h2><p>CSS bekerja dengan memilih elemen HTML dan menerapkan style padanya. Ada tiga cara untuk menambahkan CSS ke dokumen HTML:</p><ul><li><b>Inline CSS:</b> Menambahkan style langsung ke elemen HTML menggunakan atribut <code>style</code>.</li><li><b>Internal CSS:</b> Menambahkan style di dalam tag <code>&lt;style&gt;</code> di bagian <code>&lt;head&gt;</code> dokumen HTML.</li><li><b>External CSS:</b> Menambahkan style dalam file CSS terpisah dan menghubungkannya ke dokumen HTML menggunakan tag <code>&lt;link&gt;</code>.</li></ul><p>Cara yang paling umum dan disarankan adalah menggunakan external CSS karena memungkinkan Anda untuk memisahkan konten (HTML) dari presentasi (CSS).</p><h2>Type Selector</h2><p>Type selector digunakan untuk memilih elemen HTML berdasarkan nama tag-nya. Misalnya, <code>p</code> akan memilih semua elemen <code>&lt;p&gt;</code>, dan <code>h1</code> akan memilih semua elemen <code>&lt;h1&gt;</code>.</p><p>Contoh:</p><pre><code>p {color: blue;font-size: 16px;}</code></pre><p>Kode ini akan membuat semua paragraf berwarna biru dan berukuran 16 piksel.</p><h2>Text Styling</h2><p>CSS menyediakan berbagai properti untuk mengatur tampilan teks, seperti:</p><ul><li><code>color</code>: Mengatur warna teks.</li><li><code>text-align</code>: Mengatur perataan teks (left, right, center, justify).</li><li><code>text-decoration</code>: Menambahkan dekorasi pada teks (underline, overline, line-through).</li><li><code>text-transform</code>: Mengubah kapitalisasi teks (uppercase, lowercase, capitalize).</li><li><code>line-height</code>: Mengatur tinggi baris teks.</li><li><code>letter-spacing</code>: Mengatur jarak antar huruf.</li></ul><p>Contoh:</p><pre><code>h1 {text-align: center;text-transform: uppercase;color: #333;}</code></pre><p>Kode ini akan membuat semua heading <code>&lt;h1&gt;</code> rata tengah, huruf besar, dan berwarna abu-abu gelap.</p><h2>Font Styling</h2><p>CSS juga memungkinkan Anda untuk mengatur tampilan font, seperti:</p><ul><li><code>font-family</code>: Mengatur jenis font.</li><li><code>font-size</code>: Mengatur ukuran font.</li><li><code>font-weight</code>: Mengatur ketebalan font (bold, normal).</li><li><code>font-style</code>: Mengatur gaya font (italic, normal).</li></ul><p>Contoh:</p><pre><code>body {font-family: Arial, sans-serif;font-size: 14px;}</code></pre><p>Kode ini akan membuat semua teks di dalam elemen <code>&lt;body&gt;</code> menggunakan font Arial atau font sans-serif jika Arial tidak tersedia, dan berukuran 14 piksel.</p><p>Dengan memahami konsep-konsep dasar ini, Anda dapat mulai menggunakan CSS untuk membuat halaman web yang lebih menarik dan terstruktur.</p>',
                "course_id" => $course->id,
                "created_at" => now()
            ],
            [
                'id' => Str::uuid(),
                "title" => "CSS Display, Width, Height, dan Overflow",
                "slug" => Str::slug("CSS Display, Width, Height, dan Overflow"),
                "cover" => "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "description" => "CSS menyediakan properti untuk mengontrol bagaimana elemen ditampilkan, ukuran elemen, dan bagaimana konten yang melebihi batas elemen ditangani. Artikel ini akan membahas properti display, width, height, dan overflow",
                "body" => '<p>CSS menyediakan properti untuk mengontrol bagaimana elemen ditampilkan, ukuran elemen, dan bagaimana konten yang melebihi batas elemen ditangani. Artikel ini akan membahas properti <code>display</code>, <code>width</code>, <code>height</code>, dan <code>overflow</code>.</p><h2>Display</h2><p>Properti <code>display</code> menentukan jenis kotak yang dihasilkan oleh elemen. Nilai yang umum digunakan adalah:</p><ul><li><code>block</code>: Elemen ditampilkan sebagai blok, memenuhi lebar yang tersedia dan memulai baris baru.</li><li><code>inline</code>: Elemen ditampilkan inline, hanya memenuhi lebar kontennya dan tidak memulai baris baru.</li><li><code>inline-block</code>: Elemen ditampilkan inline, tetapi dapat memiliki lebar dan tinggi yang ditentukan.</li><li><code>none</code>: Elemen tidak ditampilkan.</li><li><code>flex</code>: Elemen ditampilkan sebagai container flexbox.</li><li><code>grid</code>: Elemen ditampilkan sebagai container grid.</li></ul><p>Contoh:</p><pre><code>div {display: block;}span {display: inline-block;}</code></pre><h2>Width dan Height</h2><p>Properti <code>width</code> dan <code>height</code> menentukan lebar dan tinggi elemen. Nilai dapat berupa piksel (<code>px</code>), persentase (<code>%</code>), atau nilai lainnya.</p><p>Contoh:</p><pre><code>div {width: 200px;height: 100px;}img {width: 100%;height: auto;}</code></pre><h2>Overflow</h2><p>Properti <code>overflow</code> menentukan bagaimana konten yang melebihi batas elemen ditangani. Nilai yang umum digunakan adalah:</p><ul><li><code>visible</code>: Konten yang melebihi batas tetap ditampilkan.</li><li><code>hidden</code>: Konten yang melebihi batas disembunyikan.</li><li><code>scroll</code>: Scrollbar ditampilkan, bahkan jika konten tidak melebihi batas.</li><li><code>auto</code>: Scrollbar ditampilkan hanya jika konten melebihi batas.</li></ul><p>Contoh:</p><pre><code>div {width: 150px;height: 75px;overflow: auto;}</code></pre><p>Dengan memahami properti-properti ini, Anda dapat mengontrol tampilan dan tata letak elemen dengan lebih baik.</p>',
                "course_id" => $course->id,
                "created_at" => now()
            ],
        ]);
    }
}
