<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $news=D('news')->where(array('del'=>0))->order("time desc")->limit(4)->select();
        $this->news=$news;
        $this->display();
    }
}