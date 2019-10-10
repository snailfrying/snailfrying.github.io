/* global hexo */

'use strict';

const utils = require('./utils')(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects =&gt; {
  ['likely', 'needmoreshare', 'sharejs'].forEach(item =&gt; {
    let config = utils.defaultConfigFile(item, 'default.yaml');
    if (config.enable) {
      require(`./lib/${item}`)(config, injects);
    }
  });
});
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