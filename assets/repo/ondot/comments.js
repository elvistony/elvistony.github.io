function readComments(){
var request = new XMLHttpRequest();
    request.open('GET', 'https://docs.google.com/spreadsheets/d/1aU6EG8ShxrWHUHMMLLiNw89J1euGuXd-yKGmxqnxJGA/gviz/tq?tqx=out:csv', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
                loadComments(request.responseText)
                return request.responseText;
        }
    }

}
var t = ""
function parseText(text){
    var headers = (text.split("\n")[0]).split(",")
    var textdata=text.split('\n')
    var size = textdata.length
    var csvdata=[]
    var data = []
    //console.log(text)
    
    for (var i=1;i<size;i++){
        var element = []
        csvdata = textdata[i]
        csvdata= csvdata.split(",")
        element["Name"]=csvdata[3].substr(1,csvdata[3].length-2)
        element["Comment"]=csvdata[2].substr(1,csvdata[2].length-2)
        element["Rating"]=csvdata[1].substr(1,csvdata[1].length-2)
        element["Time"]=csvdata[0].substr(1,csvdata[0].length-2)
        element["Moderated"]=csvdata[4].substr(1,csvdata[4].length-2)
        data.push(element)
        //console.log(element)
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
            divele.innerHTML = `
            <div class="w3-round-large w3-white w3-margin comment">
                <h5><b>`+value["Name"]+`</b><span style="float:right" >`+"⭐️".repeat(parseInt(value["Rating"]))+"🔸".repeat(5-parseInt(value["Rating"]))+`</span></h5>
                <p class="">`+value["Comment"]+`<br><span class="comment-tstamp">`+getComDate(value["Time"])+`</span></p>
            </div>`+ divele.innerHTML;

            //console.log(value)
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

function getComDate(date){
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var ndate = new Date(date);
    //console.log(date)
    var string_date = ""+days[ndate.getDay()]+", "+ndate.getDate()+" "+months[ndate.getMonth()]+" "+ndate.getFullYear()
    //console.log(ndate)
    return string_date;
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

// function resizeIFrameToFitContent( iFrame ) {
//     iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
//     iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
// }

// window.addEventListener('DOMContentLoaded', function(e) {
//     var iFrame = document.getElementById('newcomment');
//     resizeIFrameToFitContent( iFrame );
// } );


var loadCounter = 0;

function loaded(){
    loadCounter += 1;
    //document.getElementsByClassName("exportHeader")[0].style.display="none"
    if (loadCounter === 2) {
        document.getElementsByTagName('iframe')[0].style.height="250px";
    }
}
