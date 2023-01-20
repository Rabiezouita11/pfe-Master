<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Database;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class WaterController extends Controller
{
    
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename1='led';
        $this->tablename2='Air';
        $this->tablename3='water_sensor';
    }

    public function store(Request $request)
    {
    
        $postData = [
    
    'etat' => $request->etat,

        ]; 
        $postRef = $this->database->getReference($this->tablename3)->push($postData);
    if($postRef)
    {
    return redirect('water_sensor');
    }
    }
    public function index ()
    {
    $led =  $this->database->getReference( $this->tablename1)->getValue();
    $air =  $this->database->getReference( $this->tablename2)->getValue();
    $water =  $this->database->getReference( $this->tablename3)->getValue();


    return view('water_sensor.index',compact('led','air','water'));
    }


































}
