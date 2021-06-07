function a() {
    for (let i = 1; i <= 5; i++) {
        const comp = ["rock", "papper", "scissor"];
        const u = user();
        const c = computer();
        const buttonr = document.querySelectorAll('.btn');

        //game();
        //computer();
        user();

        function user(userinput) {

            userinput = undefined;
            buttonr.forEach((buttonr) => {
                buttonr.addEventListener('click', () => {
                    userinput = buttonr.getAttribute('data-choice')
                    console.log(userinput);
                });
            });
            //userinput = prompt("welcome to the game plz input rock or paper or scissor");
            return userinput



        }

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
    }
}