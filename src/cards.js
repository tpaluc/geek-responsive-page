const links = Array.from(document.querySelectorAll('.cardsNavBar__listElementLink'));
const grids = Array.from(document.querySelectorAll('.container'));

const runCards = () => {
  links.forEach((element, index) => {
    element.onclick = () => {
      links.forEach(el => {
        el.classList.remove('cardsNavBar__listElementLink-clicked');
      });
      element.classList.add('cardsNavBar__listElementLink-clicked');
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
};

export default runCards;

