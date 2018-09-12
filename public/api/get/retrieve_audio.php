<?php

require('../../aws/vendor/autoload.php');
require('secret_key.php');

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;

$bucket = 'standup618';
$keyname = 'mattkirby';

$credentials = new Aws\Credentials\Credentials($key, $secret);
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-west-1',
    'credentials' => $credentials,
    'scheme' => 'http'
]);

$query = "SELECT `u`.`id`, `username`, `audio_name`
                FROM `users` AS `u`
                JOIN `audio` AS `a` 
                    ON `a`.`user_id` = `u`.`id` 
                -- doesn't populate newsfeed if user_feedback is empty for user/audio
                -- JOIN `user_feedback` AS `f`
                --     ON `f`.`audio_id` = `a`.`id` 
                ORDER BY `date_added` ASC";

$result = mysqli_query($conn, $query);

if(empty($result)){  
	$output['errors'] = 'database error';
}else { 
	if(mysqli_num_rows($result)>0){
		$output['success'] = true;
		while($row = mysqli_fetch_assoc($result)){
            $audio_key = $row['audio_name'];
            $audio_url = $s3->getObjectUrl($bucket, $audio_key);

            $row['audio_url'] = $audio_url;
            $output['data'][] = $row;
            
            // try {
               
            //     // Get the object.
            //     $audio = $s3->getObjectUrl($bucket, $audio_key);
            
            //     header("Content-Type: {$audio['ContentType']}");
            //     // echo $result['Body'];
                
            // } catch (S3Exception $e) {
            //     echo $e->getMessage() . PHP_EOL;
            // }
        }
        json_encode($output);
	}else {		
		$output['errors'] = 'no data';
	}
}