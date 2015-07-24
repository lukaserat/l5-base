<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
//use Rap2hpoutre\LaravelLogViewer\LogViewerController;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('logs', sprintf('\%s@index', LogViewerController::class));
Route::controller('admin', Admin::class);
Route::controller('auth', Auth\AuthController::class, [
    'postLogin' => 'login',
    'postSignUp' => 'sign-up'
]);
Route::get('{page?}', Front\Pages::class .'@interpretPage');