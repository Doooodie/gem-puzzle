import Element from '../../Element';
import moves from './Moves';
import timer from './Timer';

const gameInfo = new Element('game-info').root;

const containers = [new Element('moves-container').root, new Element('time-container').root];

containers[0].append(moves.root);
containers[1].append(timer.root);

gameInfo.append(...containers);

export default gameInfo;
