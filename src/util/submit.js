export function showInput() {

var form = document.getElementById('form');

form.onsubmit = function(e){
   e.preventDefault();

   var title = document.getElementById('title');
  title.innerHTML= "This is your information:"
   

   var result_name = document.getElementById('result_name');
   result_name.innerHTML= "Name: " + form.name.value;
   

   var result_age = document.getElementById('result_age');
   result_age.innerHTML = "Age: " + form.age.value;
   
   var result_gender = document.getElementById('result_gender');
   result_gender.innerHTML = "Gender: " + form.gender.value;
   
   form.reset();

    };
}
    
    



