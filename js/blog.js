function popuptext(id) {
  var popup = document.getElementById(id);
  var spanofpop = document.getElementById(id)
  if (spanofpop.getAttribute('unset')=='true'){
    console.log(spanofpop.getAttribute('unset'))
    spanofpop.setAttribute('unset',false)
    spanofpop.innerHTML=GetTitle(spanofpop.innerHTML);
  }

  popup.classList.toggle("show");
}
function activatePopups(){
  s_links = document.getElementsByClassName('popup');
  i=0
  for (link of s_links){
    link.setAttribute("target","_blank")
    link.setAttribute("onmouseover","popuptext('pop"+i+"')")
    link.innerHTML+=`<a  target="_blank" href="`+link.getAttribute("href")+`" ><span id="pop`+i+`" unset="true" class="popuptext">`+link.getAttribute("href")+`</span></a>`
    i+=1
  }
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

activatePopups()

function GetTitle(url){
  return loadFile('https://textance.herokuapp.com/title/'+url)
}
