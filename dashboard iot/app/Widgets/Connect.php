<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;
use Kreait\Firebase\Database;
use RealRashid\SweetAlert\Facades\Alert;
use Flasher\Prime\FlasherInterface;
use Carbon;

class Connect extends AbstractWidget
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
    public $reloadTimeout =1;
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $mytime = Carbon\Carbon::now();
        $carbon_date = Carbon\Carbon::parse($mytime)->subSecond(5);
        $carbon_date->addHours(1);
        $wifi =  $this->database->getReference( $this->tablename9)->getValue();

        return view('widgets.connect', [
            'config' => $this->config,
            'wifi' => $wifi,
            'carbon_date' => $carbon_date
        ]);
    }
}
