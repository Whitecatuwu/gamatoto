async function loadCSV(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`無法加載文件: ${filePath}`);
        }
        const text = await response.text();
        return text;
        //return text.trim().split("\n").map(line => line.split("|")[0].trim());
    } catch (error) {
        //console.error(error);
        //alert(`讀取 ${filePath} 失敗，請檢查路徑或檔案是否存在。`);
        return [];
    }
}

async function loadMembers() {
    const text = await loadCSV("GamatotoExpedition_Members_name_tw.csv");
    return text.trim()
        .split("\n")
        .map(line => line.split("|")[3])
        .filter(item => item !== "＠" && item !== null && item !== undefined);
}

async function loadLog2() {
    const text = await loadCSV("GamatotoExpedition_Log_2_tw.csv");
    return text.trim()
        .split("\n")
        .map(line => line.split("|")[0].trim())
        .filter(item => item !== "@" && item !== null && item !== undefined);
}

async function loadLog3() {
    const text = await loadCSV("GamatotoExpedition_Log_3_tw.csv");
    return text.trim()
        .split("\n")
        .map(line => line.split("|")[0].trim())
        .filter(item => item !== "＠" && item !== null && item !== undefined);
}