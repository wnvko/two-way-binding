import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcDateTimeInputComponent, IgcInputComponent, IgcTextareaComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent, IgcDateTimeInputComponent, IgcTextareaComponent);

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
  `;

  @state()
  private text?: string;

  @state()
  private numeric?: number;

  @state()
  private email?: string;

  @state()
  private password?: string;

  @state()
  private phone?: string;

  @state()
  private date?: Date;

  @state()
  private textarea?: string;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <p class="typography__body-1 text">Type Text</p>
        <igc-input value="${this.text!}" @igcChange="${(e: CustomEvent<string>) => this.text = e.detail}"></igc-input>
        <p>Text is ${this.text}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Type Numeric</p>
        <igc-input type="number" value="${this.numeric!}" @igcChange="${(e: CustomEvent<number>) => this.numeric = e.detail}"></igc-input>
        <p>Number is ${this.numeric}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Type Email</p>
        <igc-input type="email" value="${this.email!}" @igcChange="${(e: CustomEvent<string>) => this.email = e.detail}"></igc-input>
        <p>Email is ${this.email}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Type Password</p>
        <igc-input type="password" value="${this.password!}" @igcChange="${(e: CustomEvent<string>) => this.password = e.detail}"></igc-input>
        <p>Password is ${this.password}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Type Phone</p>
        <igc-input type="tel" value="${this.phone!}" @igcChange="${(e: CustomEvent<string>) => this.phone = e.detail}"></igc-input>
        <p>Phone is ${this.phone}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Type Date</p>
        <igc-date-time-input .value="${this.date!}" @igcChange="${(e: CustomEvent<Date | undefined>) => this.date = e.detail}" class="date-time-input"></igc-date-time-input>
        <p>Date is ${this.date?.toDateString()}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Textarea</p>
        <igc-textarea value="${this.textarea!}" @igcChange="${(e: CustomEvent<string>) => this.textarea = e.detail}"></igc-textarea>
        <p>Textarea is ${this.textarea}</p>
      </div>
    `;
  }
}

