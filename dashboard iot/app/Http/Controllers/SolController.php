<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Database;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class SolController extends Controller
{
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename1='led';
        $this->tablename2='Air';
        $this->tablename3='water_sensor';
        $this->tablename4='pompe';
        $this->tablename5='sol';
        $this->tablename6='ventilateur';
        $this->tablename7='historique_air';
        $this->tablename8='historique_sol';
        $this->tablename9='wifi';

    }
    public function store(Request $request)
    {
    
        $postData = [
    
    'etat' => $request->etat,
    'time' => $request->time,
    'ip_adress' => $request->ip_adress,
        ]; 
        $postRef = $this->database->getReference($this->tablename9)->push($postData);
    if($postRef)
    {
    return redirect('temp_humd');
    }
    
    
    }

public function index(){
    $led =  $this->database->getReference( $this->tablename1)->getValue();
    $air =  $this->database->getReference( $this->tablename2)->getValue();
    $water =  $this->database->getReference( $this->tablename3)->getValue();
    $vent =  $this->database->getReference( $this->tablename6)->getValue();
    $sol =  $this->database->getReference( $this->tablename5)->getValue();
    $pompe =  $this->database->getReference( $this->tablename4)->getValue();


return view('sol.index',compact('led'));


}


}
