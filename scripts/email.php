<?php  
 $message = '';  
 $error = '';  
 if(isset($_POST["submit"]))  
 {  
      
    if(file_exists('../scripts/Dates/opinie.json'))  
    {  
        $current_data = file_get_contents('../scripts/Dates/opnie.json');  
        $array_data = json_decode($current_data, true);  
        $extra = array(  
                'name'               =>     $_POST['name'],  
                'description'          =>     $_POST["description"]
        );  
        $array_data[] = $extra;  
        $final_data = json_encode($array_data);  
        if(file_put_contents('../scripts/Dates/oinie.json', $final_data))  
        {  
                $message = "<label>File Appended Success fully</p>";  
        }  
    }  
    else  
    {  
        $error = 'JSON File not exits';  
    }  
        
 }  
 ?>  