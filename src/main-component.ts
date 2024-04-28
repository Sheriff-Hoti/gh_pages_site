import { CSSResultGroup, LitElement, html,unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import classes from './index.css?inline'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('main-component')
export class MainComponent extends LitElement {

  render() {
    return html`
      <div class="bg-red-400">
      hello with tailwind(if it works bg should be red)
      </div>
    `
  }

  static styles?: CSSResultGroup | undefined = [unsafeCSS(classes)];
}

declare global {
  interface HTMLElementTagNameMap {
    'main-component': MainComponent
  }
}
