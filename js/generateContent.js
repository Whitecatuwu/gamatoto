async function generateContent() {
    const log2 = await loadLog2();
    const log3 = await loadLog3();
    const members = await loadMembers()

    const input = document.getElementById('userInput').value;
    const randomLog2 = log2[Math.floor(Math.random() * log2.length)];
    const randomLog3 = log3[Math.floor(Math.random() * log3.length)];
    const defaultInput = members[Math.floor(Math.random() * members.length)];

    const newText = document.createElement("div");
    const maxMessages = 100;
    const outputContainer = document.getElementById("output");

    newText.innerHTML += "<br>";

    if (!input) {
        newText.textContent = `${defaultInput}${randomLog2}${randomLog3}`;
    }
    else {
        newText.textContent = `${input}${randomLog2}${randomLog3}`;
    }
    outputContainer.prepend(newText);

    if (outputContainer.children.length > maxMessages) {
        outputContainer.removeChild(outputContainer.lastElementChild);
    }
    outputContainer.scrollTop = outputContainer.scrollHeight;
}

document.getElementById("generateContent").addEventListener('click', async () => {
    generateContent();
});

/*document.addEventListener('DOMContentLoaded', async () => {
});*/

