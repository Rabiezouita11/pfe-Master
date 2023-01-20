<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;
use Kreait\Firebase\Database;
use RealRashid\SweetAlert\Facades\Alert;
class RecentNews extends AbstractWidget
{

    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename1='led';
        $this->tablename2='Air';
        $this->tablename3='water_sensor';
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
        //
        $led =  $this->database->getReference( $this->tablename1)->getValue();
        $air =  $this->database->getReference( $this->tablename2)->getValue();
        $water =  $this->database->getReference( $this->tablename3)->getValue();
        
        return view('widgets.recent_news', [
            'config' => $this->config,
            'led' => $led,
            'air' => $air,
            'water' => $water
        ]);
       
    }
}
