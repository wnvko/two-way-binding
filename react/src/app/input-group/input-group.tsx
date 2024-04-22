import { IgrDateTimeInput, IgrDateTimeInputModule, IgrInput, IgrInputModule, IgrTextarea, IgrTextareaModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import createClassTransformer from '../style-utils';
import styles from './input-group.module.css';

IgrDateTimeInputModule.register();
IgrInputModule.register();
IgrTextareaModule.register();

export default function InputGroup() {
  const classes = createClassTransformer(styles);
  const [text, setText] = useState<string | undefined>()
  const [numeric, setNumeric] = useState<number | undefined>()
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()
  const [phone, setPhone] = useState<string | undefined>()
  const [date, setDate] = useState<Date | undefined>()
  const [textarea, setTextarea] = useState<string | undefined>()

  return (
    <>
      <div className={classes("row-layout input-group-container")}>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Text</p>
          <IgrInput value={text} change={(_s, e) => setText(e.detail)}
            label="Text"></IgrInput>
          <p>Text is {text}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Numeric</p>
          <IgrInput value={numeric?.toString()} change={(_s, e) => setNumeric(+e.detail)}
            type="number" label="Numeric"></IgrInput>
          <p>Numeric is {numeric}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Email</p>
          <IgrInput value={email} change={(_s, e) => setEmail(e.detail)}
            type="email" label="Email"></IgrInput>
          <p>Email is {email}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Password</p>
          <IgrInput value={password} change={(_s, e) => setPassword(e.detail)}
            type="password" label="Password"></IgrInput>
          <p>Password is {password}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Phone</p>
          <IgrInput value={phone} change={(_s, e) => setPhone(e.detail)}
            type="tel" label="Phone"></IgrInput>
          <p>Phone is {phone}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Date</p>
          <IgrDateTimeInput value={date} change={(_s, e) => setDate(e.detail)} label="Date"></IgrDateTimeInput>
          <p>Date is {date?.toDateString()}</p>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>Type Phone</p>
          <IgrTextarea value={textarea} change={(_s, e) => setTextarea(e.detail)} label="Textarea"></IgrTextarea>
          <p>Textarea is {textarea}</p>
        </div>
      </div>
    </>
  );
}
