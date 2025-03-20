async function generateContent() {
    const log2 = await loadLog2();
    const log3 = await loadLog3();
    const members = await loadMembers();
    const maxMessages = 100;
    const outputContainer = document.getElementById("output");

    function _generate() {
        const input = document.getElementById('userInput').value;
        const randomLog2 = log2[Math.floor(Math.random() * log2.length)];
        const randomLog3 = log3[Math.floor(Math.random() * log3.length)];
        const defaultInput = members[Math.floor(Math.random() * members.length)];

        const newText = document.createElement("div");
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
    return _generate;
}

document.addEventListener('DOMContentLoaded', async () => {
    const generateText = await generateContent();
    document.getElementById("generateContent").addEventListener('click', generateText);
});







