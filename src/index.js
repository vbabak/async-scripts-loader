module.exports = function loadScriptAsync(paths) {
  paths = Object.prototype.toString.call(paths) != '[object Array]' ? [paths] : paths;
  const container = document.body || document.head || document.documentElement;
  return Promise.all(paths.map(path => new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(path);
      script.onerror = () => reject(new Error(path));
      script.src = path;
      container.appendChild(script);
    })
  ));
}