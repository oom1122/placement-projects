const display=document.getElementById('display');

function insert(value)
{
  display.value=display.value+value;
}
function remove_last()
{
   display.value=display.value.slice(0,-1);
}
function all_clear()
{
  display.value="";
}
function calculation()
{
  try{
    display.value=eval(display.value);
  }
  catch{
    display.value='error';
  }
}