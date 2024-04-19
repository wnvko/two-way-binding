import {
  IIgrCheckboxBaseProps,
  IgrCalendar,
  IgrCalendarModule,
  IgrCheckbox,
  IgrCheckboxBase,
  IgrCheckboxModule,
  IgrCombo,
  IgrComboModule,
  IgrComponentBoolValueChangedEventArgs,
  IgrRadio,
  IgrRadioGroup,
  IgrRadioGroupModule,
  IgrRadioModule,
  IgrRangeSlider,
  IgrRangeSliderModule,
  IgrRangeSliderValue,
  IgrRating,
  IgrRatingModule,
  IgrSelect,
  IgrSelectItem,
  IgrSelectModule,
  IgrSlider,
  IgrSliderModule,
  IgrSwitch,
  IgrSwitchModule
} from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useGetCategories } from '../hooks/northwind-hooks';
import createClassTransformer from '../style-utils';
import styles from './other-inputs.module.css';
import { useState } from 'react';
import { CategoriesType } from '../models/Northwind/categories-type';

IgrCalendarModule.register();
IgrCheckboxModule.register();
IgrComboModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();
IgrSelectModule.register();
IgrSliderModule.register();
IgrSwitchModule.register();
IgrDatePickerModule.register();

export default function OtherInputs() {
  const classes = createClassTransformer(styles);
  const { northwindCategories } = useGetCategories();
  const uuid = () => crypto.randomUUID();
  const [checked, setChecked] = useState<boolean | undefined>()
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [category, setCategory] = useState<CategoriesType | undefined>();
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [date, setDate] = useState<Date | undefined>();
  const [radio, setRadio] = useState<string | undefined>();
  const [rating, setRating] = useState<number | undefined>();
  const [select, setSelect] = useState<number | undefined>();
  const [slider, setSlider] = useState<number | undefined>();
  const [range, setRange] = useState<IgrRangeSliderValue | undefined>();

  return (
    <>
      <div className={classes("row-layout other-inputs-container")}>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Check box</p>
          <IgrCheckbox checked={checked} change={(_s, e) => setChecked(e.detail)}><span key={uuid()}>Label</span></IgrCheckbox>
          <p>Checked is {checked}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Combo</p>
          <IgrCombo value={[categoryId]} change={(_s, e) => setCategoryId(e.detail.newValue[0])}
            data={northwindCategories} label="Single with value key" valueKey="categoryID" displayKey="description" singleSelect="true"></IgrCombo>
          <p>CategoryId is {categoryId}</p>

          <IgrCombo value={[category]} change={(_s, e) => setCategory(e.detail.newValue[0])}
            data={northwindCategories} label="Single no value key" displayKey="description" singleSelect="true"></IgrCombo>
          <p>Category name is {category?.name}</p>

          <IgrCombo value={categoryIds} change={(_s, e) => setCategoryIds(e.detail.newValue)}
            data={northwindCategories} label="Multi with value key" valueVey="categoryID" displayKey="description" ></IgrCombo>
          {categoryIds.map(item =>
            <p>Category Id - {item}</p>
          )}

          <IgrCombo value={categories} change={(_s, e) => setCategories(e.detail.newValue)}
            data={northwindCategories} label="Multi no value key" displayKey="description" ></IgrCombo>
          {categories.map(item =>
            <p>Category Name - {item.name}</p>
          )}
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Date picker</p>
          <IgrDatePicker value={date ?? new Date()} selectedValueChanged={(_s, e) => setDate(e.newValue)} label="Date"></IgrDatePicker>
          <p>Date is {date?.toDateString()}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Radio group</p>
          <IgrRadioGroup>
            <IgrRadio name="radio" change={(s, e) => e.detail ? setRadio(s.value) : undefined } value="1" key={uuid()}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio name="radio" change={(s, e) => e.detail ? setRadio(s.value) : undefined } value="2" key={uuid()}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio name="radio" change={(s, e) => e.detail ? setRadio(s.value) : undefined } value="3" key={uuid()}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
          <p>Radio is {radio}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Rating</p>
          <IgrRating value={rating} change={(_s, e) => setRating(e.detail)}></IgrRating>
          <p>Rating is {rating}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Select</p>
          <IgrSelect value={select?.toString()} change={(_s, e) => setSelect(+e.detail.value)}>
            {northwindCategories.map((item) => (
              <IgrSelectItem value={item.categoryID.toString()} key={uuid()}>
                <span key={uuid()}>{item.name}</span>
              </IgrSelectItem>
            ))}
          </IgrSelect>
          <p>Select is {select}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Slider</p>
          <IgrSlider value={slider} change={(_s, e) => setSlider(e.detail)} className={classes("slider")}></IgrSlider>
          <p>Select is {select}</p>

          <IgrRangeSlider lower={range?.lower} upper={range?.upper} change={(_s, e) => setRange(e.detail)} className={classes("slider")}></IgrRangeSlider>
          <p>Range is {range?.lower} - {range?.upper}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Switch</p>
          <IgrSwitch checked={checked} change={(_s, e) => setChecked(e.detail)}><span key={uuid()}>Label</span></IgrSwitch>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Calendar</p>
          <IgrCalendar value={date} change={(_s, e) => setDate(e.detail)}></IgrCalendar>
        </div>
      </div>
    </>
  );
}
