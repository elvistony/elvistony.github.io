---
layout: single
title:  "Host your Own Timetable Web-App"
date:   2020-11-04 11:48:18 +0530
categories: Code
description: "A DIY Guide for Hosting the Timetable Web-app"
tags: DIY 2020 COVID-19 Projects
breadcrumbs: true
permalink : /posts/:categories/:title/
toc: true
toc_sticky: true
classes: single
header:
  overlay_image: /assets/img/timetable/timetable-head.png
  overlay_filter: 0.9 
---
_DIY Guide for Hosting the Timetable Web-app_  

So, you want to host one of this for your class, you've come to the right place.
<a class="btn btn--warning" href="https://elvistony.github.io/time-table/" target="_blank">Time-table</a>

# Prerequisites

## What is this Web-app?

The timetable web-app is a simple app to display the day's Class Timetable.

It supports the publishing of alternate schedules or fall-back to the regular timetable all in the control of an easy to use Google Form. The app also features Google Account pre-selection, Dark Mode and also a Notification when its time for the next Period!

<b>Assumptions</b>
I'm gonna assume a few things here,
 - You know how to use Github.
 - You have an account in Github.
 - You know basics of programming (optional).
 - You know how to make Google Forms and Google Sheet Responses.

# Getting Started

## Forking my Repository
Head over to Github.com and fork my repository.

<a href="https://github.com/elvistony/time-table" target="_blank" class="btn btn--warning">github.com/elvistony/time-table/</a>

In your fork, be sure to enable Github pages for your branch. To enable Gh-pages navigate to :

`Settings > Github Pages > Select Branch`

Wait for Github to respond with 

`Your site is published at ..../time-table/`

Click the link and See if the Deployment is successful and the page loads correctly or not.

//Figure Here

## Backend Setup

<b>Setting Up the Google Form</b>
Now to make a Google Form that works as the back-end panel, click the link below to Make a copy of the Form.

<a class="btn btn--warning" href="https://docs.google.com/forms/d/1S983Y_j3rZiZQHmnsZL7a2FrJQb0cj0zCVBQNTbx_Cs/copy" target="_blank">Make a Copy - Google Form</a>


<b>Setting Up the Response Sheet</b>
In your form, Go to the Responses tab and Click the `Spreadsheet` icon to generate a Responses Sheet.

Go to the Responses Sheet and Click the `Share` button on the top right. Copy the ID of the sheet which is in the form. Ensure you grant **Only View** privileges in the Share Tab.

`https://docs.google.com/spreadsheets/d/`ID-HERE`/edit?usp=sharing`

Copy that ID and keep it for the next step.

## Modifying Links in Web-App

In your Github fork, navigate to `/js/common.js`.

Scroll down a bit and look for the variable `sheet_id`

Replace the existing ID with the ID you copied in the prev step.

The variable should now look like: `sheet_id="1a2b3c4d5e...6f7g8h"`;

Your WebApp is now configured to source from the sheet!

## Adding Supporting Sheets

Open the supporting sheets with the link below,

<a class="btn btn--warning" href="https://docs.google.com/spreadsheets/d/1L4MTqM4wl_IW01cYab7dudN3-IjCEFdYIvbTAw3xSnI/view" target="_blank">Add Supporting Sheets</a>

On the bottom you'll see 4 sheets
 
<span style="padding: 5px;
    color: black;
    background: white;">Links | TimeTable | TimeStart | TimeEnd</span>

Right click each of those **4 sheets** and Click `Copy to > Existing SpreadSheet` and select the Responses Spreadsheet.

Now Open your updated Responses Sheet and ensure you now Have 5 Sheets.

Rename the Main Response Sheet (First Sheet) as `Today`

## Updating the Sheet

Update the Sheet with your Content.

**Sheet: Links**
 - Row 1 => Subjects
 - Row 2 => Class Room IDs 
    - like  `/c/abcdefg`  
        _Paste only the /c/abcd... portion, ignore anything after '?'_
 - Row 3 => Colors as HEX
 - Row 4 => Meet Links 
    - like  `https://meet.google.com/lookup/abcedfg`  
      _Remove anything after '?....'_

**Sheet: TimeTable**
 - Fill in your Timetable
 - Ensure the period(1st row) and days(1st column) aren't modified.

 **Sheet: TimeStart and Sheet: TimeEnd**
 - Like the previous, Edit the timings for Normal Days.
 - If you follow the same timetable for all the days, Copy the same timings to Friday's row.

## Final Touches

Go to your Form, and update the Options for Period 1,2,3,4,5 to the same ones entered in `Sheet: Links`.

Ensure the spellings are maintained and no Spaces are present.

# Test Run!

Go to your Hosted App using the URL.

`https://username.github.io/time-table/`

Replace your Github Username in the above link and Check it out!

<hr>

Hope it helps!

Read the More about the Backstory behind this...
<div class="text-right">
    <a href="/posts/code/making-a-timetable-app/" target="_blank" class="btn--warning btn">Making the Web-App</a>
</div>

