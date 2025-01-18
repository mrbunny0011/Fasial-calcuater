const btn = document.querySelector(".sub");


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
    //Center result
    let ans_C_of_P_1R=C_of_P_1R(ans_p,ans_r1);
    let ans_C_of_P_1S=C_of_P_1S(ans_p,ans_s1);
    let ans_C_of_1R_2R=C_of_1R_2R(ans_r1,ans_r2);
    let ans_C_of_1S_2S=C_of_1S_2S(ans_s1,ans_s2);
    

    //print
    const peint_name = document.querySelector(".name").textContent=`Calculation of ${name}`; // Assuming this is for display
    const peint_P = document.querySelector(".P").textContent=` ${ans_p}`;
    const peint_1R = document.querySelector(".R1").textContent=` ${ans_r1}`;
    const peint_1S = document.querySelector(".S1").textContent=` ${ans_s1}`;
    const peint_2R = document.querySelector(".R2").textContent=` ${ans_r2}`;
    const peint_2S = document.querySelector(".S2").textContent=` ${ans_s2}`;

    const peint_ans_C_of_P_1R = document.querySelector(".c_of_p_r1").textContent=` ${ans_C_of_P_1R}`;
    const peint_ans_C_of_P_1S = document.querySelector(".c_of_p_s1").textContent=` ${ans_C_of_P_1S}`;
    const peint_ans_C_of_1R_2R = document.querySelector(".c_of_r1_r2").textContent=` ${ans_C_of_1R_2R}`;
    const peint_ans_C_of_1S_2S = document.querySelector(".c_of_s1_s2").textContent=` ${ans_C_of_1S_2S}`;
   
   
});


// finding center of Numbers Functions
function C_of_P_1R(p,R1){

    let ans= (p+R1)/2;
    return ans;
}

function C_of_P_1S(p,S1){
    let ans= (p+S1)/2;
    return ans;
}

function C_of_1R_2R(R1,R2){
    
    let ans= (R1+R2)/2;
    return ans;
}

function C_of_1S_2S(S1,S2){
    let ans= (S1+S2)/2;
    return ans;
}


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
    const peint_P = document.querySelector(".P").textContent=``;
    const peint_1R = document.querySelector(".R1").textContent=``;
    const peint_1S = document.querySelector(".S1").textContent=``;
    const peint_2R = document.querySelector(".R2").textContent=``;
    const peint_2S = document.querySelector(".S2").textContent=``;

    const peint_ans_C_of_P_1R = document.querySelector(".c_of_p_r1").textContent=``;
    const peint_ans_C_of_P_1S = document.querySelector(".c_of_p_s1").textContent=``;
    const peint_ans_C_of_1R_2R = document.querySelector(".c_of_r1_r2").textContent=``;
    const peint_ans_C_of_1S_2S = document.querySelector(".c_of_s1_s2").textContent=``;
   

})



// Light and Dark mood 
let input = document.querySelectorAll("input")
let spans=document.querySelectorAll("span");
let body=document.querySelector("body");
let mod_btn=document.querySelector(".mod");
let mod="light"
mod_btn.addEventListener("click",()=>{
    if(mod === "dark"){
        mod_btn.textContent="Dark Mode";
        mod_btn.style.backgroundColor="black";
        mod_btn.style.color="white";
        body.style.backgroundColor="white";
        body.style.color="black";
        
        spans.forEach((e)=>{
            e.classList.remove("dark");
            e.classList.add("light");

        })

        input.forEach((e)=>{
            e.classList.remove("dark");
            e.classList.add("light");

        })


        mod="light";
    }else{
        mod_btn.textContent="Light Mode";
        mod_btn.style.backgroundColor="white";
        mod_btn.style.color="black";
        body.style.backgroundColor="rgb(25, 25, 25)";
        body.style.color="white";

        spans.forEach((e)=>{
            e.classList.remove("light");
            e.classList.add("dark")
        })

        input.forEach((e)=>{
            e.classList.remove("dark");
            e.classList.add("light");

        })
       
        mod="dark";
    }

})