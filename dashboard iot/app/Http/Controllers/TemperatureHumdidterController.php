<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Database;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;
use Carbon;
class TemperatureHumdidterController extends Controller
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
    
    'températures' => $request->températures,
    'humidité' => $request->humidité,
        ]; 
        $postRef = $this->database->getReference($this->tablename2)->push($postData);
    if($postRef)
    {
    return redirect('temp_humd');
    }
    
    
    }




    public function index ()
    {
        $mytime = Carbon\Carbon::now();
        $carbon_date = Carbon\Carbon::parse($mytime)->subSecond(5);
        $carbon_date->addHours(1);
    $led =  $this->database->getReference( $this->tablename1)->getValue();
    $air =  $this->database->getReference( $this->tablename2)->getValue();
    $wifi =  $this->database->getReference( $this->tablename9)->getValue();
  

 


    return view('temp_humd.index',compact('led','air','wifi','carbon_date'));
    }
}
