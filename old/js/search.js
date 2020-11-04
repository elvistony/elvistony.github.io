function searchjson(src){
  file = loadFile('../data/index.json').toLowerCase();
  var index = JSON.parse(file)['index']
  var results =[]
  if (src.trim().length<=3){
    alert("Please Type more than 3 letters")
    return results
  }
  for (json of index){

    postfile = loadFile('../data/'+json).toLowerCase();
    posts = JSON.parse(postfile)['posts']
    id = -1
    for (p of posts){
      //searching in Title
      id=id+1
      if(p['title'].search(src)>0){
        results.push(posts[id]);
        console.log('title')
        continue
      }
      //searching in description
      else if(p['description'].search(src)>0){
        results.push(posts[id]);
        console.log('desc')
        continue
      }
      for (tag of p['tags']){
        if(tag.search(src)>0){
          results.push(posts[id]);
          break
        }
      }

    }
  }
  return results
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

function gosearch() {
  query=document.getElementById('srcquery').value
  results=searchjson(query)
  r = document.getElementById('srcresults')
  r.innerHTML=""
  if (results.length<=0){
      r.innerHTML+=`<p class="w3-block w3-text-white w3-padding-max w3-margin w-opacity">No Matching Results Found</p>`
  }
  for (res of results){
    r.innerHTML+=`<p class="w3-button w3-text-dark w3-block w3-padding-max w3-margin w3-opacity w3-orange">`+res['title']+`</p>`
  }
}
