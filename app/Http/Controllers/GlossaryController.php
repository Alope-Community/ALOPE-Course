<?php

namespace App\Http\Controllers;

use App\Models\Glosary;
use App\Models\Glossary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GlossaryController extends Controller
{
    public function show($slug)
    {
        $glosary = Glossary::where('slug', $slug)->firstOrFail();

        return Inertia::render('TooltipDetail/Show', [
            'glosary' => $glosary,
        ]);
    }
}
