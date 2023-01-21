let arr=[];
let id=1;





// code after user click on the submit button

let submitBtn=document.getElementById("sb")
console.log(submitBtn)
submitBtn.addEventListener("click", function(event){
      event.preventDefault()
    });

submitBtn.addEventListener("click",selectInput);


function selectInput()
{

    let obj={};

    let input=true;
    let error=document.getElementsByClassName("error-para")[0];
    let name=document.forms["myForm"]["fname"].value;

    // let nameRegx=new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
    let nameRegx=new RegExp("^(?=.*[a-z A-Z])");
    if(nameRegx.test(name) && name.length>2)
    {
        obj["id"]=id;
        obj["name"]=name;
    }    
    else
    {
        input=false;
        if(name.length>2)
        error.innerHTML="----Name should at least be 2 letter word";
        if(nameRegx.test(name)!=true)
        error.innerHTML="----invalid name format";

    }
   // [{id: 1, name: “Abhishek Kumar”, email: “myemail@gmail.com”, password: “Abhishek123#!” }
    let email=document.forms["myForm"]["femail"].value;
    // let regex=/^([a-zA-Z\.-]+)([0-9])@([a-z]).([a-z])$/;
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(email))
    {
        let flag=false;
        for(let i in arr)
        {
            if(arr[i].email==email)
            {
                flag=true;
            }
        }
        if(flag==true)
        {
            error.innerHTML+="---repeatation  of email is not allow"
            input=false;
        }
        else{
        obj["email"]=email;
        }
    }
    else
    {
        input=false;
        error.innerHTML+="----2.email enter properly";
    }

    let pass=document.forms["myForm"]["fpass"].value;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // const lowerCase=new RegExp("(?=.*[a-z])");
    // const upperCase=new RegExp("(?=.*[A-Z])");
    // const number=new RegExp("(?=.*[0-9])");
    // const specialChar=new RegExp("(?=.*[!@#\$%\^&\*])");
    // const eightChar=new RegExp("(?=.*[8,])");

    if(strongRegex.test(pass)!=true && pass==name && pass==email)   
    {
        input=false;
        error.innerHTML+="----3.password format is incorrect";
    }
  

    let cpass=document.forms["myForm"]["fcpass"].value;

    if(pass==cpass)
    {
        obj["password"]=cpass;
    }
    else
    {
        input=false;
        error.innerHTML+="----4.password mismatch";;
    }
    if(input==true)
    {
        
        arr.push(obj);
        id++;
    }
    else
    {
        error.innerHTML+="-----ENTER AGAING YOU MADE SOME MISTAKE";
    }



    location.replace("login.html")

  
}

//now we store the entered value.in array of object



//this code for login page


// console.log(lfname)
// console.log(lfpass)


let submitBtn2=document.getElementById("btn-class");
console.log(submitBtn2)

submitBtn2.addEventListener("click", function(event){
    console.log("Sj")
      event.preventDefault()
    });

    submitBtn2.addEventListener("click",loginPage)

function loginPage()
{
    console.log("sh")
    let lfname=document.forms["myForm2"]["lffemail"].value;
    let lfpass=document.forms["myForm2"]["lffpass"].value;
    console.log(lfname)
    console.log(lfpass)
}
