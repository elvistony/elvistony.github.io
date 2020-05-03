section = document.getElementById('postsection')
section.innerHTML=""
postfile = loadFile('../data/'+entryfile)
var posts = JSON.parse(postfile)['posts']
id = 0
for (p in posts){
  console.log(id)
  section.innerHTML+=renderPost(id,posts[id]['title'],posts[id]['description'],posts[id]['image'],posts[id]['date'],posts[id]['tags'],posts[id]['link'])
  id=id+1
}
// console.log(posts)
function renderPost(id,title,des,img,date,tags,link){
  // console.log(title)
  post=`
  <div class="w3-container w3-white w3-margin w3-padding-large">

      <h3>`+title+`</h3>
    <h5><span class="w3-opacity">`+date+`</span></h5>
    <div class="w3-justify w3-container">
      <img src="`+img+`" alt="`+title+`" style="width:100%" class="w3-padding-16">
      <a class="w3-right w3-button w3-orange" href="`+loc+'blog/'+link+`">Read More</a>
      <p>Tags`
    for (tag of tags){
      post+='<span class="w3-blue-gray w3-tag w3-round">'+tag+'</span>'
    }
    post+=`</p></p>`+des+`</p>

    </div>
  </div>
  <hr>`
  return post
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
