function readComments(){
var request = new XMLHttpRequest();
    request.open('GET', 'https://cors-anywhere.herokuapp.com/docs.google.com/spreadsheets/d/e/2PACX-1vT31vop5-VeSry24J6gNBvVlaZbJl8KYFSOEuagS-ipaa3zwtTXvIuJawFZJnMHshXxXZv1px5lruPq/pub?output=csv', true);
    document.getElementById("comments").innerHTML='<p class="w3-center w3-animate-fading">Fetching Reviews</p>'
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
        		loadComments(request.responseText)
                return request.responseText;
        }
    }

}

function parseText(text){
	var headers = (text.split("\n")[0]).split(",")
    var textdata=text.split('\n')
    var size = textdata.length
    var csvdata=[]
    var data = []
    for (var i=1;i<size;i++){
    	var element = []
        csvdata = textdata[i]
        csvdata=splitEntry(csvdata)
        element["Name"]=csvdata[3]
        element["Comment"]=csvdata[2]
        element["Rating"]=csvdata[1]
        element["Time"]=csvdata[0]
        element["Moderated"]=csvdata[4]
        data.push(element)
        console.log(element)
    }
    
    return data
}

function splitEntry(text){
	var elements=[];
    //console.log(typeof(text.toString()))
    var buffer = "";
    text.split(',').forEach(function(value, index, array) {
  			if (value[0]=='"'){
            	buffer +=value
            }else if(value.substr(-1)=='"'){
            	buffer +=","+value
                elements.push(buffer)
                buffer=""
            }else{
            	elements.push(value)
            }
});
    return elements
}

function loadComments(text){
    var data = parseText(text)  
    document.getElementById("comments").innerHTML=""
    rendercomments(data)
}

function rendercomments(data){
    var divele = document.getElementById("comments")
    
    //console.log(data)


    for (let index = 0; index < data.length; index++) {
        value = data[index];
        if (true){
            divele.innerHTML += `
            <div class="w3-card w3-white w3-round-large w3-padding w3-margin ">
                <h5><b>`+value["Name"]+`</b><span class="w3-right" >`+"⭐️".repeat(parseInt(value["Rating"]))+"🔸".repeat(5-parseInt(value["Rating"]))+`</span></h5>
                <p class="w3-padding">`+value["Comment"].substr(1,value["Comment"].length-2)+`<br><i class="w3-right w3-text-gray">`+value["Time"].substr(0,10)+`</i></p>
            </div>`;

            console.log(value)
        }
    }

    // for (var value of data) {
    //     if (value["Moderated"]=='yes'){
            
    //         divele.innerHTML += `
    //         <div class="w3-card w3-white w3-round-large w3-padding w3-margin ">
    //             <h5><b>`+value["Name"]+`</b><span class="w3-right w3-text-gray">`+"⭐️".repeat(parseInt(value["Rating"]))+"🔸".repeat(5-parseInt(value["Rating"]))+`</span></h5>
    //             <p class="w3-padding">`+value["Comment"].substr(1,value["Comment"].length-2)+`<br><i class="w3-right">`+value["Time"].substr(0,10)+`</i></p>
    //         </div>`;
    //     }
    //     console.log(value)
    // }
    // data.forEach(function(value, index, array) {
    //     if (value["Moderated"]=='yes'){
    //         divele.innerHTML += `<div class="w3-card w3-white w3-round-large w3-padding w3-margin ">
    //             <h5><b>`+value["Name"]+`</b><span class="w3-right w3-text-gray">[ `+value["Rating"]+` / 5 ]</span></h5>
    //             <p class="w3-padding">`+value["Comment"].substr(1,value["Comment"].length-2)+`<br><i class="w3-right">`+value["Time"].substr(0,10)+`</i></p>
    //         </div>`;
    //     }
    //     console.log(value)
    // })
}

function smallAccordian(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-hide-small") == -1) {
      x.className += " w3-hide-small";
      x.className += " w3-animate-fade";
    } else {
      x.className = x.className.replace(" w3-hide-small", "");
      x.className = x.className.replace(" w3-animate-fade", "");
    }
  }

readComments()

function resizeIFrameToFitContent( iFrame ) {
    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function(e) {
    var iFrame = document.getElementById('newcomment');
    resizeIFrameToFitContent( iFrame );
} );