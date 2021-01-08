# hacknroll2021-voice
Voice game / app for NUS Hack&amp;Roll 2021

Strings.js is for speech responses. Contains an object where you can look up the response as a string / SSML and return accordingly. I.E: this is what you will look up to say 'hey, I want Alexa to say this to the user!'

TriviaExampleIndex.js is the example index.js from https://github.com/alexa/skill-sample-nodejs-trivia/blob/en-US/instructions/2-lambda-function.md. It is very messy and has all the handlers and responses in one spot, but it serves as an example when stuck on trivia-like mechanics.

Utils.js contains all utility functions and scoring required.

en-US.json should contain the final JSON interaction model with all answers (and their IDs).

# States

state: ['INITIAL', 'GAME_STARTED', 'PLAY_AGAIN', 'ENDED']\
player: 1 : [1,2]\
lastUtterance: String\
question: 1 : [1,2,3]\
score: [10, 50]\
currentPlayer: [1,2]\
round: [1,2,3]: which category?