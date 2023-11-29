document.addEventListener('DOMContentLoaded', () => {

    const link = Array.from(document.querySelectorAll('.dropdownContainer__button'));
    const dropdown = Array.from(document.querySelectorAll('.dropdownContainer__dropdown'));
    const dropdownLink = Array.from(document.querySelectorAll('.dropdownContainer__listElement'));
  
    const class1 = 'dropdownContainer__dropdown-show';
  
    let mouseOver = false;
  
    // add listener to each link
    const addListener = (array, array2, cssClass) => {
      array.forEach((element, index) => {
        element.onmouseover = () => active(index, array2, cssClass);
      });
    };
  
    // display list assigned to the link that mouse is hovering over
    const active = (index, item, cssClass) => {
      mouseOver = true;
      const dontShow = [...item.slice(0, index), ...item.slice(index + 1)];
      dontShow.forEach(element => {
        element.classList.remove(cssClass);
      });
      item[index].classList.toggle(cssClass);
    };
  
    // check if mouse is still hovering over element
    const hover = (array, cssClass) => {
      if (!mouseOver) {
        array.forEach(element => {
          element.classList.remove(cssClass);
        });
      }
      mouseOver = false;
    };
  
    // check if mouse is hovering over element's list
    const mouseIsHovering = array => {
      array.forEach(element => {
        element.onmouseover = () => {
          mouseOver = true;
        };
      });
    };
  
    // Settings for all dropdown lists:
    document.onmouseover = () => {
      hover(dropdown, class1);
    };
  
    addListener(link, dropdown, class1);
  
    mouseIsHovering(dropdownLink);
  });
  