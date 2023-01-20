<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;
use Kreait\Firebase\Database;
use RealRashid\SweetAlert\Facades\Alert;
use Flasher\Prime\FlasherInterface;
use Carbon;
class Sol extends AbstractWidget
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
    }
    public $reloadTimeout = 10;
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
        $carbon_date = Carbon\Carbon::parse($mytime);
        $carbon_date->addHours(1);
        $led =  $this->database->getReference( $this->tablename1)->getValue();
        $air =  $this->database->getReference( $this->tablename2)->getValue();
        $water =  $this->database->getReference( $this->tablename3)->getValue();
        $vent =  $this->database->getReference( $this->tablename6)->getValue();
        $sol =  $this->database->getReference( $this->tablename5)->getValue();
        $pompe =  $this->database->getReference( $this->tablename4)->getValue();
        return view('widgets.sol', [
            'config' => $this->config,
            'led' => $led,
            'air' => $air,
            'water' => $water,
            'vent' => $vent,
            'sol' => $sol,
            'pompe' => $pompe,
            'carbon_date' => $carbon_date
        ]);
    }
}
