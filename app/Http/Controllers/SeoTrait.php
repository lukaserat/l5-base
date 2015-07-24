<?php


namespace App\Http\Controllers;


use SEOMeta;
use Session;

trait SeoTrait
{
    protected function prepareSeoMeta($key)
    {
        $meta = config(sprintf('site.navigation.%s.meta', $key));

        $defaultMeta = config('site.defaults.seo.meta');

        if (is_null($meta)) $meta = $defaultMeta;

        $meta = array_merge($defaultMeta, $meta);

        Session::set('page_key', explode('.', $key));
        SEOMeta::setTitle($meta['title']);
        SEOMeta::setDescription($meta['description']);
        SEOMeta::setKeywords($meta['keywords']);
    }
}