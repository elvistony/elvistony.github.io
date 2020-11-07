---
layout: single
title:  "Making a TimeTable Web-App"
date:   2020-11-04 11:48:18 +0530
categories: Code
tags: DIY 2020 COVID-19 Experiences 
breadcrumbs: true
classes: wide
permalink : /posts/:categories/:title/
header:
  overlay_image: /assets/img/timetable/timetable-head.png
  overlay_filter: 0.9 
---
_The Making of a Simple Timetable WebApp_

Lockdown, that's one word everyone is afraid of right after the trending term "COVID-19".

March 24th, rumours spread in our class like wild fire - The day before our internal exams.

"Guys, I think this Covid thing is serious..." Moments later, our WhatsApp group was flooded with the news of a nation-wide lockdown....<a class="htag" title="Day Before Lockdown" href="/posts/experiences/day-before-lockdown/">Read More</a>

Days passed with us having to stare at a computer screen for hours at a stretch. Our class representative <a class="htag" title="Thira" href="#">Athira M.R</a> helped us join the classes. Everyday She'd prepare a WhatsApp message with the necessary `Google Classroom` links and share it to our group. To be honest, it was tough for most of us especially since she had to get the links from her laptop to her phone and we'd have to do the vice-versa! 

That's when we came up with a simple solution to host the `Time-Table Online`. It was pretty basic at first, the page would just show a predefined timetable with the Google Classroom Links. This worked fine for a couple of days until when teachers began changing the timetable and substituting teachers. 

_Google Forms enters the scene._ 

Using a google form we updated the timetable dynamically. She'd fill in the form in the morning and we'd just have to refresh our Page to see the new Timetable.

Things advanced when <a class="htag" title="Aishu's Timetable Site" target="_blank" href="http://aishwaryajoyy.c1.biz/">Aishwarya Joy</a> came up with a rather interesting solution using `Google Meet` links instead of the Classroom Links which was one hurdle less to get into the Session. After collaborating with her, We upgraded our Timetable website to now support Meet-Links also!

For a fun lil experiment we decided to add a count-down to show which subject comes. Its still buggy but works most of the while :wink wink!

Just when I thought the work on the Web-app was done, <a class="htag" title="Diya" target="_blank" href="#">Diya Rajan</a> and <a class="htag" title="Aishu" target="_blank" href="#">Aishwarya Rajan</a>, _ok hang on, they're not sisters, they just happened to have the same surname :smileyFace!  Ahem..._ 


Returning to our discussion, they had a feature request, they said they faced a slow-down since everytime they click the links on our Page, they had to shift their google accounts which was really annoying.

After googling a bit, we found a solution which allowed us to set which account was to be invoked with each link. Now to get things lil more interesting, we added a notification sound whenever a period finishes! Along with this update, we threw in a `Dark Theme` too!

{% include figure image_path="/assets/img/timetable/timetable-head.png" alt="Time-Table (Current)" %}

So Hopefully this concludes our work on this Project.You can see my Code Here.



<div class="text-right">
    <a href="/posts/code/host-your-own-timetable/" class="btn--success btn">Host your Own!</a>
    <a href="https://github.com/elvistony/time-table/" target="_blank" class="btn--danger btn">Code</a>
    <a href="https://elvistony.github.io/time-table/" target="_blank" class="btn--warning btn">Web-App</a>
</div>
