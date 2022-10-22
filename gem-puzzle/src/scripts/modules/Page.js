import Element from './Element';

import buttonsContainer from './Buttons';
import gameInfo from './GameInfo';
import game from './Game';
import frameSize from './FrameSize';
import otherSizes from './OtherSizes';

const container = new Element('container').root;

container.append(buttonsContainer, gameInfo, game.root, frameSize, otherSizes);

export default container;
