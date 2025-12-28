import axis_unity_base from './../../private/js/axis_unity_base.js'

const unity = (axis_unity_base - 49)/7;

export const grid = (i, j, def)=>{
    if(def == true){
        const defGridAsX = document.querySelectorAll(".default-grid-as-x");
        const defGridAsY = document.querySelectorAll(".default-grid-as-y");

        let count = 0;
        for(let i of defGridAsX){ 
            i.style.width                   = axis_unity_base + "px"
            defGridAsY[count].style.width   = axis_unity_base + "px"
            if(count <= 6){
                i.style.paddingTop = `${unity*(1 + count)}px`
                defGridAsY[count].style.paddingTop = `${unity*(1 + count)}px`
            }

            else{
                i.style.borderTop = "2px solid rgb(0, 0, 0, 30%)"
                i.style.borderBottom = "none"
                i.style.paddingTop = `${unity*(1 + count - 7)}px`

                defGridAsY[count].style.borderTop = "2px solid rgb(0, 0, 0, 30%)"
                defGridAsY[count].style.borderBottom = "none"
                defGridAsY[count].style.paddingTop = `${unity*(1 + count - 7)}px`
            }

            count++
        }
    }
}

