<?php 
$file = file_get_contents('../input.txt');

if($file !== ''){
    try{
        $arr = explode("\r", $file);
        
        foreach($arr as $row){
            $a[] = array_map('trim', explode(',', $row));
        }
        
        $result = call_user_func_array('array_intersect',$a);
        
        print_r($result);
    }catch(Exception $e){
        echo "Error Data";
    }
    
}else{
    echo "no data found";
}
?>