document.addEventListener('DOMContentLoaded', () => {

  const links = Array.from(document.querySelectorAll('.navBar__listElementLink'));
  const grids = Array.from(document.querySelectorAll('.container'));

  links.forEach((element, index) => {
    element.onclick = () => {
      links.forEach(el => {
        el.classList.remove('navBar__listElementLink-clicked');
      });
      element.classList.add('navBar__listElementLink-clicked');
      grids.forEach(elem => {
        elem.classList.remove('container-active', 'container-hidden');
      });
      grids[index].classList.add('container-hidden');
      setTimeout(() => {
        grids[index].classList.remove('container-hidden');
        grids[index].classList.add('container-active');
      }, 100);
    };
  });
});
