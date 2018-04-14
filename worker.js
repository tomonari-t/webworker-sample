self.addEventListener('message', (e) => {
  self.postMessage(e.data);

  setTimeout(() => {
    throw new Error();
  }, 1000);
}, false);
