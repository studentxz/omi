webpackJsonp([13],{75:function(n,t){n.exports="# Omim\n\n[Omi](https://github.com/Tencent/omi) \u6253\u9020\u7684 Material Design \u6846\u67b6\u65e0\u5173\u6807\u51c6\u7ec4\u4ef6\uff0c\u4efb\u610f\u6846\u67b6\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002\n\n![](https://tencent.github.io/omi/packages/omim/assets/pv4.jpeg?a=1)\n\n## \u7279\u6027\n\n* \u57fa\u4e8e [material-components-web](https://github.com/material-components/material-components-web) \u7b80\u5355\u5305\u88c5\n* \u4f7f\u7528\u6807\u51c6 Web Components \u7684 Custom Elements \u6e32\u67d3 \n* \u4efb\u610f\u6846\u67b6\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6(\u6bd4\u5982 Omi, React, Vue and Angular)\n* \u540c\u65f6\u652f\u6301 JSX \u548c \u539f\u751f HTML \u6807\u7b7e\u7684\u4f7f\u7528\u65b9\u5f0f \n* \u6bcf\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\n\n## \u4f7f\u7528\u6307\u5357\n\n### \u901a\u8fc7 script\n\n```html\n<m-button>I am button</m-button>\n\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/@omim/core@latest/button/index.js\"><\/script>\n```\n\n### \u901a\u8fc7 npm\n\n``` bash\nnpm install @omim/core\n```\n\nThen:\n\n```js\nimport '@omim/core/button'\n```\n\n\u7136\u540e\u5728\u4efb\u610f\u6846\u67b6\u4e2d\u4f7f\u7528\uff0c\u6bd4\u5982 Omi, React, Vue or Angular:\n\n``` html\n<m-button>I am button</m-button>\n```\n\nIt can also be used in pure js:\n\n```js\nvar button = document.createElement('m-button')\nbutton.innerHTML = 'I am button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<m-button>I am button</m-button>'\n```\n\n## \u66f4\u6539\u4e3b\u9898\u989c\u8272\n\n```js\nwindow.OmimThemePrimary =  'red'\nwindow.OmimThemeSecondary =  'blue'\nwindow.OmimThemeError =  'yellow'\n\nimport '@omim/core/button'\n```\n\n\u6216\u8005\n\n```html\n<m-button>I am button</m-button>\n\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script>\n  window.OmimThemePrimary =  'red'\n  window.OmimThemeSecondary =  'blue'\n  window.OmimThemeError =  'yellow'\n<\/script>\n<script src=\"https://unpkg.com/@omim/core@latest/button/index.js\"><\/script>\n```\n\n## \u8d21\u732e\n\n### CMD\n\nBuild component:\n\n```bash\nnpm run build -- component-name\n```\n\nBuild demo:\n\n```bash\nnpm start demo-name\n```\n\nPublish:\n\n```bash\nnpm publish --access public\n```\n\n## \u76f8\u5173\u94fe\u63a5\n\n* [material.io docs](https://material.io/develop/web/components/buttons/) \n* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) \n"}});
//# sourceMappingURL=13.cad7e0e0.chunk.js.map