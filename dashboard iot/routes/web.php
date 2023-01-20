<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/









Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->Middleware('auth');



Route::get('/index', [App\Http\Controllers\IotController::class, 'index'])->name('index')->Middleware('auth');

// LAMPE affiche 
Route::get('/lampe/{id}', [App\Http\Controllers\LampeController::class, 'index'])->name('lampe')->Middleware('auth');
// button modifer etat de led
Route::put('edit/{id}',[App\Http\Controllers\LampeController::class, 'update']);
// hidden add lampe in firebase
Route::post('/add-lampe', [App\Http\Controllers\LampeController::class, 'store'])->Middleware('auth');



// show temperature and himidity air
Route::get('/temp_humd', [App\Http\Controllers\TemperatureHumdidterController::class, 'index'])->name('temp_humd')->Middleware('auth');
// hidden add air in firebase
Route::post('/add-air', [App\Http\Controllers\TemperatureHumdidterController::class, 'store'])->Middleware('auth');

// show water sensor
Route::get('/water_sensor', [App\Http\Controllers\WaterController::class, 'index'])->name('temp_humd')->Middleware('auth');

// hidden add water in firebase
Route::post('/add-water', [App\Http\Controllers\WaterController::class, 'store'])->Middleware('auth');

// show sol humiditer
Route::get('/sol_humidité', [App\Http\Controllers\SolController::class, 'index'])->name('temp_humd')->Middleware('auth');


// hidden add pompe in firebase
Route::post('/add-pompe', [App\Http\Controllers\SolController::class, 'store'])->Middleware('auth');



Auth::routes();


