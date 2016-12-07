<?php 
$data['name']=$_POST['name'];
$data['pwd']=$_POST['pwd'];
$data['checkpwd']=$_POST['checkpwd'];
extract($data);
if ($checkpwd==$pwd) {
	echo $checkpwd;
	echo $pwd;
	mysql_connect('localhost','root','root');//你的数据库用户名和密码
	mysql_query('set names utf8'); //设置字符集
	mysql_select_db("test");//选择你的数据库
	// $mysql_database="test"; // 数据库的名字

	//
	extract($data);
	// $name = $data['name'];
	// $pwd = $data['pwd'];
	// compact('name', 'pwd');

	$sql="INSERT INTO user(name,pwd,checkpwd) VALUES ('$name','$pwd','$checkpwd');";
	echo "($sql)";
	// var_dump($sql);
	// exit();
	//"这里是你的sql语句";
	mysql_query($sql);

	echo mysql_error();
	// exit();
	// mysql_query($sql);//发送sql语句
	mysql_close();//关闭连接
	header('LOCATION:index.html');
}
else
{
	echo "<script>alert('两次输入密码不一致');history.back();</script>";
	// header('LOCATION:AddUser.html');
}
 ?>
