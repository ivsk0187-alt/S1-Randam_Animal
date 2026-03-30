
const animals = [
    { src: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Horse.png", width: 70 },
    { src: "https://www.pngall.com/wp-content/uploads/19/Stardew-Valley-Cat-Sitting-Under-Tree-PNG.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Dog_1.png", width: 50 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/e/e9/Turtle.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/3/38/Duck.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/f/fd/Rabbit.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/6/61/Blue_Chicken.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/3/3e/Brown_Cow.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/5/52/Goat.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Sheep.png", width: 70 },
    { src: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Ostrich.png", width: 70 }

];

function spin() {
    let count = 0;
    const maxCount = 20;
    let intervalTime = 20;

    function spinStep() {
        const randomIndex = Math.floor(Math.random() * animals.length);
        const img = document.getElementById("slotImage");

        img.src = animals[randomIndex].src;
        img.style.width = animals[randomIndex].width + "px";
        img.style.height = "auto";


        count++;
        intervalTime += 20;
        if (count <= maxCount) {
            setTimeout(spinStep, intervalTime);
        } else {

            const animalName = animals[randomIndex].src.split("/").pop().split(".")[0];
            const info = animalFacts[animalName] || "No info available.";
            const half = Math.ceil(info.length / 2);

            const splitIndex = info.lastIndexOf(" ", half);

            const leftText = info.slice(0, splitIndex)
            const rightText = info.slice(splitIndex + 1);

            document.getElementById("animalTextLeft").innerText = leftText;
            document.getElementById("animalTextRight").innerText = rightText;
        }
    }

    spinStep();
}

window.onload = function () {
    const btn = document.getElementById('spinBtn');
    const slotImage = document.getElementById("slotImage");

    btn.addEventListener("click", () => {
        slotImage.style.display = "block";
        btn.style.display = "none";
        spin();
    });
};


const animalFacts = {
    "Horse": "A horse is a gentle and powerful companion, known for its grace and loyalty. With soft eyes and a flowing mane, it can run across fields like the wind, carrying freedom in every step. Horses love open spaces, fresh air, and forming deep bonds with those who care for them. They are calm, intelligent, and have been trusted friends of humans for centuries.",
    "Cat_2": "Cats are soft, curious, and full of personality. They love to explore cozy corners, nap in sunny spots, and quietly observe the world around them. Even though they can be independent, they show affection in their own special ways — a gentle purr, a soft nudge, or curling up beside you.",
    "Dog_1": "Dogs are loyal, loving, and full of joy. They wag their tails when they see you and always seem to understand your feelings. Whether they are playing, running, or just sitting by your side, dogs bring warmth and happiness wherever they go. They are not just pets, they are true best friends.",
    "Turtle": "Turtles are calm and peaceful creatures that move at their own slow and steady pace. They carry their little homes on their backs and remind us that there is no need to rush. With quiet wisdom and patience, turtles enjoy life in a simple and gentle way.",
    "Duck": "Ducks are cheerful and playful animals that love water. They waddle around in the cutest way and make funny quacking sounds. Whether swimming in a pond or exploring grassy areas, ducks always seem to be having a good time with their friends.",
    "Rabbit": "Rabbits are soft, fluffy, and full of energy. They hop around happily and twitch their tiny noses in the most adorable way. They love to nibble on greens and explore their surroundings, always bringing a sense of warmth and cuteness wherever they go.",
    "Snail": "Snails may be small and slow, but they are fascinating in their own way. Carrying their shell like a tiny house, they explore the world at their own pace. They remind us that even slow progress is still progress, and that life does not need to be rushed.",
    "Blue_Chicken": "Chickens are lively and curious animals that love to explore and peck around. They make funny sounds and move in quick little steps, always busy doing something. They are simple, cheerful creatures that bring life and energy wherever they are.",
    "Brown_Cow": "Cows are gentle and peaceful animals that spend their days calmly grazing in green fields. They move slowly, enjoy quiet moments, and have a very soothing presence. With their big eyes and relaxed nature, cows bring a feeling of calm and simplicity.",
    "Goat": "Goats are playful, curious, and full of personality. They love to climb, jump, and explore everything around them. Always energetic and a little mischievous, goats bring a lot of fun and excitement wherever they go.",
    "Sheep": "Sheep are soft, gentle, and peaceful animals that love staying together in groups. Their fluffy wool and calm nature make them incredibly comforting to watch. They enjoy quiet fields and simple moments, living a relaxed and cozy life.",
    "Ostrich": "Ostriches are large and fascinating birds with long legs and incredible speed. Even though they cannot fly, they can run very fast and explore wide open spaces. They are unique, a little funny-looking, and truly unforgettable animals."
};

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {
        document.body.style.backgroundColor = "";

        themeBtn.style.backgroundImage = 'url("https://i.imgur.com/JPsmZE6.png")'; //sun
        themeBtn.classList.add("sun");

    } else {
        themeBtn.style.backgroundImage = 'url("https://i.imgur.com/mF8Awj8.png")'; //moon
        themeBtn.classList.remove("sun");
    }
});


const bgBtn = document.getElementById("change-background");

const lightColors = [
    "#FDE2E4",
    "#FDE8CD",
    "#FFF9B0",
    "#CFFFE5",
    "#D0F0FD",
    "#E5D0FD",
    "#FFD0F0",
    "#CDE6FD"
];

const darkColors = [
    "#6b5b73",
    "#5a6c7d",
    "#5f7a6b",
    "#7a5f6b",
    "#4f5d75",
    "#6d6875",
    "#5a5a72"
];

bgBtn.addEventListener("click", () => {

    let colors;

    if (document.body.classList.contains("dark")) {
        colors = darkColors;
    } else {
        colors = lightColors;
    }

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
