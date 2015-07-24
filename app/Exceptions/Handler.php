<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        HttpException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     */
    public function report(Exception $e)
    {
        if ($e instanceof NotFoundHttpException) {
            Log::error(sprintf('404 %s', Request::fullUrl()));
            return;
        }

        if ($e instanceof TokenMismatchException) {
            Log::error(sprintf('TOKEN MISMATCH %s', Request::fullUrl()));
            return;
        }

        parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        if ($request->wantsJson()) {
            return Response::json([
                'success' => false,
                'message' => $e->getMessage(),
                'exception' => get_class($e)
            ]);
        }
        if ($e instanceof NotFoundHttpException) return Response::view(theme_view('404.page'));
        return parent::render($request, $e);
    }
}
