const displejs = document.getElementById("displejs");

function rakstitDisp(input){
  displejs.value += input;
}

function notiritDisp(){
  displejs.value = "";
}

function aprekinat(){
  try{
     displejs.value = eval(displejs.value);
  }
  catch(error){
    displejs.value = "Kļūda";
  }
}