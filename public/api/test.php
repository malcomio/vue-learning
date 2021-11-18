<?php

$data = file_get_contents('php://input');
$decoded = json_decode($data, TRUE);

$output = [
  'time' => date('c'),
  'message' => $decoded['message'] ?? '',
];

print json_encode($output);

