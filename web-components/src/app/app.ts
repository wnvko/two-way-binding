import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcNavDrawerComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 320px;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-nav-drawer ?open="${true}" position="relative" class="nav-drawer">
          <igc-nav-drawer-item @click="${() => Router.go('/input-group')}">
            <div slot="content">Input group</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/other-inputs')}">
            <div slot="content">Other inputs</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
