let stage = 1;      //to track the stage/question

function handleAnswer(answer) {
    if(answer === "yes") {
        showFinalMessage();
        return;
    }

    if(stage === 1) {
        stage = 2;
        updateQuestion(
            "Please think again..! 🥺",
            "https://media.tenor.com/ubjtdkQTtGUAAAAi/crying-twitter.gif"
        );
    } else if(stage === 2) {
        stage = 3;
        updateQuestion(
            "Please!!! 🥺🥺🥺",
            "https://media.tenor.com/HUJyzO0WfM4AAAAi/bubu-dudu.gif"
        );
        makeNoButtonRun();
    }
}

function updateQuestion(newText, newGif) {
    document.getElementById("question").innerText = newText;
    document.getElementById("gif").src = newGif;
}

function showFinalMessage() {
    document.body.innerHTML = `
    <div class="center">
        <img src="https://media.tenor.com/906nGAL7Xw0AAAAi/mochi-peachcat-cute-cat.gif"/>
        <h1 style="text-align:center; color: deeppink;">Yayyy! I knew you love me 😭</h1>
    </div>
    `;
}

function makeNoButtonRun() {
    const noBtn = document.getElementById("noBtn");
    noBtn.onmouseover = () => {
        const x = Math.floor(Math.random() * 200);
        const y = Math.floor(Math.random() * 100);
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y+ "px";

    };
}
