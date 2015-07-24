<?php

namespace App\Http\Controllers;


class Admin extends Controller
{


    /**
     * Page constructor.
     */
    public function __construct()
    {

    }

    /**
     * getIndex
     *
     *
     * @return \Illuminate\View\View
     * @access  public
     **/
    public function getIndex()
    {
        return view('admin.home.page');
    }


}