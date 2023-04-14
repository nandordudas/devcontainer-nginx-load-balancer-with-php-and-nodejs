<?php

header('Access-Control-Allow-Origin: *');

echo 'Hello from PHP ' . PHP_VERSION;

$dsn = 'pgsql:host=db;port=5432;dbname=postgres;user=postgres;password=postgres';

new PDO($dsn);
