customElements.define('nav-bar', class extends HTMLElement {
  constructor() {
    super();

    const page = this.hasAttribute('page') ? this.getAttribute('page') : 'index';

    const template = document.createElement('template');
    const links = '<a href="index.html">joshparkerj</a><a href="userscripts.html">userscripts</a><a href="downloads.html">downloads</a>';
    const pageRE = new RegExp(`<a href="${page}\.html">[^<]*</a>`);

    template.innerHTML = `<link rel="stylesheet" type="text/css" href="nav.css" />${links.replace(pageRE, '')}`;
    
    console.log(template);

    const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content);;
  }
});
