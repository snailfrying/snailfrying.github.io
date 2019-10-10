module.exports = function(config, injects) {
  injects.head.raw('needmoreshare', `<link rel="stylesheet" href="${config.cdn.css}">`);
  if (config.postbottom.enable) {
    injects.head.raw('needmoreshare-postbottom', `<style>
#needsharebutton-postbottom {
  cursor: pointer;
  height: 26px;
  margin-top: 10px;
  position: relative;
}
#needsharebutton-postbottom .btn {
  border: 1px solid $btn-default-border-color;
  border-radius: 3px;
  display: initial;
  padding: 1px 4px;
}
</style>`);
    injects.postBodyEnd.raw('needmoreshare-postbottom', `<div class="post-widgets">
      <div id="needsharebutton-postbottom">
        <span class="btn">
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </span>
      </div>
    </div>`);
  }
  if (config.float.enable) {
    injects.head.raw('needmoreshare-float', `<style>
#needsharebutton-float {
  bottom: 88px;
  cursor: pointer;
  left: -8px;
  position: fixed;
  z-index: 9999;
}
#needsharebutton-float .btn {
  border: 1px solid $btn-default-border-color;
  border-radius: 4px;
  padding: 0 10px 0 14px;
}
</style>`);
    injects.bodyEnd.raw('needmoreshare-float', `<div id="needsharebutton-float">
      <span class="btn">
        <i class="fa fa-share-alt" aria-hidden="true"></i>
      </span>
    </div>`);
  }
  injects.bodyEnd.raw('needmoreshare', `
  <script src="${config.cdn.js}"></script>
  <script>
  </script>`);
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