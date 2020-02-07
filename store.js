const STORE = {
    questions: [
        {
        //1
        question: "Which sauce is not vegan?",
        choices: [
            "Tabasco",
            "Sriracha", 
            "Valentina",
            "Soy Sauce",
            "Ketchup",
        ],
        answer:"Sriracha",
        answerCorrect: "Correct! Sriracha contains sugar that has been filtered by bone char.",
        answerIncorrect: "Sorry that is the incorrect answer. The correct answer is Sriracha. Siracha contains sugar processed with bone char!" 
        },
        //2
        {
        question: "How many gallons of water do you save a day if you go vegan?",
        choices: [
            "500 gallons",
            "700 gallons", 
            "100 gallons",
            "1,100 gallons"   
        ],
        answer: "1,100 gallons",
        answerCorrect: "Correct! Think about all that water!",
        answerIncorrect: "Sorry that is the incorrect answer. The correct answer is 1,100 gallons.  Quite a lot, huh?" 
        },
        //3
        {
        question: "Which of these celebrities are vegan?",
        choices: [
            "Arnold Schwarzenegger",
            "Benedict Cumberbatch", 
            "Beyonce",
            "All of the above"
            ],
            answer: "All of the above", 
            answerCorrect: "Correct! There are a lot more too!",
            answerIncorrect: "Sorry that is the incorrect answer. Each one of them maintains a plant-based diet, so all of the above is the correct answer." 
            },
        //4
        {
        question: "The meat industry emits more greenhouse gases than all _______ in the world combined",
        choices: [
            "the factories",
            "agriculture", 
            "deforestaion practices",
            "transportation"
            ],
            answer: "transportation",
            answerCorrect: "Correct! It emits more than all the cars, trucks, and other forms of transportation in the world combined!",
            answerIncorrect: "Sorry that is the incorrect answer. The correct answer is transportation. Wow!"
            },
        //5
        {
            question: "Researchers at the University of Oxford found that cutting meat and dairy products from your diet could reduce an individual's carbon footprint from food by up to what percent?",
            choices: [
            "57%",
            "23%", 
            "73%",
            "12%"
            ],
            answer: "73%",
            answerCorrect: "Correct!!!!",
            answerIncorrect: "Sorry that is the incorrect answer. The correct answer is 73%."  
            },

    ],
    currentQuestion: 0,
    correct: 0,
    incorrect: 0   
};