<?php 
mysql_connect('localhost','root','root');//你的数据库用户名和密码
mysql_query('set names utf8'); //设置字符集
mysql_select_db("test");//选择你的数据库
$data['name']=$_POST['name'];
$data['pwd']=$_POST['pwd'];
extract($data);
mysql_close();//关闭连接
 ?>
<?php 
$conn=mysql_connect('localhost','root','root'); 
mysql_query("set names utf8");
// 从表中提取信息的sql语句 
mysql_select_db("test", $conn);
$result = mysql_query("SELECT * FROM user");
while($row = mysql_fetch_array($result))
  {
  // echo $row['name'] . " " . $row['pwd'];
  // echo "<br />";
  }
// 关闭连接 
mysql_close($conn);  
?> 


<!-- 登录后的界面 -->
<html>
<head>
	<meta charset=utf-8>
	<title></title>
	<style type="text/css">
		header,nav,article,footer{
			border: solid; 1px #666;
			padding: 10px;
			margin: 6px;
		}
		header{width: 500px}
		nav{
			float: left;
			width: 60px;
			height: 550px;
		}
		article{
			float: left;
			width: 406px;
			height: 550px;
		}
		footer{
			clear: both;
			width: 500px;
		}
	</style>
</head>
<body>
	<header>导航
	<br/>
	<form align="right">
		<!-- <table border="1"> -->
			<tr>
				<td>
				<?php 
				$data['name']=$_POST['name'];
				$data['pwd']=$_POST['pwd'];
				extract($data);
				$conn=mysql_connect('localhost','root','root'); 
				mysql_query("set names utf8");
				// 从表中提取信息的sql语句 
				mysql_select_db("test", $conn);
				$result = mysql_query("SELECT * FROM user");
				$ifzhanghu=0;
				while($row = mysql_fetch_array($result))
				  {
				  	if ($row['name']==$name&&$row['pwd']==$pwd) {
				  echo $row['nickname'];
				  echo "<br />";
				  $ifzhanghu=1;
				  }
				  }
				  if($ifzhanghu==0){
				  echo "<script> alert ('账号不存在');history.back(); </script>";
				  }
				// 关闭连接 
				mysql_close($conn);  
				?> 
				</td>
				<td>
				<img border="0" src="image/touxiang.png" alt="头像" width="64" height="64">
				</td>
			</tr>
	</form>
	</header>
	<nav>菜单</nav>
	<article>内容
	<p>
		<blink>有钱了买个机械键盘</blink>
	</p>
	<p>想和媳妇去逛趟宜家、麦德龙
	</p>
	<input action="./index.php" method="post"  type="submit" name="button" value="显示名单">
	</article>
	<footer>底部说明
		<audio controls="controls" autoplay="loop">
			<source src="sound/演员.mp3" type="audio/mpeg">
		</audio>
	</footer>
</body>
</html>