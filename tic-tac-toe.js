let track=[]
let rowPositions = {}
let columnPositions = {}
let diagonalPositions = {}
let winner = false

let cur_row = undefined
let cur_column = undefined
let cur_diagonal = undefined
let rows = [
[1,2,3],
[4,5,6],
[7,8,9]
]
let columns = [
[1,4,7],
[2,5,8],
[3,6,9]
]
let diagonals = [
[1,5,9],
[3,5,7]
]

function checkrow(row,choice){
    for (let i = 0;i<row.length;i++){
        if (document.getElementById(row[i]).classList.contains(choice) == false){
            return false
        }
    }
    return true
}
function checkcolumn(column,choice){
    for (let i = 0;i<column.length;i++){
        if (document.getElementById(column[i]).classList.contains(choice) == false){
            return false
        }
    }
    return true
}
function checkdiagonal(diagonal,choice){
    if (diagonal != undefined)
    {
        for (let i = 0;i<diagonal.length;i++){
            if (document.getElementById(diagonal[i]).classList.contains(choice) == false){
                return false
            }
        }
        return true
    }
    return false
}

function clickAction(ps){
    if (winner == false){
        if (track.length == 0 || track[0] == "O" && ps.textContent == ""){
            ps.textContent = "X"
            ps.classList.add("X")
        }
        else if (track[0] == "X" && ps.textContent == ""){
            ps.textContent = "O"
            ps.classList.add("O")
            
        }
        if(track[0] == "X"){
            track[0] = "O"
        }
        else{
            track[0] = "X"
        }
        cur_row = rowPositions[ps.id]
        cur_column = columnPositions[ps.id]
        cur_diagonal = diagonalPositions[ps.id]

        if (checkrow(rows[cur_row],track[0]) == true){
            winner = true
        }
        else if (checkcolumn(columns[cur_column],track[0]) == true){
            winner = true
        }
        else if (checkdiagonal(diagonals[cur_diagonal],track[0]) == true){
            winner = true
        }
        if (winner == true){
            let msg = document.getElementById("status")
            msg.textContent = "Congratulations! "+track[0]+" is the Winner!"
            msg.classList.add("you-won")
            
        }
}
    
}

function hoveraction(ps){
    ps.classList.add("hover")
}

function hoveroutaction(ps){
    ps.classList.remove("hover")
}

function newGameAction(){
    let var_div = document.getElementById("board").children
    for(let i = 0 ;i < var_div.length;i++){
        var_div[i].classList.remove("X")
        var_div[i].classList.remove("O")
        var_div[i].textContent = ""
        
    }
    winner = false
    track = []
    let msg = document.getElementById("status")
    msg.textContent = "Move your mouse over a square and click to play an X or an O."
    msg.classList.remove("you-won")
}

onload = function(){
    var_div=document.getElementById("board").children
    let newgame = document.getElementsByClassName("btn")

    for(let i=0 ;i< var_div.length; i++){
        var_div[i].setAttribute("class","square")
        var_div[i].setAttribute("onclick","clickAction(this)")
        var_div[i].setAttribute("onmouseover","hoveraction(this)")
        var_div[i].setAttribute("onmouseout","hoveroutaction(this)")
        var_div[i].setAttribute("id",(i+1))
        //Row
        if (i+1 <= 3){
            rowPositions[var_div[i].id] = 0
        }
        else if (i+1 > 3 && i+1 <=6){
            rowPositions[var_div[i].id] = 1
        }
        else if (i+1 > 6 && i+1 <= 9){
            rowPositions[var_div[i].id] = 2
        }
        //Columns
        if (i+1 == 1||i+1 == 4||i+1 == 7){
            columnPositions[var_div[i].id] = 0
        }
        else if (i+1 == 2||i+1 == 5||i+1 == 8){
            columnPositions[var_div[i].id] = 1
        }
        else if (i+1 == 3||i+1 == 6||i+1 == 9){
            columnPositions[var_div[i].id] = 2
        }
        //Diagonals
        if (i+1 == 1||i+1 == 5||i+1 == 9){
            diagonalPositions[var_div[i].id] = 0
        }
        else if (i+1 == 3||i+1 == 5||i+1 == 7){
            diagonalPositions[var_div[i].id] = 1
        }
    }

    newgame[0].addEventListener("click",newGameAction)
}