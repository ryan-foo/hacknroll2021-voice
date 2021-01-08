// Answers

const Alexa = require('ask-sdk-core');

let skill;

// Utilities for common functions
const utils = require('./utils');
const strings = require('./strings');

exports.handler = async function (event, context) {
  console.log(`REQUEST++++${JSON.stringify(event)}`);
  if (!skill) {
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(
        require('./handlers/launch_handler'),
        require('./handlers/help_handler'),
        require('./handlers/one_or_two_handler'),
        require('./handlers/answer_handler'),
        require('./handlers/no_handler'),
        require('./handlers/yes_handler'),
        require('./handlers/repeat_handler'),
        require('./handlers/cancel_and_stop_handler'),
        require('./handlers/session_ended_handler')
      )
      .addErrorHandlers(require('./handlers/error_handler'))
      .create();
  }

  const response = await skill.invoke(event, context);
  console.log(`RESPONSE++++${JSON.stringify(response)}`);

  return response;
};