class InfoCard extends HTMLElement {
  constructor () {
    super();
    this.shadow = this.attachShadow({
      mode: 'open'
    });
  }

  connectedCallback () {
    const cardURL = this.getAttribute('url');
    const card = `
      <style>
        @import 'info-card.css';
      </style>
      <div class="${cardURL ? '' : 'info-card '}info-container">
        <slot></slot>
        ${cardURL ? `
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.293-4.707a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H7a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z" fill="currentColor"/>
          </svg>
        ` : ''}
      </div>
    `;
    if (cardURL) {
      this.shadow.innerHTML = `
        <a href="${cardURL}" class="info-card">
          ${card}
        </a>
      `;
    } else {
      this.shadow.innerHTML = card;
    }
  }
}

customElements.define('info-card', InfoCard);
