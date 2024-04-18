import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent, IgcCheckboxComponent, IgcComboComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcRangeSliderComponent, IgcRatingComponent, IgcSelectComponent, IgcSliderComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import { CategoriesType } from '../models/Northwind/categories-type';
import { northwindService } from '../services/Northwind-service';

defineComponents(IgcCheckboxComponent, IgcComboComponent, IgcRadioGroupComponent, IgcRadioComponent, IgcRatingComponent, IgcSelectComponent, IgcSliderComponent, IgcRangeSliderComponent, IgcSwitchComponent, IgcCalendarComponent);

@customElement('app-other-inputs')
export default class OtherInputs extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start;
      align-content: flex-start;
      gap: 20px;
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
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
    }
    .text {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .calendar {
      width: max-content;
      height: max-content;
      min-width: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .range-slider {
      width: 200px;
      height: max-content;
      min-width: 50px;
      max-width: 200px;
    }
    .user-input_2 {
      width: max-content;
      height: max-content;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .radio {
      padding: 8px;
    }
    .slider {
      width: 200px;
      height: max-content;
      min-width: 50px;
      max-width: 200px;
    }
  `;

  constructor() {
    super();
    this.northwindCategories = northwindService.getData('CategoriesType');
  }

  @state()
  private northwindCategories: CategoriesType[] = [];

  @state()
  private value: number = 3;

  @state()
  private value1: string = '1';

  @state()
  private value2: number = 60;

  @state()
  private value3: string = '2024-04-17T00:00';

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Check box
        </p>
        <igc-checkbox labelPosition="after" class="user-input_2">
          Label
        </igc-checkbox>
        <igc-checkbox labelPosition="after" class="user-input_2">
          Label
        </igc-checkbox>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Combo
        </p>
        <igc-combo ?outlined="${true}" .data="${this.northwindCategories}" label="Single select" value-key="categoryID" display-key="description" ?single-select="${true}" class="user-input"></igc-combo>
        <igc-combo ?outlined="${true}" .data="${this.northwindCategories}" label="Single select" value-key="categoryID" display-key="description" ?single-select="${true}" class="user-input"></igc-combo>
        <igc-combo ?outlined="${true}" .data="${this.northwindCategories}" label="Multi select" value-key="categoryID" display-key="description" .autoFocusSearch="${true}" ?disable-filtering="${true}" class="user-input"></igc-combo>
        <igc-combo ?outlined="${true}" .data="${this.northwindCategories}" label="Multi select" value-key="categoryID" display-key="description" .autoFocusSearch="${true}" ?disable-filtering="${true}" class="user-input"></igc-combo>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Date picker
        </p>
        <span class="date-picker">DatePicker not yet available in WebComponents</span>
        <span class="date-picker">DatePicker not yet available in WebComponents</span>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Radio group
        </p>
        <igc-radio-group alignment="horizontal" class="user-input_2">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
        <igc-radio-group alignment="horizontal" class="user-input_2">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Rating
        </p>
        <igc-rating value="${this.value}" size="large" @igcChange="${(e: any) => this.value = e.detail}" class="user-input_2"></igc-rating>
        <igc-rating value="${this.value}" size="large" @igcChange="${(e: any) => this.value = e.detail}" class="user-input_2"></igc-rating>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Select
        </p>
        <igc-select ?outlined="${true}" label="Label/Placeholder" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail.value}" class="user-input">
          ${this.northwindCategories?.map((item) => html`
            <igc-select-item value="${item.categoryID}">
              ${item.name}
            </igc-select-item>
          `)}
        </igc-select>
        <igc-select ?outlined="${true}" label="Label/Placeholder" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail.value}" class="user-input">
          ${this.northwindCategories?.map((item) => html`
            <igc-select-item value="${item.categoryID}">
              ${item.name}
            </igc-select-item>
          `)}
        </igc-select>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Slider
        </p>
        <igc-slider value="${this.value2}" min="0" max="100" step="10" ?discrete-track="${true}" @igcChange="${(e: any) => this.value2 = e.detail}" class="slider"></igc-slider>
        <igc-slider value="${this.value2}" min="0" max="100" step="10" ?discrete-track="${true}" @igcChange="${(e: any) => this.value2 = e.detail}" class="slider"></igc-slider>
        <igc-range-slider .lower="20" .upper="80" .min="0" .max="100" .step="10" .discrete-track="true" class="range-slider"></igc-range-slider>
        <igc-range-slider .lower="20" .upper="80" .min="0" .max="100" .step="10" .discrete-track="true" class="range-slider"></igc-range-slider>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Switch
        </p>
        <igc-switch class="user-input_2">
          Label
        </igc-switch>
        <igc-switch class="user-input_2">
          Label
        </igc-switch>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Calendar
        </p>
        <div class="row-layout group_1">
          <igc-calendar value="${this.value3}" ?hide-header="${false}" header-orientation="horizontal" @igcChange="${(e: any) => this.value3 = e.detail}" class="calendar"></igc-calendar>
          <igc-calendar value="${this.value3}" ?hide-header="${false}" header-orientation="horizontal" @igcChange="${(e: any) => this.value3 = e.detail}" class="calendar"></igc-calendar>
        </div>
      </div>
    `;
  }
}
