<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Database;
use Illuminate\Http\Request;
use Carbon;
class IotController extends Controller
{
  /*  /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename='led';
    }


    public function index ()
    {
        $mytime = Carbon\Carbon::now();
        $carbon_date = Carbon\Carbon::parse($mytime);
        $carbon_date->addHours(1);
        $led =  $this->database->getReference( $this->tablename)->getValue();
        flashy()->success('Welcome.', 'http://your-awesome-link.com');
return view('iot.index',compact('led','carbon_date'));

    }
}
