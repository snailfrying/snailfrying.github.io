module.exports = function(config, injects) {
  var className = 'likely';
  if (config.look !== 'normal') {
    className += 'likely-' + config.look;
  }
  injects.head.raw('likely', `<link rel="stylesheet" href="${config.cdn.css}">`);
  injects.postBodyEnd.raw('likely', `<div class="post-widgets">
    <div class="${className}">
    </div>
  </div>
  <script src="${config.cdn.js}"></script>`);
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