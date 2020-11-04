section = document.getElementById('popularposts')
section.innerHTML=""
path=loc+'data/popular_posts.json'
console.log(path);
postfile = loadFile(path)
var posts = JSON.parse(postfile)['posts']
id = 0
for (p in posts){
  console.log(id)
  section.innerHTML+=renderPost(id,posts[id]['title'],posts[id]['description'],posts[id]['link'])
  id=id+1
}
// console.log(posts)
function renderPost(id,title,des,link){
  // console.log(title)
  post=`
  <li class="w3-padding-16 w3-trunc">
    <span class="w3-large ">`+title+`</span>
    <br>
    <span class="">`+des+`</span>
    <a class="w3-button w3-right w3-small" href="`+loc+'blog/'+link+`">Read More..</a></li>`
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
