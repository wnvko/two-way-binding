import { IgcCalendarComponent, IgcCheckboxComponent, IgcComboChangeEventArgs, IgcComboComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcRangeSliderComponent, IgcRangeSliderValue, IgcRatingComponent, IgcSelectComponent, IgcSelectItemComponent, IgcSliderComponent, IgcSwitchComponent, defineComponents } from 'igniteui-webcomponents';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
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
    .slider {
      width: 200px;
    }
  `;

  constructor() {
    super();
    this.northwindCategories = northwindService.getData('CategoriesType');
  }

  @state()
  private northwindCategories: CategoriesType[] = [];

  @state()
  private checked?: boolean;

  @state()
  private categoryId?: number;

  @state()
  private category?: CategoriesType;

  @state()
  private categoryIds: number[] = [];

  @state()
  private categories: CategoriesType[] = [];

  @state()
  private radio?: number;

  @state()
  private rating?: number;

  @state()
  private select?: number;

  @state()
  private slider?: number;

  @state()
  private range?: IgcRangeSliderValue;

  @state()
  private date?: Date;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <p class="typography__body-1 text">Check box</p>
        <igc-checkbox .checked=${this.checked!} @igcChange="${(e: CustomEvent<boolean>) => this.checked = e.detail}">Label</igc-checkbox>
        <p>Checked is ${this.checked}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Combo
        </p>
        <igc-combo .value=${[this.categoryId]} @igcChange=${(e: CustomEvent<IgcComboChangeEventArgs>) => this.categoryId = e.detail.newValue[0]} .data="${this.northwindCategories}" label="Single with value key" value-key="categoryID" display-key="description" ?single-select="${true}"></igc-combo>
        <p>CategoryId is ${this.categoryId}</p>
        <igc-combo .value=${[this.category]} @igcChange=${(e: CustomEvent<IgcComboChangeEventArgs>) => this.category = e.detail.newValue[0]} .data="${this.northwindCategories}" label="Single no value key" display-key="description" ?single-select="${true}"></igc-combo>
        <p>Category name is ${this.category?.name}</p>
        <igc-combo .value=${this.categoryIds} @igcChange=${(e: CustomEvent<IgcComboChangeEventArgs>) => this.categoryIds = e.detail.newValue} .data="${this.northwindCategories}" label="Multi with key" value-key="categoryID" display-key="description" .autoFocusSearch="${true}" ?disable-filtering="${true}"></igc-combo>
        ${this.categoryIds.map(item => html`
          <p>Category Id -> ${item}</p>
        `)}
        <igc-combo .value=${this.categories} @igcChange=${(e: CustomEvent<IgcComboChangeEventArgs>) => this.categories = e.detail.newValue} .data="${this.northwindCategories}" label="Multi no key" display-key="description" .autoFocusSearch="${true}" ?disable-filtering="${true}"></igc-combo>
        ${this.categories.map(item => html`
          <p>Category name -> ${item.name}</p>
        `)}
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Date picker</p>
        <span class="date-picker">DatePicker not yet available in WebComponents</span>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Radio group</p>
        <igc-radio-group>
          <igc-radio name="radio" value="1" .checked=${this.radio === 1} @igcChange=${(e: CustomEvent<boolean>) => e.detail ? this.radio = 1 : undefined}>Label</igc-radio>
          <igc-radio name="radio" value="2" .checked=${this.radio === 2} @igcChange=${(e: CustomEvent<boolean>) => e.detail ? this.radio = 2 : undefined}>Label</igc-radio>
          <igc-radio name="radio" value="3" .checked=${this.radio === 3} @igcChange=${(e: CustomEvent<boolean>) => e.detail ? this.radio = 3 : undefined}>Label</igc-radio>
        </igc-radio-group>
        <p>Radio is ${this.radio}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Rating</p>
        <igc-rating .value="${this.rating ?? 0}" @igcChange="${(e: CustomEvent<number>) => this.rating = e.detail}"></igc-rating>
        <p>Rating is ${this.rating}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Select</p>
        <igc-select .value="${this.select?.toString() ?? ''}" @igcChange="${(e: CustomEvent<IgcSelectItemComponent>) => this.select = +e.detail.value}">
          ${this.northwindCategories?.map((item) => html`
            <igc-select-item .value=${item.categoryID.toString()}>${item.name}</igc-select-item>
          `)}
        </igc-select>
        <p>Select is ${this.select}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">
          Slider
        </p>
        <igc-slider .value="${this.slider!}" @igcChange="${(e: CustomEvent<number>) => this.slider = e.detail}" class="slider"></igc-slider>
        <p>Slider is ${this.slider}</p>
        <igc-range-slider .lower=${this.range?.lower ?? 0} .upper=${this.range?.upper ?? 0} @igcChange=${(e: CustomEvent<IgcRangeSliderValue>) => this.range = e.detail} class="slider"></igc-range-slider>
        <p>Range is ${this.range?.lower} - ${this.range?.upper}</p>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Switch</p>
        <igc-switch .checked=${this.checked ?? false} @igcChange=${(e: CustomEvent<boolean>) => this.checked = e.detail}>Label</igc-switch>
      </div>
      <div class="column-layout group">
        <p class="typography__body-1 text">Calendar</p>
          <igc-calendar .value="${this.date}" @igcChange="${(e: CustomEvent<Date | undefined>) => this.date = e.detail}"></igc-calendar>
          <p>Date is ${this.date?.toDateString()}</p>
      </div>
    `;
  }
}
