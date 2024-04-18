import { IgrDateTimeInput, IgrDateTimeInputModule, IgrInput, IgrInputModule } from '@infragistics/igniteui-react';
import createClassTransformer from '../style-utils';
import styles from './input-group.module.css';

IgrDateTimeInputModule.register();
IgrInputModule.register();

export default function InputGroup() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout input-group-container")}>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Text</p>
          <IgrInput value="Text" label="Text" className={classes("input")}></IgrInput>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Numeric</p>
          <IgrInput type="number" value="500" label="Numeric" className={classes("input")}></IgrInput>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Email</p>
          <IgrInput type="email" value="test@test.dev" label="Email" className={classes("input")}></IgrInput>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Password</p>
          <IgrInput type="password" value="Password" label="Password" className={classes("input")}></IgrInput>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Phone</p>
          <IgrInput type="tel" value="Phone" label="Phone" className={classes("input")}></IgrInput>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Date</p>
          <IgrDateTimeInput label="Date" className={classes("date-time-input")}></IgrDateTimeInput>
        </div>
      </div>
    </>
  );
}
