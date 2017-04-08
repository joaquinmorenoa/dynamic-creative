<?php
header("content-type: application/javascript");

if(isset($_COOKIE['R1ads']) AND is_numeric($_COOKIE['R1ads']) AND isset($_GET['feed']))
{
	$pid = $_COOKIE['R1ads'];

	if (($handle = fopen("demo_feed.csv", "r")) !== FALSE) {
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) 
		{
			if($data[0] == $pid)
			{
				$json = array("id"=>$data[0],"title"=>$data[1],"description"=>$data[2],"image"=>$data[3],"price"=>$data[4]);
				echo 'R1DynamicAd.R1GetJSON(' . json_encode($json) . ');';

			}
		}
		fclose($handle);
	}
}
else
{
	echo "R1DynamicAd.R1GenerateAd({'error':'".$_COOKIE['R1ads']."'})";
}







?>
