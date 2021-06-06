function a() {
    const comp = ["rock", "papper", "scissor"];
    computer();
    //user();

    function user() {
        const userinput = prompt("welcome to the game plz input rock or paper or scissor");
        return userinput


    }

    function computer() {
        const copinput = comp[Math.floor(Math.random() * comp.length)];
        console.log(copinput);



    }

    function game() {


    }
}