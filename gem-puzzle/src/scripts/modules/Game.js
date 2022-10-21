import Element from './Element';

const game = new Element('game-container').root;

function generateFrames(framesSum) {
  for (let i = 1; i <= framesSum; i += 1) {
    game.append(new Element('frame', `${i}`).root);
  }
  game.append(new Element('frame').root);
}

generateFrames(8);

export default game;
