
<?php
use RealRashid\SweetAlert\Facades\Alert;

?>


@forelse ($air as $key => $item)
<?php
$x=$item['tempÃ©ratures'];   
$t=$carbon_date->toDateTimeString();

                
  ?>

 

@if ($x > "30" )
<?php
alert::image('Alert!','temperature high ','images\temp_high.jpg','250px','200px','temperature')->autoClose(10000)->showConfirmButton('Ok', 'red')->autoClose(5000);
?>


@endif
@if ($x <= "20")
<?php
alert::image('Alert!','temperature low   ','images\temp_low.jpg','250px','200px','temperature')->autoClose(10000)->showConfirmButton('Ok', 'red')->autoClose(5000);

?>
@endif

 
<div class="row">
    <div class="col-md-5 col-xl-5 text-center">
        <div class="mt-1" dir="ltr">
   
        <img src="images\temp22.jpg"  widh='100px' height='120px' class="rounded mx-auto d-block" alt="...">

            <h5 class="text-muted-red"  style="font-size:30px " >  températures {{$item['tempÃ©ratures']}}°C</h5>
        </div>
       
    </div><!-- end col-->
    <div class="col-md-6 col-xl-5 text-center">
        <div class="mt-1" dir="ltr">
        <img src="images\humditer11.jpg"  widh='100px' height='120px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:30px" > humidité <br>{{$item['humiditÃ©']}}%</h5>
        </div>
    </div><!-- end col-->
    <div class="col-md-6 col-xl-5 text-center">
        <div class="mt-1" dir="ltr">
        <img src="images\time.gif"  widh='100px' height='120px' class="rounded mx-auto d-block" alt="...">

            <h5 class="text-muted-red"  style="font-size:30px " >   {{$t}}</h5>
        </div>
       
    </div><!-- end col-->
    <br>
    @empty
 
 @endforelse
    @forelse ($vent as $key => $item)
    <?php
$y=$item['etat'];
  ?>
@if ($y == "ON")
    <div class="col-md-6 col-xl-5 text-center">
        <div class="mt-1" dir="ltr">
        <img src="images\vent.gif"  widh='100px' height='120px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:30px" > Ventilateur <br>{{$item['etat']}}</h5>
        </div>
    </div><!-- end col-->
@endif  
@if ($y == "OFF")
    <div class="col-md-6 col-xl-5 text-center">
        <div class="mt-1" dir="ltr">
        <img src="images\stopvent.png"  widh='100px' height='120px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:30px" > Ventilateur <br>{{$item['etat']}}</h5>
        </div>
    </div><!-- end col-->
   
@endif  
    @empty
 
 @endforelse
  
 <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])