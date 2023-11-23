document.addEventListener('DOMContentLoaded', () => {

  const link = Array.from(document.querySelectorAll('.container__link'));
  const dropdown = Array.from(document.querySelectorAll('.container__dropdown'));

  let clickedLink = false;

  document.onclick = () => {
    if (!clickedLink) {
      dropdown.forEach(element => {
        element.classList.remove('container__dropdown-show');
      });
    }
    clickedLink = false;
  };

  const show = index => {
    clickedLink = true;
    const dontShow = [...dropdown.slice(0, index), ...dropdown.slice(index + 1)];
    dontShow.forEach(element => {
      element.classList.remove('container__dropdown-show');
    });
    dropdown[index].classList.toggle('container__dropdown-show');
  };

  link.forEach((element, index) => {
    element.onclick = () => show(index);
  });

});
