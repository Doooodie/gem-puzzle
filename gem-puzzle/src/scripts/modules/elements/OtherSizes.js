import Element from '../Element';

const otherSizes = new Element('other-sizes').root;
const otherSizesText = new Element('other-sizes-text', 'Other sizes:', 'span')
  .root;
const otherSizesLinks = [];

for (let i = 3; i <= 8; i += 1) {
  otherSizesLinks.push(
    new Element('other-sizes-link', `${i}x${i}`, 'a', '#').root,
  );
}

otherSizes.append(otherSizesText, ...otherSizesLinks);

export default otherSizes;
