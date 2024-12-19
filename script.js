const btn = document.querySelector("button");


btn.addEventListener("click", () => {
    // Input fields
    const name = document.querySelector("#name").value; // Assuming this is for display
    const H = document.querySelector("#h").value;
    const L = document.querySelector("#l").value;
    const C = document.querySelector("#c").value;

    //Check input filed
    if(name=="" || H=="" || L=="" || C==""){
        alert("Fill all Input Box Please");
        return;
    }


    // Convert to numbers
    const h = parseFloat(H);
    const l = parseFloat(L);
    const c = parseFloat(C);

    // Validate inputs
    if (isNaN(h) || isNaN(l) || isNaN(c)) {
        console.error("Please enter valid numbers in all input fields.");
        return;
    }
    

    // Logging results
    let ans_p =calcP(h, l, c);
    let ans_r1 =R1(h, l, c);
    let ans_s1 =S1(h, l, c);
    let ans_r2 =R2(h, l, c);
    let ans_s2 =S2(h, l, c);

    //print
    const peint_name = document.querySelector(".name").textContent=`Calculation of ${name}`; // Assuming this is for display
    const peint_P = document.querySelector(".P").textContent=`P is : ${ans_p}`;
    const peint_1R = document.querySelector(".R1").textContent=`1R is : ${ans_r1}`;
    const peint_1S = document.querySelector(".S1").textContent=`1S is : ${ans_s1}`;
    const peint_2R = document.querySelector(".R2").textContent=`2R is : ${ans_r2}`;
    const peint_2S = document.querySelector(".S2").textContent=`2S is : ${ans_s2}`;
   
});

// Functions
function R1(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (2 * p) - l;
    return ans;
}

function S1(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (2 * p) - h;
    return ans;
}

function R2(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (p + h) - l;
    return ans;
}

function S2(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (p + l) - h;
    return ans;
}

function calcP(h, l, c) {
    const sum = h + l + c;
    const ans = sum / 3;
    return ans;
}



clear=document.querySelector("#clear");
clear.addEventListener("click",()=>{
    const name = document.querySelector("#name").value=""; // Assuming this is for display
    const H = document.querySelector("#h").value="";
    const L = document.querySelector("#l").value="";
    const C = document.querySelector("#c").value="";

    const peint_name = document.querySelector(".name").textContent=`Calculation of `; // Assuming this is for display
    const peint_P = document.querySelector(".P").textContent=`P `;
    const peint_1R = document.querySelector(".R1").textContent=`1R `;
    const peint_1S = document.querySelector(".S1").textContent=`1S `;
    const peint_2R = document.querySelector(".R2").textContent=`2R `;
    const peint_2S = document.querySelector(".S2").textContent=`2S `;


})