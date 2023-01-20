<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Database;
use Illuminate\Http\Request;
use Flasher\Prime\FlasherInterface;
class LampeController extends Controller
{
  
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename='led';
    }






    /* public function index ()
    {
        $led =  $this->database->getReference( $this->tablename)->getValue();

return view('lampe.index',compact('led'));
    } */
    
public function store(Request $request)
{

    $postData = [

'status' => $request->status,

    ]; 
    $postRef = $this->database->getReference($this->tablename)->push($postData);
if($postRef)
{
return redirect('lampe');
}


}


public function index($id){
    $led =  $this->database->getReference($this->tablename)->getValue();
$key=$id;
$reference = $this->database->getReference($this->tablename)->getChild($key)->getValue();
if($reference)
{
return view('lampe.index',compact('reference','led','key'));
}
}



public function update(Request $request ,$id)
{
$key = $id;
$status =  $request->status;
    $updateData = [

        'status' => $request->status,
        
            ]; 
   $x= $this->database->getReference($this->tablename.'/'.$key)->update($updateData);
if($x and $status == 'ON' )
{
    flashy()->success('LAMPE ON.', 'http://localhost:8000/lampe/-MpaBcdQ7jgeOBl67F6G');
    return redirect('lampe/-MpaBcdQ7jgeOBl67F6G');
}
else
{
    flashy()->mutedDark('LAMPE OFF.', 'http://localhost:8000/lampe/-MpaBcdQ7jgeOBl67F6G');
    return redirect('lampe/-MpaBcdQ7jgeOBl67F6G');
}


}
}