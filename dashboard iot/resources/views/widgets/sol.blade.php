
<?php
use RealRashid\SweetAlert\Facades\Alert;

?>
@forelse ($sol as $key => $item)
<?php
$x=$item['humidité'];
$y=$carbon_date->toDateTimeString();

  ?>

 

@if ($x < "30")
<?php
/* alert::image('Alert!','humidité low','images\temp_high.jpg','250px','200px','temperature')->autoClose(10000)->showConfirmButton('Confirm', 'red')->autoClose(5000);
 */
 alert()->error('Alert','humidité low');
?>


@endif



<div class="row">

    <div class="col-md-6 col-xl-3 text-center">
        <div class="mt-5" dir="ltr">
        <img src="images\humditer11.jpg"  widh='100px' height='100px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:20px" > humidité <br>{{$item['humidité']}}%</h5>
        </div>
    </div><!-- end col-->
    <div class="col-md-6 col-xl-5 text-center">
        <div class="mt-5" dir="ltr">
        <img src="images\TIME2.gif"  widh='100px' height='100px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:20px" > {{$y}} </h5>
        </div>
    </div><!-- end col-->
    <br>
    @empty
 
 @endforelse
    @forelse ($pompe as $key => $item)
    <?php
$y=$item['etat'];
  ?>
@if ($y == "ON")
    <div class="col-md-6 col-xl-4 text-center">
        <div class="mt-5" dir="ltr">
        <img src="images\pompe.gif"  widh='100px' height='100px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:20px" > Pompe <br>{{$item['etat']}}</h5>
        </div>
    </div><!-- end col-->
@endif  
@if ($y == "OFF")
    <div class="col-md-6 col-xl-4 text-center">
        <div class="mt-5" dir="ltr">
        <img src="images\pompestop.png"  widh='100px' height='100px' class="rounded mx-auto d-block" alt="...">
            <h5 class="text-muted-red" style="font-size:20px" > Pompe <br>{{$item['etat']}}</h5>
        </div>
    </div><!-- end col-->
@endif  
    @empty
 
 @endforelse
 
 <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])