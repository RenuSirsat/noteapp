function app(){

    var today = new Date();
    
    
    
    var date = today.getDate();
    
    var montharr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    var month = montharr[today.getMonth()];
    
    var year = today.getFullYear();
    
    
    
    $("#date").text(date + " " + month + "," + " " + year);
    
    
    
    var h = today.getHours();
    
    var m = today.getMinutes();
    
    var s = today.getSeconds();
    
    var ampm = "";
    
    
    
    if(h<12){
    
        ampm = "AM";
    
    }
    
    if(h>11){
    
        ampm = "PM";
    
    }
    
    
    
    if(h>12){
    
     h = h%12;
    
    }
    
    if(h<10){
    
        h = "0" + h;
    
    }
    
    if(m<10){
    
        m = "0" + m;
    
    }
    
    if(s<10){
    
        s = "0" + s;
    
    }
    
    
    
    $("#time").text(h + ":" + m + ":" + s + " " + ampm);
    
    
    
    setTimeout(app, 1000);
    
    
    
    $(function(){
    
       $("#add").on("click",function(){
    
           var val = $("#input").val();
    
           if(val !== ""){
    
               var task = $("<li></li><br>").text(val + " -");
    
               $(task).append("<button class='rem'>X</button>");
    
               $(task).append(h + ":" + m + ":" + s + " " + ampm)
    
               $("#mylist").append(task);
    
               $("#input").val("");
    
               $(".rem").on("click",function(){
    
                   $(this).parent().remove();
    
               });
    
           }
    
       });
    
    
    
    });
    
    }
    
    function clickDark(){
    
        isDark = !isDark;
    
        
    
        showDark();
    
    }
    
    var isDark = false;
    
    function showDark(){
    
        document.body.style.background = "grey";
    
        document.body.style.color = "black";
    
        $("h4").text("•Dark Mode");
    
        
    
        if (isDark === true){
    
        document.body.style.background="black";
    
        document.body.style.color="grey";
    
        $("h4").text("•Light Mode");
    
        }
    
    }
    
    