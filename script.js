const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genius", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who create you", "who make you", "who is your creator", "who made you"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself", "what's your name"],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    ["what is html", "what is css", "what is html and css", "html definition", "css definition"],
    ["what is a variable?","what is variable?", "define a variable", "define variable", "what is variable in programming"],
    ["what is a function?", "define a function", "what is function in programming"],
    ["what is an array?", "define an array", "what is array in programming"],
    ["what is a loop?", "define a loop", "what is loop in programming"],
    ["what is a conditional statement?", "define a conditional statement", "what is conditional statement in programming"],
    ["what is a class?", "define a class", "what is class in programming"],
    ["what is inheritance?", "define inheritance", "what is inheritance in programming"],
    ["what is polymorphism?", "define polymorphism", "what is polymorphism in programming"],
    ["what is encapsulation?", "define encapsulation", "what is encapsulation in programming"],
    ["what is abstraction?", "define abstraction", "what is abstraction in programming"],
];

const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
    ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Bilal Fazul"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    ["HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.", 
     "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on the screen."],
    ["A variable is a container for storing data in a program. It has a name and a value.", "Variables are used to store data that can be referenced and manipulated in a program."],
    ["A function is a block of organized, reusable code that performs a specific task.", "Functions allow for code reuse and modular programming."],
    ["An array is a data structure that stores a collection of elements, typically of the same type.", "Arrays allow for the storage and manipulation of multiple values under a single variable name."],
    ["A loop is a programming construct that repeats a block of code until a certain condition is met.", "Loops are used to automate repetitive tasks in a program."],
    ["A conditional statement is a programming construct that performs different actions based on whether a specified condition evaluates to true or false.", "Conditional statements allow for decision-making in a program based on certain conditions."],
    ["A class is a blueprint for creating objects in object-oriented programming.", "Classes define the properties and behaviors that objects of the class type will have."],
    ["Inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and behaviors from another class.", "Inheritance promotes code reuse and supports the concept of hierarchical classification."],
    ["Polymorphism is a feature in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass.", "Polymorphism allows for the implementation of methods in subclasses that override methods in the superclass."],
    ["Encapsulation is a concept in object-oriented programming that binds together the data and functions that manipulate the data, and keeps them safe from outside interference.", "Encapsulation promotes data hiding and modular design."],
    ["Abstraction is a concept in object-oriented programming that refers to the process of hiding the complex implementation details and showing only the essential features of an object.", "Abstraction allows for the creation of simplified models that represent real-world objects and systems."],
];




const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
];

const synth = window.speechSynthesis;

function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = inputField.value.trim();
            input != "" && output(input);
            inputField.value = "";
        }
    });
});

function output(input) {
    let product;

    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
        .replace(/[\W_]/g, " ")
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .trim();

    let comparedText = compare(userMessage, botReply, text);

    product = comparedText
        ? comparedText
        : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == string) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    if (item) return item;
    else return containMessageCheck(string);
}

function containMessageCheck(string) {
    let expectedReply = [
        ["Good Bye, dude", "Bye, See you!", "Dude, Bye. Take care of your health in this situation."],
        ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
        ["Have a pleasant evening!", "Good evening too", "Evening!"],
        ["Good morning, Have a great day!", "Morning, dude!"],
        ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
        ["bye", "tc", "take care"],
        ["night", "good night"],
        ["evening", "good evening"],
        ["morning", "good morning"],
        ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
        if (expectedMessage[x].includes(string)) {
            items = expectedReply[x];
            item = items[Math.floor(Math.random() * items.length)];
        }
    }
    return item;
}

function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
}
