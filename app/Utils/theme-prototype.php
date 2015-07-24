<?php


use App\Exceptions\ThemeMissing;

if (!function_exists('theme_view')) {

    /**
     * theme_view
     *
     *
     * @param $viewName
     * @param array $parent
     * @return string
     * @throws ThemeMissing
     * @access  public
     */
    function theme_view($viewName, $parent=[])
    {
        $theme = env('APP_THEME', null);

        if (empty($theme)) throw new ThemeMissing;

        if (!empty($parent)) $viewName = sprintf('%s_%s', implode('_', $parent), $viewName);

        return sprintf("%s.%s", $theme, $viewName);

    }

}

if (!function_exists('breadcrumbs')) {

    /**
     * breadcrumbs
     *
     *
     * @param $pageTitle
     * @param array $crumbs
     * @throws ThemeMissing
     * @access  public
     * @return \Illuminate\View\View
     */
    function breadcrumbs($pageTitle, $crumbs=[])
    {
        $theme = env('APP_THEME', null);

        if (empty($theme)) throw new ThemeMissing;

        return app('view')->make(sprintf('%s._partials.breadcrumbs', $theme), compact('pageTitle', 'crumbs'))->render();
    }

}

if (!function_exists('sidebar_services')) {

    /**
     * sidebar_services
     *
     *
     * @throws ThemeMissing
     * @access  public
     * @return \Illuminate\View\View
     */
    function sidebar_services()
    {
        $theme = env('APP_THEME', null);

        if (empty($theme)) throw new ThemeMissing;

        return app('view')->make(sprintf('%s._partials.sidebar-services', $theme))->render();
    }

}