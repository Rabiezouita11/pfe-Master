
<?php
use RealRashid\SweetAlert\Facades\Alert;

?>


@forelse ($wifi as $key => $item)
<?php 
$x=$item['time'] ; 

$t=$carbon_date->toDateTimeString();



?>


@if ($x < $t)
<?php
alert()->error('Alert','esp32 disconnect ');

?>











@endif


@empty
 
 @endforelse






<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])
