<?php 
$file = file_get_contents('../input.txt');

if($file !== ''){
    try{
        $arr = explode("\r", $file);
        $a = array_map('trim', explode(',', $arr[0]));
        $b = array_map('trim', explode(',', $arr[1]));

        $result = array_intersect($a, $b);
        print_r($result);
    }catch(Exception $e){
        echo "Error Data";
    }
    
}else{
    echo "no data found";
}
?>