<?php


namespace App\Exceptions;


use Exception;

class ThemeMissing extends Exception
{

    /**
     * @inheritdoc
     */
    public function __construct($message = "No theme defined.", $code = 0, Exception $previous = null) { }

}