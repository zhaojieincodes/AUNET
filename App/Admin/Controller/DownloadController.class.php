<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/2/14
 * Time: 23:01
 */

namespace Admin\Controller;


class DownloadController extends CommonController{
    public function index(){
        $id=I('id',0,'intval');
        downloadFileById($id);
    }
} 