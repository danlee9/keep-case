<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        {{-- <style>
            html, body {
                /* background-color: #fff;
                 */
                background: linear-gradient(to right, #fc8b56, #fd5656);
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .title {
                font-size: 84px;
            }

            .content {
                text-align: center;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style> --}}
    </head>
    <body>
        <div id="root"></div>
        <script src="/js/index.js"></script>
    </body>
</html>
