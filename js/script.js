// Copyright (c) 2020 ali-mugamai All rights reserved
//
// Created by: ali mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-6-04-JS/sw.js", {
    scope: "/ICS20-6-04-JS/",
  })
}
"use strict"

window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')
  console.log(radius)

  // process
  const radius_cubed = radius ** 3
  const volume = ((4 * Math.PI * radius_cubed) / 3).toFixed(2)
  const dimensions = "<ul>\n<li>radius = " + radius 

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'volume is: ' + volume + ' mm³'
}