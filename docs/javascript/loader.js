window.addEventListener('load', (event) => {
  // const instance = axios.create();

  const modal = document.querySelector('#imageModal');
    modal.addEventListener('show.bs.modal', function(ev) {
      const image = new Image();
      image.src = 'images/' + ev.relatedTarget.dataset.image;

      const node = modal.querySelector('.modal-body');

      while (node.lastChild) {
        node.removeChild(node.lastChild);
      }
      node.appendChild(image);
  });
});

// async function getModal(url, element) {
//   try {
//     const response = await instance.get('projects/' + url + '.html');
//     console.log(response);
//     element.innerHTML = response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }