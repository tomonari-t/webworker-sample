const worker = new Worker('./worker.js');

window.onload = () => {

  const h1 = document.getElementById('header');

  worker.addEventListener('message', (e) => {
    console.log('Worker said' + e.data);
    h1.innerHTML = e.data;
  }, false);

  setTimeout(() => {
    worker.postMessage('hello world');
  }, 1000);
};