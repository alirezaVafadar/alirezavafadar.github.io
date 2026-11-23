document.querySelector('#print')?.addEventListener('click', () => window.print());

if (typeof HTMLDialogElement !== 'undefined') {
  const viewer = document.createElement('dialog');
  viewer.className = 'media-viewer';
  viewer.setAttribute('aria-labelledby', 'viewer-caption');
  viewer.innerHTML = `
    <div class="viewer-toolbar">
      <p id="viewer-caption"></p>
      <button type="button" class="viewer-zoom" aria-pressed="false">Zoom in</button>
      <button type="button" class="viewer-close" autofocus>Close</button>
    </div>
    <div class="viewer-canvas"><img alt=""></div>`;
  document.body.append(viewer);

  const canvas = viewer.querySelector('.viewer-canvas');
  const image = canvas.querySelector('img');
  const caption = viewer.querySelector('#viewer-caption');
  const zoom = viewer.querySelector('.viewer-zoom');
  let opener;

  function setZoom(enlarged) {
    viewer.classList.toggle('is-enlarged', enlarged);
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.textContent = enlarged ? 'Fit page' : 'Zoom in';
    canvas.scrollTop = 0;
    canvas.scrollLeft = 0;
  }

  function openImage(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.currentTarget;
    const thumbnail = link.querySelector('img');
    if (!thumbnail) return;
    event.preventDefault();
    const isLetter = link.hasAttribute('data-letter');
    opener = link;
    viewer.classList.toggle('is-document', isLetter || link.hasAttribute('data-document'));
    zoom.hidden = !(isLetter || link.hasAttribute('data-document'));
    setZoom(false);
    caption.textContent = isLetter ? 'Mark Carney’s letter to Team Canada' : link.dataset.caption;
    image.src = thumbnail.currentSrc || thumbnail.src;
    image.alt = thumbnail.alt;
    viewer.showModal();
    document.documentElement.classList.add('viewer-open');
  }

  document.querySelectorAll('[data-zoom], [data-letter]').forEach(link => {
    link.addEventListener('click', openImage);
  });
  zoom.addEventListener('click', () => setZoom(!viewer.classList.contains('is-enlarged')));
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('viewer-open');
    opener?.focus({preventScroll: true});
  });
}

let closedForPrint = [];
window.addEventListener('beforeprint', () => {
  closedForPrint = [...document.querySelectorAll('details:not([open])')];
  closedForPrint.forEach(item => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  closedForPrint.forEach(item => { item.open = false; });
  closedForPrint = [];
});
