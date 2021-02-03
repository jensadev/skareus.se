window.addEventListener('load', (event) => {
  // const instance = axios.create();

  const modal = document.querySelector('#imageModal');
    modal.addEventListener('show.bs.modal', function(ev) {
      console.log(ev);
      const image = new Image();
      image.src = 'images/' + ev.relatedTarget.dataset.image;

      const node = ev.target.childNodes[0].childNodes[0].childNodes[0];

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