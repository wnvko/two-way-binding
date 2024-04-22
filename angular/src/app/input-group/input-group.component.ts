import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorModule } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorModule, FormsModule, DatePipe],
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent {
  public textVar: string | undefined;
  public numberVar: number | undefined;
  public email: string | undefined;
  public password: string | undefined;
  public phone: string | undefined;
  public date: Date | undefined;
  public textarea: string | undefined;

  textInputChange = (e: Event) => {
    this.textVar = (e.target as HTMLInputElement).value;
  }

  numberInputChange = (e: Event) => {
    // Note the + sign - it is added to cast the string value to number :(
    this.numberVar = +(e.target as HTMLInputElement).value;
  }

  emailInputChange = (e: Event) => {
    this.email = (e.target as HTMLInputElement).value;
  }

  passwordInputChange = (e: Event) => {
    this.password = (e.target as HTMLInputElement).value;
  }

  textareaChange = (e: Event) => {
    this.textarea = (e.target as HTMLInputElement).value;
  }

  phoneInputChange = (e: Event) => {
    this.phone = (e.target as HTMLInputElement).value;
  }

  dateInputChange = (e: Event) => {
    this.date = new Date((e.target as HTMLInputElement).value);
  }

  buttonSetDate = () => this.date = new Date();
}
