/**
 * One or Two Handler
 *
 * One or two handler will detect if player says one or two.
 * If so, it will render the game as single player or multiplayer accordingly.
 */

const strings = require('../strings');
const { getId } = require('../utils');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.OneOrTwoIntent';
    },

    handle(handlerInput) {

        const request = handlerInput.requestEnvelope.request;
        const slots = request.intent.slots;
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const questions = sessionAttributes.questions;
        let totalPlayers = slots.oneOrTwo.value; // number of players
        sessionAttributes.players = totalPlayers;

        console.log(`We have ${totalPlayers} players.`)

        // start game!
        let speechText = '';
        if (totalPlayers === 1) {
            speechText = strings['START'] + strings['QUESTION_1'] + strings['SONG'][questions[0]];
        } else {
            speechText = strings['START'] + strings['PLAYER_1'] + strings['QUESTION_1'] + strings['SONG'][questions[0]];
        }

        sessionAttributes.currentQuestion += 1;
        sessionAttributes.lastUtterance = speechText;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
}