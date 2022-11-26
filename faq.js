const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!", 
  },
];

// const accordianBody=sglkj;
const faqs = [];

function showFaq() {
  
}

function createFaq() {
   
  
}

function btnStatusUpdate() {
  
}


faqData.forEach(element => {
 let questionTxt = document.createTextNode(element.question);
  let question = document.createElement("h3");
  
  
let Body= document.querySelector(".accordian_body");

let container= document.createElement("div");
container.className="faq"
let subContainer = document.createElement("div");
subContainer.className="faq_header"
let para = document.createElement("p");
let paraTxt = document.createTextNode(element.answer);
 para.className="hidden"
let btn = document.createElement("div");
btn.className=".show_btn";
btn.textContent="+";
btn.style.background="black";
btn.style.color="white";
btn.style.padding="1vw";
btn.style.borderRadius="50%"
btn.style.cursor="pointer "

question.appendChild(questionTxt);
container.appendChild(subContainer);
subContainer.appendChild(question);
subContainer.appendChild(btn);
Body.appendChild(container);
para.appendChild(paraTxt);
container.appendChild(para);

btn.addEventListener("click",active)
 

function active(){
  if(para.style.display==="none"){
    para.style.display="block"
  }
  else{
    para.style.display="none"
  }
}


});




