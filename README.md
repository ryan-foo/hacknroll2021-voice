# QuizLah!

![QuizLah Icon](https://github.com/ryan-foo/hacknroll2021-voice/blob/main/icons/icon_512_A2Z.png?raw=true)

## Description

QuizLah is a voice game designed for NUS Hack&Roll 2021. You can start a quiz with Alexa, where you'll be tested on your knowledge of three things Singaporean: Singaporean movies, NDP, and most importantly, your knowledge of SINGLISH! Challenge a friend to play against you, and see who truly gets Singapore~

## Inspiration

We were talking about games. Voice games are cool. Trivia is cool. Singapore is amazing. We loved the sound of Singlish, so why not allow people to play it on the go?

Voice is an exciting and interesting new interface to explore. What better way to do that than by hacking together a voice game? And what's more interesting to us Singaporeans, than Singapore?

## Technical Details

index.js is the entry point for Alexa. The skill is built, and we load up all our favorite handlers so we can handle any possible intents. ~~(even the bad ones hahaha)~~

Strings.js is for speech responses. Contains an object where you can look up the response as a string / SSML and return accordingly. I.E: this is what you will look up to say 'hey, I want Alexa to say this to the user!'

TriviaExampleIndex.js is the example index.js from [the Alexa skill sample](https://github.com/alexa/skill-sample-nodejs-trivia/blob/en-US/instructions/2-lambda-function.md). It has all the handlers and responses in one file, but it serves as an example when stuck on trivia-like mechanics.

Utils.js contains all utility functions and scoring required. This includes getting IDs from the Alexa JSON responses, resetting state, etc. These functions are used across multiple handlers.

interaction_models/custom/en-US.json should contain the final JSON interaction model with all answers (and their IDs). We can also extend to localize to different languages if we plan to launch a similar game internationally.

Handlers talk about themselves in the text body, but if you are interested you can read more about the Alexa Skills Kit framework [here](https://developer.amazon.com/en-US/alexa/alexa-skills-kit?).

# States

These are the states used to manage the game. More accurately, sessionAttributes is how the state of the session gets stored. This is subject to change depending on the developers' needs.

state: ['INITIAL', 'GAME_STARTED', 'PLAY_AGAIN', 'ENDED']\
player: 1 : [1,2]\
lastUtterance: String\
currentQuestion: 1 : [1,2, ..]\ Incrementing count\
questions: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]\ Randomly selected in length\ 
score: [10, 50]\
currentPlayer: [1,2]\
round: [1,2,3]\ which category\

# Icon Builder

https://developer.amazon.com/docs/tools/icon-builder.html