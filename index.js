module.exports = (paths) => {
  function loadScriptAsync(path, resolve, reject) {
    let script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.onload = () => {
      resolve(path);
    };
    script.onerror = () => {
      reject(path);
    };
    script.src = path;
    document.body.appendChild(script);
  }

  return Promise.all(paths.map(path => new Promise((resolve, reject) => {
      loadScriptAsync(path, resolve, reject)
    })
  ));
};