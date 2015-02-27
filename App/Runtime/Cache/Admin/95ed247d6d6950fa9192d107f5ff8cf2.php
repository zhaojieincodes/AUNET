<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<style type="text/css">
    div#header{text-align: center;}
    div#menu {float: left;}
</style>
<body>
<div id="header">
    <h1>社团网后台管理系统</h1>
</div>
<div id="menu">
    <dl>
        <dt>社联大事记</dt>
        <dd><a href="#">大事记列表</a></dd>
        <dd><a href="#">添加预告</a></dd>
    </dl>
    <dl>
        <dt>社团地带活动预告</dt>
        <dd><a href="<?php echo U('/Admin/Forecast/forecast_index');?>">预告列表</a></dd>
        <dd><a href="<?php echo U('/Admin/Forecast/addforecast');?>">添加预告</a></dd>
    </dl>
    <dl>
        <dt>资料上传</dt>
        <dd><a href="<?php echo U('/Admin/Upload/upload_index');?>">上传附件</a></dd>
        <dd><a href="<?php echo U('/Admin/Upload/doc_list');?>">资料列表</a></dd>
    </dl>
    <dl>
        <dt>属性管理</dt>
        <dd><a href="<?php echo U('/Admin/Newsattribute/attr_index');?>">属性列表</a></dd>
        <dd><a href="<?php echo U('/Admin/Newsattribute/addattr');?>">添加属性</a></dd>
    </dl>
    <dl>
        <dt>文章管理</dt>
        <dd><a href="<?php echo U('/Admin/News/news_index');?>">文章列表</a></dd>
        <dd><a href="<?php echo U('/Admin/News/addnews');;?>">添加文章</a></dd>
        <dd><a href="<?php echo U('/Admin/News/trash');;?>">回收站</a></dd>
    </dl>
    <dl>
        <dt>权限管理</dt>
        <dd><a href="<?php echo U('/Admin/Rbac/role');;?>">角色列表</a></dd>
        <dd><a href="<?php echo U('/Admin/Rbac/user');;?>">用户列表</a></dd>
        <dd><a href="<?php echo U('/Admin/Rbac/node');;?>">节点列表</a></dd>

    </dl>
    <dl>
        <dt>分类管理</dt>
        <dd><a href="<?php echo U('/Admin/Category/addcate');;?>">添加分类</a></dd>
        <dd><a href="<?php echo U('/Admin/Category/cate_index');;?>">分类列表</a></dd>
    </dl>
    <dl>
        <dt>账户管理</dt>
        <dd><a href="<?php echo U('/Admin/Rbac/help');;?>">用户帮助</a></dd>
        <dd><a href="<?php echo U('/Admin/Rbac/editpwdbyuser');?>">修改密码</a></dd>
        <dd><a href="<?php echo U('/Admin/Rbac/logout');;?>">退出登录</a></dd>
    </dl>

</div>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form action="<?php echo U('runAddCate');?>" method="post">
    <table class="table">
        <tr>
            <th colspan="2">添加栏目分类</th>
        </tr>
        <tr>
            <td align="right">分类栏目名称</td>
            <td>
                <input type="text" name="name" <?php if($cate['id']): ?>value="<?php echo ($cate["name"]); ?>"<?php endif; ?>/>
            </td>
        </tr>
        <tr>
            <td align="right">排序:</td>
            <td>
                <input type="text" name="sort" <?php if($cate['id']): ?>value="<?php echo ($cate["sort"]); ?>"<?php else: ?>value="100"<?php endif; ?>/>
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <input type="hidden" name="id" <?php if($cate['id']): ?>value="<?php echo ($cate["id"]); ?>"<?php endif; ?>/>
                <input type="hidden" name="pid" <?php if($cate['id']): ?>value="<?php echo ($cate["pid"]); ?>"<?php else: ?>value="<?php echo ($pid); ?>"<?php endif; ?>/>
                <input type="submit" <?php if($cate['id']): ?>value="保存修改"<?php else: ?>value="保存添加"<?php endif; ?>/>
            </td>
        </tr>
    </table>
</form>
</body>
</html>
</body>
</html>