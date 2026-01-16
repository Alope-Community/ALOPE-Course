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
        {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" media="print" onload="this.media='all'"> --}}
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet">

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
                font-family: "Poppins", serif;
                font-optical-sizing: auto;
                font-style: normal;
            }

            /* Heading */
            #body h1 {
                font-size: 2em;
                font-weight: bold;
                margin: 0.67em 0;
            }
            #body h2 {
                font-size: 1.5em;
                font-weight: bold;
                margin: 0.83em 0;
            }
            #body h3 {
                font-size: 1.17em;
                font-weight: bold;
                margin: 1em 0;
            }
            #body h4 {
                font-size: 1em;
                font-weight: bold;
                margin: 1.33em 0;
            }

            /* Paragraph */
            #body p {
                margin: 1em 0;
            }

            #body a {
                color: #2276f0;
                text-decoration: underline;
            }

            /* Horizontal Rule */
            #body hr {
                display: block;
                height: 1px;
                border: 0;
                border-top: 1px solid #ccc;
                margin: 1em 0;
                padding: 0;
            }

            /* Lists */
            #body ul,
            #body ol {
                padding-left: 40px;
                margin: 1em 0;
            }
            #body ul {
                list-style: disc;
            }
            #body ol {
                list-style: decimal;
            }
            #body li {
                margin-bottom: 0.5em;
            }

            /* Table */
            #body table {
                border-collapse: collapse;
                width: 100%;
            }
            #body th,
            #body td {
                padding: 8px;
                border: 1px solid #ddd;
            }
            #body th {
                font-weight: bold;
                text-align: left;
            }

            /* Blockquote */
            #body blockquote {
                margin: 1em 40px;
                padding: 0.5em 10px;
                border-left: 4px solid #ccc;
                font-style: italic;
            }

            code {
                background-color: #ebe8e8;
                color: #302f2f;
                padding: 4px 8px;
                border-radius: 5px;
                font-family: 'Courier New', Courier, monospace;
                font-size: 0.95em;
                white-space: pre-wrap;
            }

            /* ========================== */
            /* RESPONSIVE STYLING */
            /* ========================== */

            @media (max-width: 1024px) {
                /* Tablet */
                #body h1 {
                    font-size: 1.75em;
                }
                #body h2 {
                    font-size: 1.4em;
                }
                #body h3 {
                    font-size: 1.1em;
                }
                #body h4 {
                    font-size: 0.95em;
                }

                #body blockquote {
                    margin: 1em 20px;
                    padding: 0.5em;
                    font-size: 0.9em;
                }

                #body table {
                    font-size: 0.9em;
                }
            }

            @media (max-width: 768px) {
                /* Mobile */
                #body h1 {
                    font-size: 1.5em;
                }
                #body h2 {
                    font-size: 1.25em;
                }
                #body h3 {
                    font-size: 1em;
                }
                #body h4 {
                    font-size: 0.9em;
                }

                #body p {
                    margin: 0.75em 0;
                }

                #body ul,
                #body ol {
                    padding-left: 20px;
                }

                #body blockquote {
                    margin: 0.5em 15px;
                    padding: 0.4em;
                    font-size: 0.85em;
                }

                #body table {
                    font-size: 0.85em;
                }

                #body th,
                #body td {
                    padding: 6px;
                }
            }

            @media (max-width: 480px) {
                /* Small Mobile */
                #body h1 {
                    font-size: 1.3em;
                }
                #body h2 {
                    font-size: 1.1em;
                }
                #body h3 {
                    font-size: 0.95em;
                }
                #body h4 {
                    font-size: 0.85em;
                }

                #body p {
                    font-size: 0.875rem;
                    line-height: 1.5rem;
                    margin: 0.5em 0;
                }

                #body ul,
                #body ol {
                    padding-left: 20px;
                    font-size: 0.875rem;
                }

                #body li {
                    line-height: 1.5rem;
                }

                #body blockquote {
                    margin: 0.5em 5px;
                    padding: 0.5em;
                    font-size: 0.8em;
                }

                #body table {
                    font-size: 0.8em;
                }

                #body th,
                #body td {
                    padding: 5px;
                }
            }

            /* CSS untuk menyembunyikan line number */
            #body pre {
                padding: 10px;
                border-radius: 5px;
                overflow-x: auto !important;
                font-size: 0.875rem;
            }
            #body pre > div > span:first-child {
                display: none;
            }

        </style>
    </head>
    <body class="font-sans antialiased bg-gray-100 max-w-screen overflow-x-hidden relative">
        @inertia
    </body>
</html>
