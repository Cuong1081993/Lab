"use strict";

const poll = {
    question: "What is your favourite programming language? ",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        let asn = Number(prompt(`${this.question}\n${this.options.join('\n')}\n\n(Write option number)`)
        );
        while(!isFinite(asn) || asn < 0 || asn >3){
            alert("Vui lòng chọn 1 giá trị số nguyên nằm trong khoảng  0 và 3");
            asn = Number(prompt(`${this.question}\n${this.options.join('\n')}\n\n(Write option number)`))
        }
        this.answers[asn]++;
    },
    displayResults(type="array"){
        if(type==="string"){
            console.log(`Poll results are ${this.answers.join(",")}`);
        }else if(type === "array"){
            console.log(this.answers);
        }
    }
};

const pollBtn = document.querySelector(".poll");
pollBtn.addEventListener("click", function(){
    poll.registerNewAnswer.call(poll);
    poll.displayResults.call(poll);
});

const ans1 = {
    answers: [5,2,3]
}
const ans2 = {
    answers: [1,6,3,2,5,7]
}

poll.displayResults.call(ans1);
poll.displayResults.call(ans1,"string");
poll.displayResults.call(ans2);
poll.displayResults.call(ans2,"string");

