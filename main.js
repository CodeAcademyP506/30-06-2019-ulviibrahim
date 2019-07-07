
  $(".loginedpage").hide()
  var user =[]
    var namedata=localStorage.getItem("name")
    var surnamedata=localStorage.getItem("surname")
    var passworddata=localStorage.getItem("password")
    var emaildata=localStorage.getItem("email")
    var citiesdata=localStorage.getItem("cities")
    
    var newrow="<tr><td>"+namedata+"</td><td>"+surnamedata+"</td><td>"+emaildata+"</td><td>"+citiesdata+"</td><td> <button type='button' class='btndelete'>Sil</button></td></tr> "

    if(passworddata||emaildata){

      $(".background").hide()
      $(".loginedpage").show()
      $("table").append(newrow)

       
        

       
     }


    $(".btnLogin").click(function(){

     
       var  name=$("#name").val()
       var surname=$("#surname").val()
       var password=$("#password").val()
       var email=$("#email").val()
       var cities= $("select").val()


 var testObject = { 'one': namedata, 'two': surnamedata, 'three': passworddata, 'four':emaildata };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

user.push(retrievedObject)
console.log(user)

if($("#name").val()||$("#email").val()||$("#surname").val()||$("#password").val()!=""){


  localStorage.setItem("name", name)
  localStorage.setItem("surname", surname)
  localStorage.setItem("password", password)
  localStorage.setItem("email", email)
  localStorage.setItem("cities", cities)
  $("table").append( "<tr><td>"+name+"</td><td>"+surname+"</td><td>"+email+"</td><td>"+cities+"</td><td> <button type='button' class='btndelete'>Sil</button></td></tr> ")
  $(".background").hide()
  $(".loginedpage").show()
 $("input").val("")

$("select").val(1) 



 
       
       
    }
    else{
      $("label").addClass("label")
      
      $("#name").css("border-color","red")
      $("input").focus(function(){
        $("input").css("border-color","lightblue")
        $("label").removeClass("label")   

      })
     
      
      console.log(user)
        // $(".formlogin").submit()
           }
   
      

              
     
        
    
    })

    $("table").on("click","button",function(){
         
      localStorage.removeItem("name")
      localStorage.removeItem("surname")
      localStorage.removeItem("password")
      localStorage.removeItem("email")
      localStorage.removeItem("cities")
      $(".background").show()
    $(".loginedpage").hide()


      console.log("veten")

    })