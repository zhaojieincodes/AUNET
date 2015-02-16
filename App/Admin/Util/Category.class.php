<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/2/9
 * Time: 22:58
 */

namespace Admin\Util;

/*
 * 无限级分类函数
 */
class Category {
    /*
     * 组合一维数组
     */
    static public function unlimitedForLevel($cate,$html='--',$pid=0,$level=0){
        $arr=array();
        foreach($cate as $v){
            if($v['pid']==$pid){
                $v['level']=$level+1;
                $v['html']=str_repeat($html,$level);
                $arr[]=$v;
                $arr=array_merge($arr,self::unlimitedForLevel($cate,$html,$v['id'],$level+1));
            }
        }
        return $arr;
    }
    /*
     * 组合多维数组
     */
    static public function unlimitedForLayer($cate,$name='child',$pid=0){
        $arr=array();
        foreach($cate as $v) {
            if($v['pid']==$pid){
                $v[$name]=self::unlimitedForLayer($cate,$name,$v['id']);
                $arr[]=$v;
            }
        }
        return $arr;
    }
    /*
     * 获得所有父级分类
     */
    static public function getParents($cate,$id){
        $arr=array();
        foreach($cate as $v){
            if($v['id']==$id){
                $arr[]=$v;
                $arr=array_merge(self::getParents($cate,$v['pid']),$arr);
            }
        }

        return $arr;
    }
    /*
     * 传递父级ID,返回子级信息
     */
    static public function getChild($cate,$pid){
        $arr=array();
        foreach($cate as $v){
            if($v['pid']==$pid){
                $arr[]=$v;
                $arr=array_merge($arr,self::getChild($cate,$v['id']));
            }
        }
        return $arr;
    }
    /*
     * 传递父级ID,返回子级所有ID数组
     */
    static public function getChildsId($cate,$pid){
        $arr=array();
        foreach($cate as $v){
            if($v['pid']==$pid){
                $arr[]=$v['id'];
                $arr=array_merge($arr,self::getChild($cate,$v['id']));
            }
        }
        return $arr;
    }
} 