import Element from './Element';

const gameInfo = new Element('game-info').root;

const containers = [
  new Element('moves-container').root,
  new Element('time-container').root,
];

const [movesStatic, movesDynamic] = [
  new Element('static-info', 'Moves: ', 'span').root,
  new Element('dynamic-info', '5', 'span').root,
];

const [timeStatic, timeDynamic] = [
  new Element('static-info', 'Time: ', 'span').root,
  new Element('dynamic-info', '10:56', 'span').root,
];

containers.forEach((container) => {
  if (container.classList.contains('moves-container')) {
    container.append(movesStatic, movesDynamic);
  } else {
    container.append(timeStatic, timeDynamic);
  }
});

gameInfo.append(...containers);

export default gameInfo;
