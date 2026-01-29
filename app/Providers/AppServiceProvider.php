<?php

namespace App\Providers;

use App\Http\Resources\FooterResource;
use App\Models\Course;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Inertia::share([
            'env' => [
                'APP_NAME' => config('app.name'),
                'APP_URL' => config('app.url'),
            ],
        ]);

        Inertia::share('courses', function () {
            return Cache::remember('footer_courses', 3600, function () {
                return Course::select('id', 'title', 'slug')
                    ->orderBy('created_at', 'desc')
                    ->limit(3)
                    ->get();
            });
        });
    }
}
