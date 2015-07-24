<?php

use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Psy\Util\Json;

if (!function_exists('db_pretend')) {

    /**
     * db_pretend
     *
     *
     * @param Closure $callback
     * @return void
     * @access  public
     */
    function db_pretend(Closure $callback)
    {
        Log::debug(sprintf("SQL: %s", Json::encode(DB::pretend(function() use($callback)
        {
            return call_user_func($callback);
        }))));
    }

}

if (!function_exists('active_menu')) {

    /**
     * active_menu
     *
     *
     * @param $key
     * @param string $class
     * @return bool
     * @access  public
     */
    function active_menu($key, $class='')
    {
        return in_array($key, session('page_key', [])) ? $class : '';
    }

}

if (!function_exists('input')) {

    /**
     * input
     *
     *
     * @param $key
     * @param string $default
     * @access  public
     * @return mixed
     */
    function input($key, $default='')
    {
        return app('input')->get($key, $default);
    }

}

if (!function_exists('unique_on_session')) {

    /**
     * unique_on_session
     *
     *
     * @param $key
     * @access  public
     * @return mixed
     */
    function unique_on_session($key, $doNotLog=false)
    {
        if ($doNotLog === false)
        {
            if ($currentKeys = session('session_related_cache_keys', []) AND !in_array($key, $currentKeys)) {
                $currentKeys[] = $key;
                session(['session_related_cache_keys'=>$currentKeys]);
            }
        }
        return sprintf('%s_%s', session()->token(), $key);
    }

}

if (!function_exists('is_authenticated')) {

    /**
     * is_authenticated
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null|static
     * @access  public
     */
    function is_authenticated($returnAsObject=false)
    {
        $user = User::getCachedCurrentUser();
        if ($returnAsObject) return $user;

        return $user->exists;
    }

}

if (!function_exists('is_admin')) {

    /**
     * is_admin
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null|static
     * @access  public
     */
    function is_admin()
    {
        $user = is_authenticated();
        return $user->is_admin;
    }

}

if (!function_exists('clear_session_related_cache')) {

    /**
     * clear_session_related_cache
     *
     * @return void
     * @access  public
     */
    function clear_session_related_cache()
    {
        $keys = session('session_related_cache_keys', []);
        foreach ($keys as $key) {
            Cache::forget(unique_on_session($key, true));
        }

    }

}

if (!function_exists('to_link')) {

    /**
     * to_link
     *
     * @param $string
     * @access  public
     * @return string
     */
    function to_link($string)
    {
        return strtolower(str_replace(' ', '-', $string));
    }

}
