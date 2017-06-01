<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;

    use \Psr\Http\Message\ResponseInterface as Response;

    header("Access-Control-Allow-Origin: *");

    require 'vendor/autoload.php';

    $app = new \Slim\App;

    $app->get('/game', function (Request $request, Response $response) {

        $games = '[{"id":"9","name":"Grand Turismo","platform":["Playstation 4","Xbox One"],"category":"Corrida","price":"59.90","quantity":"8","production":"true","description":"Eleito o melhor jogo de corrida."},{"id":"8","name":"GTA","platform":["Playstation 4","Xbox One"],"category":"Corrida","price":"59.90","quantity":"8","production":"true","description":"Eleito o melhor jogo de corrida."}]';

        return $games;

    });

    $app->get('/', function (Request $request, Response $response) {

        $games = '[{"id":"9 Turismo","name":"Grand Turismo","platform":["Playstation 4","Xbox One"],"category":"Corrida","price":"59.90","quantity":"8","production":"true","description":"Eleito o melhor jogo de corrida."}]';

        $platform = '[{"id":0, "name":"Xbox 360"},{"id":1, "name":"Xbox One"},{"id":2, "name":"Playstation 3"},{"id":3, "name":"Playstation 4"}]';

        echo "<h1>Games</h1>";

        echo $games;

        echo "<br><br><pre>";

        print_r(json_decode($games));

        echo "<pre>";

        echo "<h1>Plataformas</h1>";

        echo $platform;

        echo "<br><br><pre>";

        print_r(json_decode($platform));

        echo "<pre>";

    });

    $app->get('/platforms', function (Request $request, Response $response) {

        $platform = '[{"id":0, "name":"Xbox 360"},{"id":1, "name":"Xbox One"},{"id":2, "name":"Playstation 3"},{"id":3, "name":"Playstation 4"}]';

        return $platform;

    });

    $app->run();
?>