---
layout: default
title: "Days Left till we depart"
description: "A countdown till college closes (2017-21) Batch"
date:   2020-11-04 11:48:18 +0530
tags: countdown 2020
permalink: /event/days-till-we-depart/
---
<!-- First Grid -->
<div class="w3-row-padding w3-black w3-center w3-text-white w3-padding-64 w3-container">
    <div class="w3-content w3-padding-64 ">
        <h1 id="time">Counting the Days</h1>
        <h2 class="w3-text-orange style_text">till our time in college runs out!</h2>
    </div>
    <div class="w3-content w3-padding-64">
        <p>Of which..</p>
        <h2 class="w3-text-orange style_text"><span id="day-holiday" class=" w3-xlarge"></span> are holidays</h2>
    </div>
    <div class="w3-content w3-padding-64">
        <p>that means...</p>
        <h2 class="w3-text-orange style_text"><span id="day-college" class=" w3-xlarge"></span> are college days (<span id="week-college" class=" w3-xlarge"></span> )</h2>
    </div>
    <div class="w3-content w3-padding-64">
        <b style="color:green">Don't feel remorse, there's still time, Stay Happy...</b>
        <p style="color:orange">Spread Joy and Kindness...</p>
    </div>
</div>
<script>
var countDownDate = new Date("Apr 1, 2021 12:00:00").getTime();
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = days + "<span class='w3-tiny'> days</span> " + hours + "<span class='w3-tiny'> hours</span> "+minutes+" <span class='w3-tiny'> minutes</span> "+seconds+"<span class='w3-tiny'> seconds</span>";
    document.getElementById("day-holiday").innerHTML = Math.floor(((days/7)*2))+" <span class='w3-tiny'> days</span>";
    document.getElementById("day-college").innerHTML = Math.floor(days - ((days/7)*2))+" <span class='w3-tiny'> days</span>";
    document.getElementById("week-college").innerHTML = Math.floor((days - ((days/7)*2))/7)+"<span class='w3-tiny'> weeks</span>"
    if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("time").innerHTML = "Finale";
    }
}, 1000);
</script>