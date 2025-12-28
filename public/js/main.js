import { grid } from './background.js'

import axis_unity_base from './../../private/js/axis_unity_base.js'

let xAxis = document.querySelector(".x-axis");
let yAxis = document.querySelector(".y-axis");

xAxis.style.width = axis_unity_base + "px"
yAxis.style.width = axis_unity_base + "px"

grid(0, 0, true);

