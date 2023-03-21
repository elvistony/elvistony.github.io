---
title:  "Multi source Webscraping"
date:   2023-01-20
categories: Code
description: "Built a python framework that scrapes multiple sources with varied html structures."
tags: RPA Python Project
breadcrumbs: true
permalink : /posts/:categories/:title/
---

A project involving the data scraping of multiple sources that include APIs and normal Web pages.

## Overview

This project solves a interesting request of scraping multiple sources that have different structures and combining them into a single data output (excel spreadsheet). 

## Implementation

Here Python was used in the entirety of the project along with a few python packages such as 

- Pandas
- Selenium
- Requests
- BeautifulSoup


## Features

The framework was built to encourage the addition of new sources by creating a single script file responsible for the source.

The main app (parent) would automatically trigger the sub (child) source scripts and combine the outputs generated into a single excel spreadsheet.

The project involved scraping multiple publicly available websites and captured the following information,

- Names
- City and State
- Date of Birth
- Date of Death
- Descriptions
- Organization information

## Execution

- This project was set to execute every week on a remote machine.
- The output excel spreadsheet would then be pushed to a shared folder for the client to access (Sharepoint)
- The average run-time of a single triggered excecution was approximately **2-3 hours**.
- The number of hours needed for manually performing the same task was estimated to be about 2 min per entry with about **a million entries** to process.