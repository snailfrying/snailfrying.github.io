const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

module.exports = function(hexo, pluginDir) {
  return {
    defaultConfigFile(key, file) {
      let defaultConfig = yaml.safeLoad(fs.readFileSync(pluginDir ? path.join(pluginDir, file) : file));
      hexo.config[key] = Object.assign(defaultConfig[key], hexo.theme.config[key], hexo.config[key]);
      return hexo.config[key];
    }
  };
};
<script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>