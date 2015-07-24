<?php

namespace App\Providers;

use DB;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        /** @noinspection PhpIncludeInspection */
        require app_path('Utils/helpers.php');

        /** @noinspection PhpIncludeInspection */
        require app_path('Utils/theme-prototype.php');

        if ($this->app->environment('local'))
        {
//            /** @noinspection PhpIncludeInspection */
//            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }

        if (!$this->app->environment('local'))
        {
            DB::connection()->disableQueryLog();
        }
    }
}
