<?php
	$host="bdm25620429.my3w.com";
	$db_user="bdm25620429";
	$db_pass="15116445081wei";
	$db_name="bdm25620429_db";
	$timezone="Asia/Shanghai";
	
	$link=mysql_connect($host,$db_user,$db_pass);
	mysql_select_db($db_name,$link);
	mysql_query("SET names UTF8");
	
	header("Content-Type: text/html; charset=utf-8");
	
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];


	$sql="INSERT INTO liuyi VALUES ('','$name','$email','$message');";
	if(mysql_query($sql))
		echo 1;
	else
	    echo 0;
?>