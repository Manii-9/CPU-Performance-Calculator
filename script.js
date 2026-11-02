
function calculateCPUTime() {
    let ic = Number(document.getElementById("instructionCount").value);
    let cpi = Number(document.getElementById("cpi").value);
    let clock = Number(document.getElementById("clockRate").value);

    if (ic <= 0 || cpi <= 0 || clock <= 0) {
        document.getElementById("cpuResult").innerText = "Please enter valid numbers";
        return;
    }

    let time = (ic * cpi) / (clock * 1000000);

    document.getElementById("cpuResult").innerText =
        "CPU Time: " + time + " seconds";
}

function calculateAverageCPI() {
    let cpi = Number(document.getElementById("avgCPI").value);

    if (cpi <= 0) {
        document.getElementById("avgResult").innerText = "Please enter valid CPI";
        return;
    }

    document.getElementById("avgResult").innerText =
        "Average CPI: " + cpi;
}

function calculateMIPS() {
    let cpi = Number(document.getElementById("mipsCPI").value);
    let clock = Number(document.getElementById("mipsClock").value);

    if (cpi <= 0 || clock <= 0) {
        document.getElementById("mipsResult").innerText = "Please enter valid numbers";
        return;
    }

    let mips = clock / cpi;

    document.getElementById("mipsResult").innerText =
        "MIPS Rate: " + mips;
}

function compareCPU() {
    let cpu1 = Number(document.getElementById("cpu1").value);
    let cpu2 = Number(document.getElementById("cpu2").value);

    if (cpu1 <= 0 || cpu2 <= 0) {
        document.getElementById("compareResult").innerText = "Please enter valid CPU times";
        return;
    }

    if (cpu1 < cpu2) {
        document.getElementById("compareResult").innerText =
            "CPU 1 is faster by " + (cpu2 / cpu1) + " times";
    } else if (cpu2 < cpu1) {
        document.getElementById("compareResult").innerText =
            "CPU 2 is faster by " + (cpu1 / cpu2) + " times";
    } else {
        document.getElementById("compareResult").innerText =
            "Both CPUs have equal performance";
    }
}
