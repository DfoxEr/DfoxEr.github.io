<?php

$arr = array(
    "name" => "alex",
    "age" => 17,
    "children" => array(
        array(
            "name" => "vova",
            "age" => 13
        ),
        array(
            "name" => "katya",
            "age" => 9
        )
    )
);

array_push($arr,array(1,2,3));

print_r($arr);

?>