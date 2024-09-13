import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { IgxCheckboxComponent, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxRadioComponent, IgxRadioGroupDirective, IgcFormsModule, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxSwitchComponent, IGX_CALENDAR_DIRECTIVES } from '@infragistics/igniteui-angular';
import { OtherInputsComponent } from './other-inputs.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('OtherInputsComponent', () => {
  let component: OtherInputsComponent;
  let fixture: ComponentFixture<OtherInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [OtherInputsComponent],
    imports: [NoopAnimationsModule, FormsModule, IgxCheckboxComponent, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxRadioComponent, IgxRadioGroupDirective, IgcFormsModule, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxSwitchComponent, IGX_CALENDAR_DIRECTIVES],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
