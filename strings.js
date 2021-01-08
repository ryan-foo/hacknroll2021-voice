// Localized content for en-* locales

const utils = require('./utils');

module.exports = {
        // LAUNCH MESSAGES
        GREETING: "Hello! Welcome to Quiz Lah, the best test of how Singaporean you truly are! Are you playing with one person, or two?",
        GREETING_REPROMPT: "Hi! To play Quiz Lah...",

        // GAME QUESTIONS
        SONG: {
            1: "<audio src='https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/001_home.mp3' /> What is the name of the song?",
            2: "<audio src='https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/002_save_my_world.mp3' /> What is the name of the song?",
            3: "<audio src='https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/003_singapore_town.mp3' /> What is the name of the song?",
            4: "<audio src='https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/004_i_wouldnt_know_any_better_than_you.mp3' /> What is the name of the song?",
            5: "<audio src='https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Songs/005_room_at_the_table.mp3' /> What is the name of the song?"
        },

        MOVIE: {
            1: 'What is this movie? <audio />',
            2: '',
            3: '',
            4: ''
        },

        PHRASE: {
            1: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/001_walau_eh.mp3" /> Which of the following options is the most appropriate translation?',
            2: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/002_jialat.mp3" /> Which of the following options is the most appropriate translation?',
            3: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/003_eeeee.mp3" /> Which of the following options is the most appropriate translation?',
            4: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/004_chey.mp3" /> Which of the following options is the most appropriate translation?',
            5: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/005_choy.mp3" /> Which of the following options is the most appropriate translation?',
            6: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/006_dey.mp3" /> Which of the following options is the most appropriate translation?',
            7: '<audio src="https://quizlah.s3-ap-southeast-1.amazonaws.com/Questions/Phrases/007_atas.mp3" /> Which of the following options is the most appropriate translation?'
        },

        START: "Alright, let's start!",
        QUESTION_1: "Category one -- guess the song from a short clip. Here's the song: ",
        QUESTION_2: ". Heres the next song: ",
        QUESTION_3: "New category! How well do you know Singaporean movies? Here's a clip, tell us the movie: ",
        QUESTION_4: ". You know the drill. Guess the movie: ",
        QUESTION_5: "Finally, test your knowledge of Singlish. We will play you a short audio clip of a Singlish phrase, and give you a few options. Pick the correct one to win! The phrase is ",
        QUESTION_6: ". Last question! Don't play play hor -- what's your guess? The phrase is ",

        PLAYER_1: "Now it's player one's turn ",
        PLAYER_2: "Okay, player two, you're up",
        AGAIN: "again",

        // RESPONSE TO USERS
        SKIPPING: "Ok, the correct answer was ",
        SCORE: `Your score is.`, // string formatting here.
        CORRECT: "Woohoo that's correct, you're doing great!",
        WRONG: "Sian you got it wrong! But nehmind at least now you know the answer.",
        QUESTION: "Let's get to the next question!",
        ANSWER_REPROMPT: "Don't give up leh! You can just make any guess.",
        CANCEL_AND_STOP: "Thanks for playing. Have fun!",
        WIN: "Huat ah, we have a winner with a score of ",
        WINNER: ". Congrats",
        SINGLE_END: "Huat ah, you have reached the end of the game with a score of ",
        END: "! Thank you for playing QuizLah, have a great day ahead!",

        SORRY: "Sorry, that's not one of the options. ",
        NOT_ANSWER: "That's not a valid answer. Don't know then say... ",

        // HELP MESSAGES
        HELP_INITIAL: "Quiz Lah is a game where you guess the correct answers to Singapore trivia such as songs and movies. You can choose how many players are playing, either one or two.",
        HELP_RESTART: "Thank you for playing Quiz Lah! We hope you have enjoyed the game. If you want to play again, say 'Alexa, start new game'",
        HELP_REPROMPT: "If you ever get stuck or lost in Quiz Lah and need to start over, say 'Alexa, start over.'",

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