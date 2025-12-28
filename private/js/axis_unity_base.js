let xAxis = document.querySelector(".x-axis")
let yAxis = document.querySelector(".y-axis")
let axis = document.querySelectorAll(".axis")

// axis_unity_base is the lowest valor between xAxis and yAxis
let axis_unity_base = xAxis.offsetWidth < yAxis.offsetWidth ? xAxis.offsetWidth : yAxis.offsetWidth;
console.log(axis_unity_base)

export default axis_unity_base - 30;

