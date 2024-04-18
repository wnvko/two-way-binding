import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcDateTimeInputComponent, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent, IgcDateTimeInputComponent);

@customElement('app-input-group')
export default class InputGroup extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      position: relative;
      padding: 20px;
      min-width: 50px;
      min-height: 50px;
    }
    .text {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .date-time-input {
      height: max-content;
      min-width: min-content;
    }
    .input {
      height: max-content;
      min-width: min-content;
    }
  `;

  @state()
  private value: string = 'Text';

  @state()
  private value1: number = 500;

  @state()
  private value2: string = 'test@test.dev';

  @state()
  private value3: string = 'Password';

  @state()
  private value4: string = 'Phone';

  @state()
  private value5: Date = new Date('2010-10-10T00:00');

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Type Text
        </p>
        <igc-input value="${this.value}" label="Text" ?outlined="${true}" @igcChange="${(e: any) => this.value = e.detail}" class="input"></igc-input>
        <igc-input value="${this.value}" label="Text" ?outlined="${true}" @igcChange="${(e: any) => this.value = e.detail}" class="input"></igc-input>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Type Numeric
        </p>
        <igc-input type="number" value="${this.value1}" label="Numeric" ?outlined="${true}" @igcChange="${(e: any) => this.value1 = e.detail}" class="input"></igc-input>
        <igc-input type="number" value="${this.value1}" label="Numeric" ?outlined="${true}" @igcChange="${(e: any) => this.value1 = e.detail}" class="input"></igc-input>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Type Email
        </p>
        <igc-input type="email" value="${this.value2}" label="Email" ?outlined="${true}" @igcChange="${(e: any) => this.value2 = e.detail}" class="input"></igc-input>
        <igc-input type="email" value="${this.value2}" label="Email" ?outlined="${true}" @igcChange="${(e: any) => this.value2 = e.detail}" class="input"></igc-input>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Type Password
        </p>
        <igc-input type="password" value="${this.value3}" label="Password" ?outlined="${true}" @igcChange="${(e: any) => this.value3 = e.detail}" class="input"></igc-input>
        <igc-input type="password" value="${this.value3}" label="Password" ?outlined="${true}" @igcChange="${(e: any) => this.value3 = e.detail}" class="input"></igc-input>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Type Phone
        </p>
        <igc-input type="tel" value="${this.value4}" label="Phone" ?outlined="${true}" @igcChange="${(e: any) => this.value4 = e.detail}" class="input"></igc-input>
        <igc-input type="tel" value="${this.value4}" label="Phone" ?outlined="${true}" @igcChange="${(e: any) => this.value4 = e.detail}" class="input"></igc-input>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Type Date
        </p>
        <igc-date-time-input .value="${this.value5}" label="Date" ?outlined="${true}" @igcChange="${(e: any) => this.value5 = e.detail}" class="date-time-input"></igc-date-time-input>
        <igc-date-time-input .value="${this.value5}" label="Date" ?outlined="${true}" @igcChange="${(e: any) => this.value5 = e.detail}" class="date-time-input"></igc-date-time-input>
      </div>
    `;
  }
}
