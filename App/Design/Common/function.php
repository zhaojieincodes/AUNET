<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/2/6
 * Time: 20:51
 */
function convertArrayToTree($data) {
    $rst = array();
    $month = array();
    $year = array();
    foreach($data as $v) {
        $month[] = $v["month"];
        $year[] = $v["year"];
    }
    $year = array_unique($year);
    $month = array_unique($month);
    foreach($year as $y) {
        foreach($month as $m) {
            foreach($data as $k) {
                if($k["month"] == $m && $k["year"] == $y) {
                    $rst[$y." ".$m][] = $k;
                }
            }
        }
    }
    return $rst;
}