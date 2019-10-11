module.exports = function(config, injects) {
  injects.head.raw('sharejs', `<link rel="stylesheet" href="${config.cdn.css}">`);
  injects.postBodyEnd.raw('sharejs', `<div class="post-widgets">
    <div class="social-share">
    </div>
  </div>
  <script src="${config.cdn.js}"></script>`);
};
