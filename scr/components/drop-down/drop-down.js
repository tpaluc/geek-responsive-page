document.addEventListener('DOMContentLoaded', () => {

  const link = Array.from(document.querySelectorAll('.container__link'));
  const dropdown = Array.from(document.querySelectorAll('.container__dropdown'));
  const dropdownLink = Array.from(document.querySelectorAll('.container__dropdownLink'));

  let mouseOver = false;

  document.onmouseover = () => {
    if (!mouseOver) {
      dropdown.forEach(element => {
        element.classList.remove('container__dropdown-show');
      });
    }
    mouseOver = false;
  };

  const show = index => {
    mouseOver = true;
    const dontShow = [...dropdown.slice(0, index), ...dropdown.slice(index + 1)];
    dontShow.forEach(element => {
      element.classList.remove('container__dropdown-show');
    });
    dropdown[index].classList.toggle('container__dropdown-show');
  };

  link.forEach((element, index) => {
    element.onmouseover = () => show(index);
  });

  dropdownLink.forEach(element => {
    element.onmouseover = () => {
      mouseOver = true;
    };
  });

});
