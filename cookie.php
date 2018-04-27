<?php
if(isset($_GET['exp']) AND isset($_GET['pid']))
{	
  setcookie("R1ads",$_GET['pid'], time()+(3600*$_GET['exp']), "/", "domain.com");
}
// Create an image, 1x1 pixel in size  $im=imagecreate(1,1);
// Set the background colour  $white=imagecolorallocate($im,255,255,255);
 // Allocate the background colour  imagesetpixel($im,1,1,$white);
 // Set the image type  header("content-type:image/gif");
 // Create a JPEG file from the image  imagejpeg($im);
 // Free memory associated with the image  imagedestroy($im);
 ?>
