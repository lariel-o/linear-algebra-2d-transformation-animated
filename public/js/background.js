export const grid = (i, j, def)=>{
    if(def == true){
        const defGridAsX = document.querySelectorAll(".default-grid-as-x");
        const defGridAsY = document.querySelectorAll(".default-grid-as-y");

        let count = 0;
        for(i of defGridAsX){ 
            if(count <= 6){
                i.style.paddingTop = `${66*(1 + count)}px`
                defGridAsY[count].style.paddingTop = `${66*(1 + count)}px`
            }

            else{
                i.style.borderTop = "2px solid rgb(0, 0, 0, 30%)"
                i.style.borderBottom = "none"
                i.style.paddingTop = `${66*(1 + count - 7)}px`

                defGridAsY[count].style.borderTop = "2px solid rgb(0, 0, 0, 30%)"
                defGridAsY[count].style.borderBottom = "none"
                defGridAsY[count].style.paddingTop = `${66*(1 + count - 7)}px`
            }

            count++
        }
    }
}

