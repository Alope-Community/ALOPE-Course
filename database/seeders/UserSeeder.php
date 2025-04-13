<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            [
                "name" => "Admin",
                "email" => "admin@gmail.com",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Ilham Hafidz",
                "email" => "ilham@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Taufan Hidayatul Akbar",
                "email" => "taufan@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Firdan Fauzan",
                "email" => "firdan@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Fikry Ramadhan",
                "email" => "fikry@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Billy Jonathan",
                "email" => "billy@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Dikri Fauzan A",
                "email" => "dikri@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Masnun Muhaemin",
                "email" => "masnun@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Fatra",
                "email" => "fatra@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Malika Shalshabila Auralina",
                "email" => "malika@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Saeful",
                "email" => "saeful@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Syahrul",
                "email" => "syahrul@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],
            [
                "name" => "Rizki",
                "email" => "Rizki@alope.id",
                "password" => bcrypt("alopeisamazing")
            ],

            // PBK
            [
                "name" => "Hari Inaka Hermawan",
                "email" => "hariinakahermawan@pbkfkom.com",
                "password" => bcrypt("hariinakahermawan")
            ],
            [
                "name" => "Aam Setiana",
                "email" => "aamsetiana@pbkfkom.com",
                "password" => bcrypt("aamsetiana")
            ],
            [
                "name" => "Ade Wahyu Warpudin",
                "email" => "adewahyuwarpudin@pbkfkom.com",
                "password" => bcrypt("adewahyuwarpudin")
            ],
            [
                "name" => "Adzy Gustry Komala",
                "email" => "adzygustrykomala@pbkfkom.com",
                "password" => bcrypt("adzygustrykomala")
            ],
            [
                "name" => "Agus Kumala",
                "email" => "aguskumala@pbkfkom.com",
                "password" => bcrypt("aguskumala")
            ],
            [
                "name" => "Ahmad Fauzil Adhim",
                "email" => "ahmadfauziladhim@pbkfkom.com",
                "password" => bcrypt("ahmadfauziladhim")
            ],
            [
                "name" => "Aldi Maulana",
                "email" => "aldimaulana@pbkfkom.com",
                "password" => bcrypt("aldimaulana")
            ],
            [
                "name" => "Alif Aqiilah Zaki",
                "email" => "alifaqiilahzaki@pbkfkom.com",
                "password" => bcrypt("alifaqiilahzaki")
            ],
            [
                "name" => "Alika Fadila Haya",
                "email" => "alikafadilahaya@pbkfkom.com",
                "password" => bcrypt("alikafadilahaya")
            ],
            [
                "name" => "Alya Khandriyani",
                "email" => "alyakhandriyani@pbkfkom.com",
                "password" => bcrypt("alyakhandriyani")
            ],
            [
                "name" => "Apryan Anugrah",
                "email" => "apryananugrah@pbkfkom.com",
                "password" => bcrypt("apryananugrah")
            ],
            [
                "name" => "Cecilia Aisyah Az Zahra",
                "email" => "ceciliaaisyahazzahra@pbkfkom.com",
                "password" => bcrypt("ceciliaaisyahazzahra")
            ],
            [
                "name" => "Dea Feby Sulistiani",
                "email" => "deafebysulistiani@pbkfkom.com",
                "password" => bcrypt("deafebysulistiani")
            ],
            [
                "name" => "Dika Suganda",
                "email" => "dikasuganda@pbkfkom.com",
                "password" => bcrypt("dikasuganda")
            ],
            [
                "name" => "Dinda Sukmaningsih",
                "email" => "dindasukmaningsih@pbkfkom.com",
                "password" => bcrypt("dindasukmaningsih")
            ],
            [
                "name" => "Dita Amelia",
                "email" => "ditaamelia@pbkfkom.com",
                "password" => bcrypt("ditaamelia")
            ],
            [
                "name" => "Eka Septiana",
                "email" => "ekaseptiana@pbkfkom.com",
                "password" => bcrypt("ekaseptiana")
            ],
            [
                "name" => "Esa Gentar Sundava",
                "email" => "esagentarsundava@pbkfkom.com",
                "password" => bcrypt("esagentarsundava")
            ],
            [
                "name" => "Fajar Halim",
                "email" => "fajarhalim@pbkfkom.com",
                "password" => bcrypt("fajarhalim")
            ],
            [
                "name" => "Galih Rizaldy",
                "email" => "galihrizaldy@pbkfkom.com",
                "password" => bcrypt("galihrizaldy")
            ],
            [
                "name" => "Haikal Jibran A.",
                "email" => "haikaljibrana@pbkfkom.com",
                "password" => bcrypt("haikaljibrana")
            ],
            [
                "name" => "Haikal Kamil",
                "email" => "haikalkamil@pbkfkom.com",
                "password" => bcrypt("haikalkamil")
            ],
            [
                "name" => "Hersya Yudina",
                "email" => "hersyayudina@pbkfkom.com",
                "password" => bcrypt("hersyayudina")
            ],
            [
                "name" => "Ilham Taufikurrahman Zaki",
                "email" => "ilhamtaufikurrahmanzaki@pbkfkom.com",
                "password" => bcrypt("ilhamtaufikurrahmanzaki")
            ],
            [
                "name" => "Indra Agustiawan",
                "email" => "indraagustiawan@pbkfkom.com",
                "password" => bcrypt("indraagustiawan")
            ],
            [
                "name" => "Irdan Guntara",
                "email" => "irdanguntara@pbkfkom.com",
                "password" => bcrypt("irdanguntara")
            ],
            [
                "name" => "Lutfi Faiz Ziyadatullah",
                "email" => "lutfifaizziyadatullah@pbkfkom.com",
                "password" => bcrypt("lutfifaizziyadatullah")
            ],
            [
                "name" => "Mohamad Aban Sy’bana",
                "email" => "mohamadabansybana@pbkfkom.com",
                "password" => bcrypt("mohamadabansybana")
            ],
            [
                "name" => "Muhamad Galbi Alayubi",
                "email" => "muhamadgalbialayubi@pbkfkom.com",
                "password" => bcrypt("muhamadgalbialayubi")
            ],
            [
                "name" => "Muhammad Haqil Abdillah",
                "email" => "muhammadhaqilabdillah@pbkfkom.com",
                "password" => bcrypt("muhammadhaqilabdillah")
            ],
            [
                "name" => "Muhammad Nasik Hamid",
                "email" => "muhammadnasikhamid@pbkfkom.com",
                "password" => bcrypt("muhammadnasikhamid")
            ],
            [
                "name" => "Muhammad Nurul Hikmah K",
                "email" => "muhammadnurulhikmahk@pbkfkom.com",
                "password" => bcrypt("muhammadnurulhikmahk")
            ],
            [
                "name" => "Muhammad Rafly Irhandy",
                "email" => "muhammadraflyirhandy@pbkfkom.com",
                "password" => bcrypt("muhammadraflyirhandy")
            ],
            [
                "name" => "Muhammad Rizky",
                "email" => "muhammadrizky@pbkfkom.com",
                "password" => bcrypt("muhammadrizky")
            ],
            [
                "name" => "Nadia Putri Syahrani",
                "email" => "nadiaputrisyahrani@pbkfkom.com",
                "password" => bcrypt("nadiaputrisyahrani")
            ],
            [
                "name" => "Naldi Syahrizal Ramdani",
                "email" => "naldisyahrizalramdani@pbkfkom.com",
                "password" => bcrypt("naldisyahrizalramdani")
            ],
            [
                "name" => "Pasha Apriliani",
                "email" => "pashaapriliani@pbkfkom.com",
                "password" => bcrypt("pashaapriliani")
            ],
            [
                "name" => "Rahma Izmi Fatihah",
                "email" => "rahmaizmifatihah@pbkfkom.com",
                "password" => bcrypt("rahmaizmifatihah")
            ],
            [
                "name" => "Refhan Fazri Handianto",
                "email" => "refhanfazrihandianto@pbkfkom.com",
                "password" => bcrypt("refhanfazrihandianto")
            ],
            [
                "name" => "Regi Dita Laditra",
                "email" => "regiditaladitra@pbkfkom.com",
                "password" => bcrypt("regiditaladitra")
            ],
            [
                "name" => "Rifki Firmasyah",
                "email" => "rifkifirmasyah@pbkfkom.com",
                "password" => bcrypt("rifkifirmasyah")
            ],
            [
                "name" => "Ripky Paturohman",
                "email" => "ripkypaturohman@pbkfkom.com",
                "password" => bcrypt("ripkypaturohman")
            ],
            [
                "name" => "Rizqi Putra Pamungkas",
                "email" => "rizqiputrapamungkas@pbkfkom.com",
                "password" => bcrypt("rizqiputrapamungkas")
            ],
            [
                "name" => "Salwa Hamdunah",
                "email" => "salwahamdunah@pbkfkom.com",
                "password" => bcrypt("salwahamdunah")
            ],
            [
                "name" => "Septiano Ferdiansyah",
                "email" => "septianoferdiansyah@pbkfkom.com",
                "password" => bcrypt("septianoferdiansyah")
            ],
            [
                "name" => "Silvianita",
                "email" => "silvianita@pbkfkom.com",
                "password" => bcrypt("silvianita")
            ],
            [
                "name" => "Syafani Dwina Riandini",
                "email" => "syafanidwinaryandini@pbkfkom.com",
                "password" => bcrypt("syafanidwinaryandini")
            ],
            [
                "name" => "Syifa Cahya Maryana",
                "email" => "syifacahyamaryana@pbkfkom.com",
                "password" => bcrypt("syifacahyamaryana")
            ],
            [
                "name" => "Muhammad Vansa Yusri T.",
                "email" => "muhammadvansayusrit@pbkfkom.com",
                "password" => bcrypt("muhammadvansayusrit")
            ],
            [
                "name" => "Vemas Fariza",
                "email" => "vemasfariza@pbkfkom.com",
                "password" => bcrypt("vemasfariza")
            ],
            [
                "name" => "Widia Sulistiani",
                "email" => "widiasulistiani@pbkfkom.com",
                "password" => bcrypt("widiasulistiani")
            ]
        ]);
    }
}
