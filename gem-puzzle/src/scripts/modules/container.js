import Element from './Element';

import buttonsContainer from './elements/buttons/buttonsContainer';
import gameInfo from './elements/game-info/gameInfo';
import game from './elements/Game';
import frameSize from './elements/FrameSize';
import otherSizes from './elements/OtherSizes';
import { soundContainer } from './elements/Sound';

const container = new Element('container').root;

container.append(
  buttonsContainer,
  gameInfo,
  game.root,
  frameSize.root,
  otherSizes.root,
  soundContainer.root,
);

export default container;
