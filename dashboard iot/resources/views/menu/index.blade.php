
                    <div id="sidebar-menu">

<ul class="metismenu" id="side-menu">

<li>
        <a href="{{url('index')}}">
            <i class="fas fa-list-alt "></i>
            <span> Acceuil </span>
        </a>
    </li>
   
    <li>
        <a href="{{url('water_sensor')}}">
            <i class="fas fa-list-alt "></i>
            <span>  Water sensor </span>
        </a>
    </li>
   

    @forelse ($led as $key => $item)
    <li>
        <a href="{{url('lampe/'.$key)}}">
            <i class="fas fa-list-alt "></i>
            <span>  lampe </span>
        </a>
    </li>
    @empty

@endforelse
    <li>
        <a href="{{url('temp_humd')}}">
            <i class="fas fa-list-alt "></i>
            <span>  températures humidité </span>
        </a>
    </li>
    <li>
        <a href="{{url('sol_humidité')}}">
            <i class="fas fa-list-alt "></i>
            <span>  humidité du sol </span>
        </a>
    </li>
    
   
   
    
</ul>

</div>