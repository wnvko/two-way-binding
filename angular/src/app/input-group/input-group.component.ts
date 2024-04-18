import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorModule } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorModule, FormsModule],
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent {
  public value: string = 'Text';
  public value1: number = 500;
  public value2: string = 'test@test.dev';
  public value3: string = 'Password';
  public value4: string = 'Phone';
  public date: Date = new Date('2010-10-10T00:00');
}
