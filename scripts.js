function ab() {

    const comp = ["rock", "paper", "scissor"];
    let moves_left = 5;
    let playerscr = 0;
    let computerscr = 0;
    let pwin = "GAME OVER  Player wins";
    let cwin = "GAME OVER  Computer wins";



    const buttons = document.querySelectorAll('.btn');
    let userinput = undefined;
    buttons.forEach((opt) => {
        opt.addEventListener('click', () => {
            userinput = opt.getAttribute('data-choice');
            //console.log(userinput)


            game();

        });
    });

    function results() {
        let m = moves_left;
        if (m == 0) {
            if (playerscr > computerscr) {


                document.getElementById('hello').setAttribute("style", "visibility:hidden");
                document.getElementById('bye').setAttribute("style", "visibility:hidden");
                document.getElementById('hi').setAttribute("style", "visibility:hidden");

                document.getElementById('end').innerHTML = pwin;

                //alert('game over   player wins')
            } else {

                document.getElementById('hello').setAttribute("style", "visibility:hidden");
                document.getElementById('bye').setAttribute("style", "visibility:hidden");
                document.getElementById('hi').setAttribute("style", "visibility:hidden");
                document.getElementById('end').innerHTML = cwin;
                //alert('game over computer wins')
            }


        } else {
            alert('keep playing ' + 'Moves left -' + m)
        }

    }

    function computer(copinput) {
        copinput = comp[Math.floor(Math.random() * comp.length)];
        return copinput

    }

    function game()


    {
        const c = computer();



        if (userinput === c) {
            alert("draw" + ' ' + 'computer input -' + '  ' + c + ' ' + ' user input -' + ' ' + userinput);
            results();

        } else if ((userinput === "scissor" && c === "paper") ||
            (userinput === "rock" && c === "scissor") ||
            (userinput === "paper" && c === "rock"))

        {
            playerscr++;
            moves_left--;
            document.getElementById("ply").innerHTML = playerscr;
            document.getElementById("mov").innerHTML = moves_left;
            console.log('ply ' + playerscr)
            console.log('mov ' + moves_left)
            alert('player wins' + ' ' + 'computer input -' + '  ' + c + ' user input -' + ' ' + userinput);
            results();



        } else {
            computerscr++;
            moves_left--;
            document.getElementById("com").innerHTML = computerscr;
            document.getElementById("mov").innerHTML = moves_left;
            console.log('com ' + computerscr)
            console.log('mov ' + moves_left)
            alert('computer wins' + ' ' + 'computer input -' + '  ' + c + ' user input -' + ' ' + userinput);
            results();

        }



    }
}
