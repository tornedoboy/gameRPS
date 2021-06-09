function ab() {
    const comp = ["rock", "paper", "scissor"];

    const buttons = document.querySelectorAll('.btn');
    let userinput = undefined;
    buttons.forEach((opt) => {
        opt.addEventListener('click', () => {
            userinput = opt.getAttribute('data-choice');
            console.log(userinput)

            //function run() {
            // for (i = 1; i < 5; i++) {
            game();
            // };
            //}
        });
    });


    function computer(copinput) {
        copinput = comp[Math.floor(Math.random() * comp.length)];
        return copinput

    }

    function game()


    {

        const c = computer();
        if (userinput === c) {
            alert("draw" + ' ' + 'computer input -' + '  ' + c + ' ' + ' user input -' + ' ' + userinput);

        } else if ((userinput === "scissor" && c === "paper") ||
            (userinput === "rock" && c === "scissor") ||
            (userinput === "paper" && c === "rock"))

        {
            alert('player wins' + ' ' + 'computer input -' + '  ' + c + ' user input -' + ' ' + userinput);



        } else {
            alert('computer wins' + ' ' + 'computer input -' + '  ' + c + ' user input -' + ' ' + userinput);

        }


    }
}
