#!/usr/bin/env bash
composer dump-autoload
php artisan clear-compiled
php artisan config:cache
php artisan route:cache
php artisan optimize --force