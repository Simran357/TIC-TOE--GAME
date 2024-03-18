
let turnO = false;
let turnX  = true;
let newbtn = document.querySelector("#reset")
let btn =  document.querySelector("#btn1")
let para = document.querySelector("#msg")
let msg1 = document.querySelector(".msg-container")
let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

let resetfuc = () => {
      enableBoxes();
    turnO = false
    msg1.classList.add("hide")
    msg1.innerText = ""
}
 

let boxes = document.getElementsByClassName("box")
let boc = Array.from(boxes)
boc.forEach((box) => {
box.addEventListener("click",() =>{
    console.log("button was clicked");
     if (turnO){
box.innerText ="O"
    turnO = false
} else{
    box.innerText =  "X"
    turnO = true 
}
box.disabled = true;
checkWinner();
})
})



let disableboxes = () => {
    for(let box of boxes){
    box.disabled = true
}

}

let enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}
const showWinner = (winner)=>{
msg1.innerHTML = `congratulations , winner is ${winner}`
    msg1.classList.remove("hide")
disableboxes()

}
let checkWinner = () => {
for(let pattern of winner) {
      let pos1val =   boxes[pattern[0]].innerText
       let pos2val = boxes[pattern[1]].innerText
    let  pos3val =  boxes[pattern[2]].innerText
    if( pos1val != "" && pos2val != "" && pos3val != "")
{
    if(pos1val === pos2val  && pos2val === pos3val)
        {
        console.log("winner", pos1val);
showWinner(pos1val)
disableboxes()


    }
}
}
}

