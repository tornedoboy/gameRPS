const buttons = document.querySelectorAll('.btn');
const comp = ["rock", "papper", "scissor"];
const u = user();
const c = computer();




//game();
//computer();
//user();

function user() {
    let userinput;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userinput = button.getAttribute("data")
        });
    });

    //const button = document.querySelectorAll('.btn');
    console.log(userinput)

}
//userinput = prompt("welcome to the game plz input rock or paper or scissor");
//return userinput





function computer(copinput) {
    copinput = comp[Math.floor(Math.random() * comp.length)];
    return copinput



}

function game()

{
    if (u === c) {
        alert("draw" + ' ' + 'computer input' + '  ' + c + ' ' + 'user input' + ' ' + u);

    } else if (u === "scissor") {

        if (c === 'rock') {
            alert('computer wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);

        } else {
            alert('user wins' + ' ' + 'computer input' + '  ' + c + ' ' + 'user input' + ' ' + u);

        }

    } else if (u === "rock") {
        //alert('computer wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);
        if (c === "paper") {
            alert('user wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);

        } else {
            alert('computer wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);

        }


    } else if (u === "paper") {
        //alert('computer wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);
        if (c == 'sicssor') {
            alert('computer wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);

        } else {
            alert('user wins' + ' ' + 'computer input' + '  ' + c + 'user input' + ' ' + u);

        }




    }

}