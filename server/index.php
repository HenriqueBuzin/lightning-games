<?php



    use \Psr\Http\Message\ServerRequestInterface as Request;

    use \Psr\Http\Message\ResponseInterface as Response;

    header("Access-Control-Allow-Origin: *");

    require 'vendor/autoload.php';

    $app = new \Slim\App;

    $app->get('/games', function (Request $request, Response $response) {

        $games = array();

        $games = array(

            "name" => "Grand Turismo",

            "category" => "PS4",

            "price" => "199.99",

            "quantity" => "8",

            "production" => "true",

            "description" => "Eleito o melhor jogo de corrida."

        );

        return json_encode($games);

    });

    $app->get('/', function (Request $request, Response $response) {

        echo 9;

        return 9;

    });

    $app->run();
?>