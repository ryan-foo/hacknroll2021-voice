// Content for en locales

const utils = require('./utils');

// Localized content for en-* locales

const utils = require('./utils');

module.exports = {
        GREETING: "Hello! Welcome to Quiz Lah. Please select if you are playing alone or with a friend.",
        GREETING_REPROMPT: "Hi! To play Quiz Lah...",

        SONG: {
            1: 'What is this song? <audio>',
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

        SKIPPING: "Ok, the correct answer was <>.",
        SCORE: `Your score is ${sessionAttributes.score[sessionAttributes.currentPlayer]}`, // string formatting here.

        CANCEL_AND_STOP: "Thanks for playing. Have fun!",

        SORRY: "Sorry, that's not one of the options. ",

        NOT_ANSWER: "That's not a valid answer. Don't know then say... ",

        HELP: "QUIZLAH", // TODO
        HELP_REPROMPT: "If you ever get stuck or lost in Quiz Lah and need to start over your experience say \"Alexa, start over.\"",

        YES_FALLBACK: "Sorry, I'm not sure what you're saying yes to. You can ask me to repeat what I said.",
        NO_FALLBACK: "Sorry, I'm not sure what you're saying no to. You can ask me to repeat what I said.",

        FALLBACK: "Sorry, I didn't catch that. Say that again please.",
        FALLBACK_REPROMPT: "Say that again please.",

        RESTART: "Alright, it's like we'll meet for the first time again! ",

        CURRENTLY_PLAYING: "You can't do that if you're playing a game. If you wish to start playing again, you can say 'Alexa, start over.'",
        NOT_PLAYING: "You're not currently playing a game. If you want to start a game, say 'Alexa, start over'.",

        ERROR: "Oh no! Looks like there was a problem. If you want to start from the beginning, say 'Alexa, start over.'",
        EXIT: "Thanks for playing Quiz Lah. Goodbye!",

        DISJUNCTION: "or"
        
};