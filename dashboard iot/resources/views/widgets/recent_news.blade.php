
<?php
use RealRashid\SweetAlert\Facades\Alert;

?>
@forelse ($water as $key => $item)
                    <div class="container-fluid">
                           <h2></h2>
<?php
$x=$item['etat'];
?>
@if ($x == "Empty")
<?php
toast('Water Level: Empty','error')->position('top');
?>
@endif
@if ($x == "Low")
<?php
toast('Water Level: Low <br> il ya 10 second ','warning')->position('top');
?>
@endif


<div class="container-fluid">
 <img src="images\water.jpg" style="margin-left:-100px;" widh='300px' height='300px' class="rounded mx-auto d-block" alt="...">
 <center><h5 class="text-muted-red"  style="font-size:30px " >Water Level({{$item['etat']}})</h5></center>
 


 @empty
 
 @endforelse
 @include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])
