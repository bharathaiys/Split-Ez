const ppl = document.querySelector('#ppl');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
var thirds = document.getElementsByClassName('three');
var fours = document.getElementsByClassName('four');
// var tot1=0.00;
// var tot2=0.00;
// var tot3=0.00;
// var tot4=0.00;
var t=0;
let cur=3;

var user4="Name 4";
up.addEventListener("click",function(){
    cur=ppl.innerHTML;
    cur++;
    if(cur<=4)
        ppl.innerHTML=cur;   
    else{ 
       ppl.innerHTML=4;
    }
        
    
    if(ppl.innerHTML==2)
        {
            document.getElementById("nm3").innerHTML="";
            document.getElementById("nm4").innerHTML="";
            for(four of fours)
                four.setAttribute("src","img/blnk.png");
            
        }
    if(ppl.innerHTML==3)
        {   
            document.getElementById("nm3").innerHTML="name 3";
            //'<input class="ename"  type="text" id="name4" placeholder="Enter Name 3"> '
            document.getElementById("nm4").innerHTML="";
            for(four of fours)
                four.setAttribute("src","img/blnk.png");
            for(third of thirds)
                third.setAttribute("src","img/cross.png");

            var nam3 = document.createElement("input");
            nam3.setAttribute("id","name3");
            nam3.setAttribute("class","ename")
            nam3.setAttribute("placeholder","Enter Name 3");
            nam3.setAttribute("autocomplete","off");
            nam3.setAttribute("type","text");
            document.getElementById("form").append(nam3);
        }
       
    else if(cur==4){
        document.getElementById("nm4").innerHTML="name 4";
        for(four of fours)
                four.setAttribute("src","img/cross.png");
        
        var nam4 = document.createElement("input");
        nam4.setAttribute("id","name4");
        nam4.setAttribute("class","ename")
        nam4.setAttribute("placeholder","Enter Name 4");
        nam4.setAttribute("autocomplete","off");
        nam4.setAttribute("type","text");
        document.getElementById("form").append(nam4);

        var n4=document.getElementById("name4");
        n4.addEventListener("focusout",function(){
        user4 = n4.value;
        document.getElementById("nm4").innerHTML = user4;
    })

    }
        
    
    var n3=document.getElementById("name3");
    n3.addEventListener("focusout",function(){
        var x = n3.value;
        document.getElementById("nm3").innerHTML = x;
    })

    });

    // document.getElementById("thre").setAttribute("src","");
    // document.getElementsByClassName("three")[2].setAttribute("src","");
    // document.querySelector('.three').innerHTML="";


