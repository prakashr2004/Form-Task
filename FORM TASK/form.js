var form = document.forms.userInputs
var para = document.getElementById("alert")
var button = document.getElementById("button")



console.log(form.elements.select)

form.addEventListener("submit",(event)=>{

    event.preventDefault()

if(form.elements.userName.value==""){
   
  para.innerHTML = "Invalid Username"
  para.classList.add('alert')

  clear = setTimeout(()=>{
    para.innerHTML = ""
    para.classList.remove('alert')
  },1000)
} 
else if(form.elements.select.value==""){
     
  para.innerHTML = "select atleast 1  feedback category"
  para.classList.add('alert')

  clear = setTimeout(()=>{
    para.innerHTML = ""
    para.classList.remove('alert')
  },1000)
}
else if(form.elements.Email.value=="")
{
      
  para.innerHTML = "plse enter your email"
  para.classList.add('alert')

  clear = setTimeout(()=>{
    para.innerHTML = ""
    para.classList.remove('alert')
  },1000)
     
}
else if(form.elements.Feedback.value==""){
  para.innerHTML = "plse enter your feedback"
  para.classList.add('alert')

  clear = setTimeout(()=>{
    para.innerHTML = ""
    para.classList.remove('alert')
  },1000)
}
else  if(!(form.elements.checkbox.checked))
{
  para.innerHTML = "plse reade trem & contion "
  para.classList.add('alert')

  clear = setTimeout(()=>{
    para.innerHTML = ""
    para.classList.remove('alert')
  },1000)
}
else{
  para.innerHTML = "submitted sucessfully"
  para.classList.add('complete')
  clear = setTimeout(()=>{
    para.innerHTML = ""
    para.classList.remove('complete')
    location.reload()
  },1000)
}
})
