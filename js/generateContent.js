async function generateContent() {
    const log2 = await loadLog2();
    const log3 = await loadLog3();
    const members = await loadMembers()
    const input = document.getElementById('userInput').value;
    const randomLog2 = log2[Math.floor(Math.random() * log2.length)];
    const randomLog3 = log3[Math.floor(Math.random() * log3.length)];
    const defaultInput = members[Math.floor(Math.random() * members.length)];

    if (!input) {
        document.getElementById('output').textContent = `${defaultInput}${randomLog2}${randomLog3}`;
    }
    else {
        document.getElementById('output').textContent = `${input}${randomLog2}${randomLog3}`;
    }
}

document.getElementById("generateContent").addEventListener('click', async () => {
    generateContent();
});