down.addEventListener("click",function(){
    let cur=ppl.innerHTML;
    cur--;
    if(cur>=2)
        ppl.innerHTML=cur;   
    else{
        cur=2;
        ppl.innerHTML=2;
    }
        

    if(cur==2)
        {
            document.getElementById("nm3").innerHTML="";
            document.getElementById("nm4").innerHTML="";
            for(third of thirds)
                third.setAttribute("src","img/blnk.png");
            for(four of fours)
                four.setAttribute("src","img/blnk.png");
            document.getElementById("name3").remove()
        }
    else if(cur==3)
        {
            document.getElementById("nm3").innerHTML="name 3";
            document.getElementById("nm4").innerHTML="";
            for(four of fours)
                four.setAttribute("src","img/blnk.png");
            document.getElementById("name4").remove()
        }
       
    else if(cur==4)
        document.getElementById("nm4").innerHTML="name 4";
        
    });



    var n1=document.getElementById("name1");
    var user1="Name 1";
    n1.addEventListener("focusout",function(){
        user1= n1.value;
        document.getElementById("nm1").innerHTML = user1;
    })

    var n2=document.getElementById("name2");
    var user2="Name 2";
    n2.addEventListener("focusout",function(){
        user2 = n2.value;
        document.getElementById("nm2").innerHTML = user2;
    })

    var n3=document.getElementById("name3");
    var user3="Name 3";
    n3.addEventListener("focusout",function(){
        user3 = n3.value;
        document.getElementById("nm3").innerHTML = user3;
    })

    // document.querySelector('.three').innerHTML="";
    var tenclick=false;
    var twenclick=false;
    var thirtclick=false;
    var num=0;

    document.getElementById("10btn").addEventListener("click",function(){
        
        this.setAttribute("src","img/10in.png");
        this.setAttribute("class","btnin");
        if(twenclick==true)
        {
            for(var i=11;i<=20;i++)
            {
                document.getElementById("row"+i).remove();
            }
            var twen=document.getElementById("20btn");
            twen.setAttribute("src","img/20btn.png");
            twen.setAttribute("class","btnclass");
        }

        if(thirtclick==true)
        {
            for(var i=11;i<=30;i++)
            {
                document.getElementById("row"+i).remove();
            }
            var thirt=document.getElementById("30btn");
            thirt.setAttribute("src","img/30btn.png");
            thirt.setAttribute("class","btnclass");
        }
        
        
        if(tenclick==false && twenclick==false && thirtclick==false)
        {
            for(var i=2;i<=10;i++)
            {
                var n=document.createElement("div");
                n.setAttribute("class","itmss blbig");
                n.setAttribute("id","row"+i);
                
                n.innerHTML="   <div style='padding-top: 23px; width: 142px; text-align: center;'>"+i+".</div> <form action=''>    <input  class='costbx' type='text' id='in"+i+"' placeholder='0.00'>  </form> <img src='img/cross.png' id='c"+i+"1' class='cross one' alt='' >  <img src='img/cross.png' class='cross two' id='c"+i+"2' alt=''>    <img src='img/cross.png' class='cross three' id='c"+i+"3' alt=''>    <img src='img/blnk.png' id='c"+i+"4' class='cross four' alt='' > ",i;
                document.getElementById("table").appendChild(n);    
            }
            // var twentys=document.getElementsByClassName("twenty");
            // for(twenty of twentys)
            // {
            //     twenty.remove();
            // }
             
        }
        tenclick=true;
        num=10;
        twenclick=false;
        thirtclick=false;
        console.log("cur is: "+cur);

        if(ppl.innerHTML=="4"){
            for(four of fours)
            four.setAttribute("src","img/cross.png");
        }

        if(ppl.innerHTML=="2"){
            for(third of thirds)
            third.setAttribute("src","img/blnk.png");
        }

        var crs=document.getElementsByClassName("cross");
        for(cr of crs){
        cr.addEventListener("click",function(){
            if(this.classList.contains("tick"))
            {
                this.setAttribute("src","img/cross.png");
                this.classList.remove("tick");
                this.classList.add("cross");
            }
            else
            {
                this.setAttribute("src","img/tick.png");
                this.classList.remove("cross");
                this.classList.add("tick");
            }
        })
        
    }
        

    });

    
    document.getElementById("20btn").addEventListener("click",function(){
        
        this.setAttribute("src","img/20in.png");
        this.setAttribute("class","btnin");
        if(tenclick==true)
        {
            for(var i=11;i<=20;i++)
            {
                var n=document.createElement("div");
                n.setAttribute("class","itmss blbig");
                n.setAttribute("id","row"+i);
                
                n.innerHTML="   <div style='padding-top: 23px; width: 142px; text-align: center;'>"+i+".</div> <form action=''>    <input  class='costbx' type='text' id='in"+i+"' placeholder='0.00'>  </form> <img src='img/cross.png' id='c"+i+"1' class='cross one' alt='' >  <img src='img/cross.png' class='cross two' id='c"+i+"2' alt=''>    <img src='img/cross.png' class='cross three' id='c"+i+"3' alt=''>    <img src='img/blnk.png' id='c"+i+"4' class='cross four' alt='' > ",i;
                document.getElementById("table").appendChild(n);    
            }

            var ten=document.getElementById("10btn");
            ten.setAttribute("src","img/10btn.png");
            ten.setAttribute("class","btnclass");
           
        }

        if(thirtclick==true)
        {
            for(var i=21;i<=30;i++)
            {
                document.getElementById("row"+i).remove();
            }
            var thirt=document.getElementById("30btn");
            thirt.setAttribute("src","img/30btn.png");
            thirt.setAttribute("class","btnclass");
            
        }
        if(tenclick==false &&  thirtclick==false && twenclick==false)
        {
            for(var i=2;i<=20;i++)
            {
                var n=document.createElement("div");
                n.setAttribute("class","itmss blbig");
                n.setAttribute("id","row"+i);
                n.innerHTML="   <div style='padding-top: 23px; width: 142px; text-align: center;'>"+i+".</div> <form action=''>    <input  class='costbx' type='text' id='in"+i+"' placeholder='0.00'>  </form> <img src='img/cross.png' id='c"+i+"1' class='cross one' alt='' >  <img src='img/cross.png' class='cross two' id='c"+i+"2' alt=''>    <img src='img/cross.png' class='cross three' id='c"+i+"3' alt=''>    <img src='img/blnk.png' id='c"+i+"4' class='cross four' alt='' > ",i;
                document.getElementById("table").appendChild(n);  
            }
            
            
        }
        twenclick=true;
        num=20;
        tenclick=false;
        thirtclick=false;

        if(ppl.innerHTML=="4"){
            for(four of fours)
            four.setAttribute("src","img/cross.png");
        }

        if(ppl.innerHTML=="2"){
            for(third of thirds)
            third.setAttribute("src","img/blnk.png");
        }
        

        var crs=document.getElementsByClassName("cross");
        for(cr of crs){
        cr.addEventListener("click",function(){
            if(this.classList.contains("tick"))
            {
                this.setAttribute("src","img/cross.png");
                this.classList.remove("tick");
                this.classList.add("cross");
            }
            else
            {
                this.setAttribute("src","img/tick.png");
                this.classList.remove("cross");
                this.classList.add("tick");
            }
        })
        
    }
        
    });
    
    
    document.getElementById("30btn").addEventListener("click",function(){
        this.setAttribute("src","img/30in.png");
        this.setAttribute("class","btnin");
        if(tenclick==true)
        {
            for(var i=11;i<=30;i++)
            {
                var n=document.createElement("div");
                n.setAttribute("class","itmss blbig");
                n.setAttribute("id","row"+i);
                
                n.innerHTML="   <div style='padding-top: 23px; width: 142px; text-align: center;'>"+i+".</div> <form action=''>    <input  class='costbx' type='text' id='in"+i+"' placeholder='0.00'>  </form> <img src='img/cross.png' id='c"+i+"1' class='cross one' alt='' >  <img src='img/cross.png' class='cross two' id='c"+i+"2' alt=''>    <img src='img/cross.png' class='cross three' id='c"+i+"3' alt=''>    <img src='img/blnk.png' id='c"+i+"4' class='cross four' alt='' > ",i;
                document.getElementById("table").appendChild(n);    
            }

            var ten=document.getElementById("10btn");
            ten.setAttribute("src","img/10btn.png");
            ten.setAttribute("class","btnclass");
           
        }

        if(twenclick==true)
        {
            for(var i=21;i<=30;i++)
            {
                var n=document.createElement("div");
                n.setAttribute("class","itmss blbig");
                n.setAttribute("id","row"+i);
                
                n.innerHTML="   <div style='padding-top: 23px; width: 142px; text-align: center;'>"+i+".</div> <form action=''>    <input  class='costbx' type='text' id='in"+i+"' placeholder='0.00'>  </form> <img src='img/cross.png' id='c"+i+"1' class='cross one' alt='' >  <img src='img/cross.png' class='cross two' id='c"+i+"2' alt=''>    <img src='img/cross.png' class='cross three' id='c"+i+"3' alt=''>    <img src='img/blnk.png' id='c"+i+"4' class='cross four' alt='' > ",i;
                document.getElementById("table").appendChild(n);    
            }
            var twen=document.getElementById("20btn");
            twen.setAttribute("src","img/20btn.png");
            twen.setAttribute("class","btnclass");
            
        }
        if(thirtclick==false && twenclick==false && tenclick==false)
        {
            for(var i=2;i<=30;i++)
            {
                var n=document.createElement("div");
                n.setAttribute("class","itmss blbig");
                n.setAttribute("id","row"+i);
                n.innerHTML="  <div style='padding-top: 23px; width: 142px; text-align: center;'>"+i+".</div> <form action=''>    <input  class='costbx' type='text' id='in"+i+"' placeholder='0.00'>  </form> <img src='img/cross.png' id='c"+i+"1' class='cross one' alt='' >  <img src='img/cross.png' class='cross two' id='c"+i+"2' alt=''>    <img src='img/cross.png' class='cross three' id='c"+i+"3' alt=''>    <img src='img/blnk.png' id='c"+i+"4' class='cross four' alt='' > ",i;
                document.getElementById("table").appendChild(n);  
            }
            
            
        }
        thirtclick=true;
        num=30;
        tenclick=false;
        twenclick=false;
        
        if(ppl.innerHTML=="4"){
            for(four of fours)
            four.setAttribute("src","img/cross.png");
        }

        if(ppl.innerHTML=="2"){
            for(third of thirds)
            third.setAttribute("src","img/blnk.png");
        }

        var crs=document.getElementsByClassName("cross");
        for(cr of crs){
        cr.addEventListener("click",function(){
            if(this.classList.contains("tick"))
            {
                this.setAttribute("src","img/cross.png");
                this.classList.remove("tick");
                this.classList.add("cross");
            }
            else
            {
                this.setAttribute("src","img/tick.png");
                this.classList.remove("cross");
                this.classList.add("tick");
            }
        })
        
    }
    });

    

    document.getElementById("submit").addEventListener("click",function(){
        let tot1=0.0;
        let tot2=0.0;
        let tot3=0.0;
        let tot4=0.0;
        console.log("cur is:"+cur);
        console.log("num is:"+num);

        for(var i=1;i<=num;i++){
            let count=0;
            var inval=document.getElementById(`in${i}`).value;   
            for(var j=1;j<=cur;j++){
                    if(document.getElementById(`c${i}${j}`).classList.contains("tick")){
                        // console.log(`c${}`+"1");
                        count++;
                        
                    }
            }
            console.log("count of "+i+" ="+count);
            for(var j=1;j<=cur;j++){
                    var c=document.getElementById(`c${i}${j}`)
                    if(c.classList.contains("tick")){
                        if(c.classList.contains("one"))
                            tot1=tot1+(Number(inval)/count);
                        else if(c.classList.contains("two"))
                            tot2=tot2+(Number(inval)/count);
                        else if(c.classList.contains("three"))
                            tot3=tot3+(Number(inval)/count);
                        else if(c.classList.contains("four"))
                            tot4=tot4+(Number(inval)/count);
                    }
    
                }
                
                if(ppl.innerHTML==2){
                    document.getElementById("res1").innerHTML=user1+": "+tot1.toFixed(2);
                    document.getElementById("res2").innerHTML=user2+": "+tot2.toFixed(2);

                }
                else if(ppl.innerHTML==3){
                    document.getElementById("res1").innerHTML=user1+": "+tot1.toFixed(2);
                    document.getElementById("res2").innerHTML=user2+": "+tot2.toFixed(2);
                    document.getElementById("res3").innerHTML=user3+": "+tot3.toFixed(2);
                }

                else if(ppl.innerHTML==4){
                    document.getElementById("res1").innerHTML=user1+": "+tot1.toFixed(2);
                    document.getElementById("res2").innerHTML=user2+": "+tot2.toFixed(2);
                    document.getElementById("res3").innerHTML=user3+": "+tot3.toFixed(2);
                    document.getElementById("res4").innerHTML=user4+": "+tot4.toFixed(2);
                }
                
               
                console.log("tot1="+tot1);
                console.log("tot2="+tot2);
                console.log("tot3="+tot3);
                console.log("tot4="+tot4);
            }
    });

    // if(this.classList.contains("one")){
                        //     // console.log("from in:"+this.id);
                        //     onec=true
                        // } 
                        // if(this.classList.contains("two")){
                        //     // console.log("from in:"+this.id);
                        //     twoc=true;
                        // }
                        // if(this.classList.contains("three")){
                        //     // console.log("from in:"+this.id);
                        //     threec=true;
                        // }
                        // tot1=tot1+inval/count;
                        
                        // else if(this.id==`c${i}2`){
                        //     tot2=tot2+inval;
                        //     console.log("tot2: "+tot2);
                        // }
                        // else if(this.id==`c${i}3`){
                        //     tot3=tot3+inval;
                        //     console.log("tot3: "+tot3);
                        // }
                            // console.log(this.id+"j is"+j);
                            // console.log(inval)
        
    
    