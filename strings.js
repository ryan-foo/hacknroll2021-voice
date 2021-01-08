// Localized content for en-* locales

const utils = require('./utils');

module.exports = {
        // LAUNCH MESSAGES
        GREETING: "Hello! Welcome to Quiz Lah. Please select if you are playing alone or with a friend.",
        GREETING_REPROMPT: "Hi! To play Quiz Lah...",

        PLAYER_NUM: "How many of you are playing? One or two?",

        // GAME QUESTIONS
        SONG: {
            1: 'What is this song? <audio src = "https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/001_home.mp3">',
            2: '',
            3: '',
            4: ''
        },

        MOVIE: {
            1: 'What is this movie? <audio>',
            2: '',
            3: '',
            4: ''
        },

        PHRASE: {
            1: 'What does this phrase mean in English? <audio> These are the options...'
        },

        // RESPONSE TO USERS
        SKIPPING: "Ok, the correct answer was <>.",
        SCORE: `Your score is.`, // string formatting here.
        CORRECT: "Woohoo that's correct, you're doing great!",
        WRONG: "Sian you got it wrong! But nehmind at least now you know the answer.",
        QUESTION: "Let's get to the next question!",
        ANSWER_REPROMPT: "Don't give up leh! You can just make any guess.",
        CANCEL_AND_STOP: "Thanks for playing. Have fun!",

        SORRY: "Sorry, that's not one of the options. ",
        NOT_ANSWER: "That's not a valid answer. Don't know then say... ",

        // HELP MESSAGES
        HELP_INITIAL: "QUIZLAH",
        HELP_INITIAL_REPROMPT: "If you ever get stuck or lost in Quiz Lah and need to start over your experience say \"Alexa, start over.\"",

        HELP_GAMEPLAY: "",
        HELP_GAMEPLAY_REPROMPT: "",

        HELP_RESTART: "",
        HELP_RESTART_REPROMPT: "",

        HELP_END: "",
        HELP_END_REPROMPT: "",

        // FALLBACKS
        YES_FALLBACK: "Sorry, I'm not sure what you're saying yes to. You can ask me to repeat what I said.",
        NO_FALLBACK: "Sorry, I'm not sure what you're saying no to. You can ask me to repeat what I said.",

        FALLBACK: "Sorry, I didn't catch that. Say that again please.",
        FALLBACK_REPROMPT: "Say that again please.",

        // GAME STATE CHANGES
        RESTART: "Alright, it's like we'll meet for the first time again! ",

        CURRENTLY_PLAYING: "You can't do that if you're playing a game. If you wish to start playing again, you can say 'Alexa, start over.'",
        NOT_PLAYING: "You're not currently playing a game. If you want to start a game, say 'Alexa, start over'.",

        // ERROR MESSAGES
        ERROR: "Oh no! Looks like there was a problem. If you want to start from the beginning, say 'Alexa, start over.'",
        EXIT: "Thanks for playing Quiz Lah. Goodbye!",

        DISJUNCTION: "or"
};