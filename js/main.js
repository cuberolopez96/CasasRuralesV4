(function(){
    $(document).ready(function(){
       if(window.innerWidth < 650){
           var active = false; $('#icon_menu').click(function(){
            if(active == false){
                $('#nav').show(1000);
                active=true;
            }else{
                $('#nav').hide(1000);
                active=false;
            }
        })
       }
    })
})()
