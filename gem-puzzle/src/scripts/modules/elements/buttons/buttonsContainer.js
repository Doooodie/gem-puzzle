import Element from '../../Element';
import saveButton from './SaveButton';
import startButton from './StartButton';
import resultsButton from './ResultsButton';

const buttonsContainer = new Element('buttons-container').root;

buttonsContainer.append(saveButton.root, startButton.root, resultsButton.root);

export default buttonsContainer;
