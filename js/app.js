let taskinput=document.querySelector('.col-8')
let button=document.querySelector('.col-9')
let show=document.querySelector('.container')
let btn=document.querySelectorAll('botton')
let Arry=[];
let rendertask= () =>{
let newtask={
    task:taskinput.value

};

Arry.push(newtask);

showtask()
taskinput.value=""

}


let showtask=  ()=>{
    show.innerHTML="";
    Arry.forEach((elment,index)=>{
        show.innerHTML+=` <div class="container1">
        <div class="text">
            <input type="text" value="${elment.task}" readonly  class="num1">
        </div>
        <div class="button1" >
            <button class="btnedit" onclick="edittask(${index})">Edit</button>
            <button class="btndel" onclick="deltask(${index})" >Delete</button>
            
                        </div>
                    </div>`
    });
};
let deltask =(i)=>{
    Arry.splice(i,1)
    showtask() 
}
let edittask=(index)=>{
let inputtask=document.querySelectorAll('.container .container1 .text input')
let btn=document.querySelectorAll('.container .container1 .btnedit')
inputtask[index].removeAttribute("readonly")
btn[index].innerText="Update";
btn[index].setAttribute("onclick",`Update(${index})`)
btn[index].classList.replace("btnedit", "Update")

}
let Update=(index)=>{
    let inputtask=document.querySelectorAll('.container .container1 .text input')
let btn=document.querySelectorAll('.container .container1 .Update')
inputtask[index].setAttribute("readonly","readonly")
Arry[index].task=inputtask[index].value
btn[index].setAttribute("onclick",`btnedit(${index})`)
btn[index].innerText="Edit";
btn[index].classList.replace("Update","btnedit")
showtask() 

}
button.addEventListener("click",rendertask)
