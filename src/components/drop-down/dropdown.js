document.addEventListener('DOMContentLoaded', () => {
  const dropdown = Array.from(document.querySelectorAll('.dropdownContainer__dropdown'));

  const class1 = 'dropdownContainer__dropdown-show';
  const class2 = 'dropdownContainer__dropdown-hide';

  document.querySelectorAll('.dropdownContainer').forEach((container, index) => {

    // add listener to each button
    const addListener = (array, cssClass1, cssClass2) => {
      container.addEventListener('pointerover', () => active(index, array, cssClass1, cssClass2));
    };

    // display list assigned to the link that mouse is hovering over
    const active = (index, array, cssClass1, cssClass2) => {
      const dontShow = [...array.slice(0, index), ...array.slice(index + 1)];
      dontShow.forEach(element => {
        element.classList.remove(cssClass1, cssClass2);
      });
      array[index].classList.add(cssClass2);
      setTimeout(() => {
        array[index].classList.add(cssClass1);
      }, 10);
    };

    // check if mouse is still hovering over the container, if not: hide it
    const hovering = (element, array, cssClass1, cssClass2) => {
      element.addEventListener('pointerout', () => {
        array.forEach(element => {
          element.classList.remove(cssClass1, cssClass2);
        });
      });
    };

    addListener(dropdown, class1, class2);

    hovering(container, dropdown, class1, class2);
  });
});

