let itemSelected = "";
let gameHasStarted = false;

let jsonImages = [
    {
        backgroundImage: 'url("../img/1.png")'
    },
    {
        backgroundImage: 'url("../img/4.png")'
    },
    {
        backgroundImage: 'url("../img/7.png")'
    },
    {
        backgroundImage: 'url("../img/2.png")'
    },
    {
        backgroundImage: 'url("../img/5.png")'
    },
    {
        backgroundImage: 'url("../img/8.png")'
    },
    {
        backgroundImage: 'url("../img/3.png")'
    },
    {
        backgroundImage: 'url("../img/6.png")'
    },
]
const sortImages = () => {
    document.getElementById("button_start").value = "Restart Game";
    document.getElementById("8").backgroundImage = "";
    gameHasStarted = true;
    let arrayNumbers = [0,1,2,3,4,5,6,7];
    let i = arrayNumbers.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = arrayNumbers[i];
        arrayNumbers[i] = arrayNumbers[j];
        arrayNumbers[j] = temp;
    }

    let contador = 0;
    while (contador < 8) {
        document.getElementById(`${contador}`).style.backgroundImage = jsonImages[arrayNumbers[contador]].backgroundImage;
    
        contador++;
    }
}
const putImages = () => {
    let contador = 0;
    while (contador < 8) {
        document.getElementById(`${contador}`).style.backgroundImage = jsonImages[contador].backgroundImage;
    
        contador++;
    }
}
setTimeout(() => {
    putImages();
}, 600);

const selectImage = (element_id) => {
    const elementSelected = document.getElementById(element_id)
    if(gameHasStarted) {
    
        elementSelected.style.transform = "scale(1.1)"
        elementSelected.style.boxShadow = "0px 4px 10px black"
        elementSelected.style.position = "absolute";
        elementSelected.style.zIndex = "10";
    
        const allSquares = document.getElementsByClassName("image-cell");

        for(let i = 0; i<allSquares.length; i++) {
            if (allSquares[i].id !== element_id) {
                allSquares[i].style.transform =  "scale(1)"
                allSquares[i].style.boxShadow = "none"
                allSquares[i].style.position = "inherit"
                allSquares[i].style.zIndex = "1"
            }
        }
        if(elementSelected.style.backgroundImage === "") {
            if (itemSelected === "") {
                alert("Please select an image first to swap");
            } else {
                const statesSelected = () => {
                    elementSelected.style.backgroundImage = document.getElementById(itemSelected).style.backgroundImage
                
                    document.getElementById(itemSelected).style.backgroundImage = ""

                    for(let i = 0; i<allSquares.length; i++) {
                        allSquares[i].style.transform =  "scale(1)"
                        allSquares[i].style.boxShadow = "none";
                        allSquares[i].style.position = "inherit";
                        allSquares[i].style.zIndex = "1";
                    }
                }

                if(elementSelected.id === "0"){
                    if(itemSelected === "1" || itemSelected === "3"){
                        statesSelected();
                    }
                }
                if(elementSelected.id === "1"){
                    if(itemSelected === "0" || itemSelected === "2" ||itemSelected === "4"){
                        statesSelected();itemSelected
                    }
                }
                if(elementSelected.id === "2"){
                    if(itemSelected === "1" || itemSelected === "2" ||itemSelected === "5"){
                        statesSelected();itemSelected
                    }
                }
                if(elementSelected.id === "3"){
                    if(itemSelected === "0" || itemSelected === "4" ||itemSelected === "6"){
                        statesSelected();itemSelected
                    }
                }
                if(elementSelected.id === "4"){
                    if(itemSelected === "1" || itemSelected === "3" || itemSelected === "5" || itemSelected === "7"){
                        statesSelected();itemSelected
                    }
                }  
                if(elementSelected.id === "5"){
                    if(itemSelected === "2" || itemSelected === "4" ||itemSelected === "8"){
                        statesSelected();itemSelected
                    }
                }
                if(elementSelected.id === "6"){
                    if(itemSelected === "3" || itemSelected === "7"){
                        statesSelected();itemSelected
                    }
                }
                if(elementSelected.id === "7"){
                    if(itemSelected === "6" || itemSelected === "4" ||itemSelected === "8"){
                        statesSelected();itemSelected
                    }
                }
                if(elementSelected.id === "8"){
                    if(itemSelected === "5" || itemSelected === "7"){
                        statesSelected();
                    }
                }
                
            }
        } else {
            itemSelected = element_id;
        }
    }
}
const checkGame = () => {
    if(gameHasStarted) {
        if(
            document.getElementById("0").style.backgroundImage === jsonImages[0].backgroundImage 
            && 
            document.getElementById("1").style.backgroundImage === jsonImages[1].backgroundImage 
            &&
            document.getElementById("2").style.backgroundImage === jsonImages[2].backgroundImage 
            &&
            document.getElementById("3").style.backgroundImage === jsonImages[3].backgroundImage 
            &&
            document.getElementById("4").style.backgroundImage === jsonImages[4].backgroundImage 
            && 
            document.getElementById("5").style.backgroundImage === jsonImages[5].backgroundImage 
            &&
            document.getElementById("6").style.backgroundImage === jsonImages[6].backgroundImage 
            && 
            document.getElementById("7").style.backgroundImage === jsonImages[7].backgroundImage
            && 
            document.getElementById("8").style.backgroundImage === ""
        ) {
            alert("Congrats!! You've won the game");
            window.location.reload();
        } else {
            alert("Oops! Try again :D");
        }
    } else {
        alert("First start the game");
    }
}
