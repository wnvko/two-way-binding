import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorModule } from '@infragistics/igniteui-angular';
import { InputGroupComponent } from './input-group.component';

describe('InputGroupComponent', () => {
  let component: InputGroupComponent;
  let fixture: ComponentFixture<InputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGroupComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
