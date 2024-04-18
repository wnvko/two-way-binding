import {
  IgrCalendar,
  IgrCalendarModule,
  IgrCheckbox,
  IgrCheckboxModule,
  IgrCombo,
  IgrComboModule,
  IgrRadio,
  IgrRadioGroup,
  IgrRadioGroupModule,
  IgrRadioModule,
  IgrRangeSlider,
  IgrRangeSliderModule,
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

  return (
    <>
      <div className={classes("row-layout other-inputs-container")}>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Check box</p>
          <IgrCheckbox>
            <span key={uuid()}>Label</span>
          </IgrCheckbox>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Combo</p>
          <IgrCombo data={northwindCategories} label="Single select" valueKey="categoryID" displayKey="description" singleSelect="true"></IgrCombo>
          <IgrCombo data={northwindCategories} label="Single select" displayKey="description" singleSelect="true"></IgrCombo>
          <IgrCombo data={northwindCategories} label="Multi select" valueVey="categoryID" displayKey="description" ></IgrCombo>
          <IgrCombo data={northwindCategories} label="Multi select" displayKey="description" ></IgrCombo>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Date picker</p>
          <IgrDatePicker label="Date"></IgrDatePicker>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Radio group</p>
          <IgrRadioGroup>
            <IgrRadio value="1" key={uuid()}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key={uuid()}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key={uuid()}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Rating</p>
          <IgrRating value="3" key={uuid()}></IgrRating>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Select</p>
          <IgrSelect outlined="true" label="Label/Placeholder" value="1">
            {northwindCategories.map((item) => (
              <IgrSelectItem value={item.categoryID.toString()} key={uuid()}>
                <span key={uuid()}>{item.name}</span>
              </IgrSelectItem>
            ))}
          </IgrSelect>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Slider</p>
          <IgrSlider value="60"className={classes("slider")}></IgrSlider>
          <IgrRangeSlider lower="20" upper="80"className={classes("slider")}></IgrRangeSlider>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Switch</p>
          <IgrSwitch><span key={uuid()}>Label</span></IgrSwitch>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Calendar</p>
            <IgrCalendar></IgrCalendar>
        </div>
      </div>
    </>
  );
}
