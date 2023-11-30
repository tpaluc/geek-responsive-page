const toArray = nodeList => Array.from(nodeList);

const addListener = (container, index, array, cssClass1, cssClass2, animationDelay) => {
  const handlePointerOver = () => {
    hideElements(array, cssClass1, cssClass2);
    return selectHovered(index, array, cssClass1, cssClass2, animationDelay);
  };

  const handlePointerOut = () => {
    return hideElements(array, cssClass1, cssClass2);
  };

  container.addEventListener('pointerover', handlePointerOver);
  container.addEventListener('pointerout', handlePointerOut);
};

const hideElements = (array, cssClass1, cssClass2) => {
  return array.forEach(element => {
    element.classList.remove(cssClass1, cssClass2);
  });
};

const displayElement = (element, cssClass1, animationDelay) => {
  return setTimeout(() => {
    element.classList.add(cssClass1);
  }, animationDelay);
};

const selectHovered = (index, array, cssClass1, cssClass2, animationDelay) => {
  array[index].classList.add(cssClass2);
  return displayElement(array[index], cssClass1, animationDelay);
};

const run = () => {
  const dropdown = toArray(document.querySelectorAll('.dropdownContainer__dropdown'));

  const class1 = 'dropdownContainer__dropdown-show';
  const class2 = 'dropdownContainer__dropdown-hide';

  const ANIMATION_DELAY = 5;

  toArray(document.querySelectorAll('.dropdownContainer'))
    .forEach((container, index) => {
      addListener(container, index, dropdown, class1, class2, ANIMATION_DELAY);
    });
};

export default run;