// Localized content for en-* locales

const utils = require('./utils');

module.exports = {
        GREETING: "Hello! Welcome to Quiz Lah, the best test of how Singaporean you truly are! Judge songs, Are you playing with one person, or two?",
        GREETING_REPROMPT: "Hi! To play Quiz Lah...",

        PLAYER_NUM: "How many of you are playing? One or two?",

        SONG: {
            1: "<audio src='https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/001_home.mp3'/>",
            2: '<audio src="soundbank://soundlibrary/alarms/chimes_and_bells/chimes_bells_06"/>',
            3: '',
            4: ''
        },

        MOVIE: {
            1: 'What is this movie?',
            2: '',
            3: '',
            4: ''
        },

        PHRASE: {
            1: '<INSERT AUDIO HERE> These are the options...'
        },

        QUESTION_1: "Alright! Category one -- guess the song from a short clip. Here's the song: ",
        QUESTION_2: "Here's the song: ",
        QUESTION_3: "New category! ",
        QUESTION_4: "", 
        QUESTION_5: "Finally, test your knowledge of Singlish. We will play you a short audio clip of a Singlish phrase, and give you a few options. Pick the correct one to win! The phrase is ",
        QUESTION_6: "",

        PLAYER_1: "Okay, now it's player one's turn. ",
        PLAYER_2: "Okay, player two, you're up. ",

        SKIPPING: "Ok, the correct answer was <>.",
        SCORE: `Your score is.`, // string formatting here.
        CORRECT: "Woohoo that's correct, you're doing great!",
        WRONG: "Sian you got it wrong! But nehmind at least now you know the answer.",
        QUESTION: "Let's get to the next question!",
        ANSWER_REPROMPT: "Don't give up leh! You can just make any guess.",
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