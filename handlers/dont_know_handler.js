const strings = require('../strings');
const utils = require('../utils');

/** Don't Know Intent Handler
 * The Don't Know Handler is responsible when the player wants to skip the question.
 * This will be as if they answered the question wrongly. It will increment the state to the next round,
 * or possibly to the next player. This code will be taken from the Answer Handler.
 */

module.exports = {
    canHandle(handlerInput) {
  
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'DontKnowIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallBackIntent');
    },
    
    handle(handlerInput) {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const cats = ['SONG', 'MOVIE', 'PHRASE'];
      // const slots = handlerInput.requestEnvelope.request.intent.slots.answer; (no slots in don't know so it throws an error)
      const round = sessionAttributes.round;
      const cat = cats[round - 1]; //1 - Song, 2 - Movie, 3 - Phrases
      // const qn = utils.getId(slots).qn; //cat's qn (1, 2, 3)
      // const ans = utils.getId(slots).id; //player's ans ('A')
      const player = sessionAttributes.currentPlayer - 1; //0 or 1
      const numPlayers = sessionAttributes.player; //1 or 2
      const count = sessionAttributes.currentQuestion; //increments - if currently is qn 1 then is player1, qn 2 then is player2
      let questions = sessionAttributes.questions; //randomised array of qn numbers to be asked

      // [1,2,1,2,1,2]
      // song 1, song 2, movie 1, movie 2, phrase 1, phrase 2
      // currentQuestion : index of the questions array

      let correctAnswer = utils.answers[cat][questions[count]][1];
      
      let points = sessionAttributes.score;
      let speechText = strings['SKIPPING'] + correctAnswer + '.';

      //check if end game
      if (round === 3) {
        speechText += utils.endGame(numPlayers, points);
        sessionAttributes.state = 'ENDED';
      } else {
          if (numPlayers === 2) { //duo
              speechText += strings['SCORE'] + points[player];
              sessionAttributes.currentQuestion += 1;

              if (player === 1) { //player2:
              
                  speechText += strings['PLAYER_1'] + strings['AGAIN'] + strings['QUESTION_' + (sessionAttributes.currentQuestion).toString()] + strings[cat][questions[count]]
              }

              else { //player1

                  speechText += strings['PLAYER_2'] + strings['QUESTION_' + (sessionAttributes.currentQuestion).toString()] + strings[cat][questions[count]]
              }

              sessionAttributes.player = utils.resetPlayer(player);

          } else { //solo

            sessionAttributes.currentQuestion += 2;
            speechText += points[player] + strings['QUESTION_' + (sessionAttributes.currentQuestion).toString()] + strings[cat][questions[count]];
            
          }
      }

      // update sessionAttributes
      sessionAttributes.lastUtterance = speechText;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
  };