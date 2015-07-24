<?php


namespace App\Http\Controllers\Front;


use App\Http\Controllers\Controller;
use App\Http\Controllers\SeoTrait;

class Pages extends Controller
{
    use SeoTrait;

    /**
     * interpretPage
     *
     * Responsible for interpreting what page should be returned
     *
     *
     * @param null|string $page
     * @access  public
     * @return \Illuminate\Http\RedirectResponse
     */
    public function interpretPage($page=null)
    {
        if (is_null($page)) $page = 'index'; // the home

        $page = camel_case(sprintf('page-%s', $page));

        if (in_array($page, get_class_methods($this)))
        {
            return call_user_func([$this, $page]);
        }

        abort(404); // Abort 404 if there is no valid page

    }

    /**
     * @return \Illuminate\View\View
     * @throws \App\Exceptions\ThemeMissing
     */
    public function pageIndex()
    {
        $this->prepareSeoMeta('index');
        return view(theme_view('home.page'));
    }


}