<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="ALOPE adalah platform belajar coding online yang menyediakan 80% materi gratis, membantu mereka yang kurang beruntung untuk mengejar karier di bidang teknologi. Bergabunglah dengan komunitas yang berdedikasi untuk pengembangan logika dan algoritma.">

        <title inertia>{{ config('app.name', 'ALOPE COURSE') }}</title>

        {{-- FONT --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" media="print" onload="this.media='all'">


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead

        <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3415868469514744"
            crossorigin="anonymous"
        ></script>

        {{--  --}}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">

        {{-- preload --}}
        <link rel="preload" as="image" href="/images/header.png" type="image/png" />

        <style>
            * {
                font-family: "Plus Jakarta Sans", serif;
                font-optical-sizing: auto;
                font-style: normal;
            }
        </style>
    </head>
    <body class="font-sans antialiased bg-gray-100 max-w-screen overflow-x-hidden relative">
        @inertia
    </body>
</html>
