let images = ["dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png"
];
let dice = document.querySelectorAll("img")

function roll() {
    dice.forEach(function (die) {
        die.calssList.add("shake");
    });

    setTimeout(function () {
        dice.forEach(function (die) {
            die.calssList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelectorAll("#die-1").setAttribute("src", images[dieOneValue]);

        document.querySelectorAll("#die-2").setAttribute("src", images[dieTwoValue]);
        


    },
        1000
    );
}


