import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IChangeCheckboxEventArgs,
  IComboSelectionChangingEventArgs,
  IgcFormsModule,
  IGX_CALENDAR_DIRECTIVES,
  IGX_COMBO_DIRECTIVES,
  IGX_DATE_PICKER_DIRECTIVES,
  IGX_INPUT_GROUP_DIRECTIVES,
  IGX_SELECT_DIRECTIVES,
  IGX_SIMPLE_COMBO_DIRECTIVES,
  IGX_SLIDER_DIRECTIVES,
  IgxCheckboxComponent,
  IgxRadioComponent,
  IgxRadioGroupDirective,
  IgxSwitchComponent,
  IRangeSliderValue,
  ISelectionEventArgs,
  ISimpleComboSelectionChangingEventArgs,
  ISliderValueChangeEventArgs,
  IViewDateChangeEventArgs
} from '@infragistics/igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../models/northwind/categories-type';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-other-inputs',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES,
    IGX_INPUT_GROUP_DIRECTIVES,
    IGX_DATE_PICKER_DIRECTIVES,
    IGX_CALENDAR_DIRECTIVES,
    IGX_SELECT_DIRECTIVES,
    IGX_SLIDER_DIRECTIVES,
    IGX_COMBO_DIRECTIVES,
    IgxRadioGroupDirective,
    IgxCheckboxComponent,
    IgxRadioComponent,
    IgcFormsModule,
    IgxSwitchComponent,
    FormsModule,
    NgFor,
    FormsModule
  ],
  templateUrl: './other-inputs.component.html',
  styleUrls: ['./other-inputs.component.scss']
})
export class OtherInputsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];
  public checked: boolean | undefined;
  public categoryId: number | undefined;
  public categoriesIds: number[] = [];
  public date?: Date;
  public radioGroupValue: string | undefined;
  public ratingValue: number | undefined;
  public sliderValue?: number;
  public rangeSliderValue!: IRangeSliderValue;

  checkboxChange = (e: IChangeCheckboxEventArgs) => this.checked = e.checked;

  simpleComboSelectionChanging = (e: ISimpleComboSelectionChangingEventArgs) => this.categoryId = e.newValue;

  comboSelectionChanging = (e: IComboSelectionChangingEventArgs) => this.categoriesIds = e.newValue;

  datePickerValueChange = (e: Date) => this.date = e;

  ratingChange = (e: CustomEvent) => this.ratingValue = e.detail;

  selectSelectionChanging = (e: ISelectionEventArgs) => this.categoryId = e.newSelection.value;

  radioGroupChange = (e: IChangeCheckboxEventArgs) => this.radioGroupValue = e.value;

  sliderValueChange = (e: ISliderValueChangeEventArgs) => this.sliderValue = e.value as number; // explicit cast is needed

  rangeSliderValueChange = (e: ISliderValueChangeEventArgs) => this.rangeSliderValue = e.value as IRangeSliderValue; // explicit cast is needed

  switchChange = (e: IChangeCheckboxEventArgs) => this.checked = e.checked;

  calendarViewDateChange = (e: Date | Date[]) => this.date = e as Date;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('CategoriesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCategories = data,
      error: (_err: any) => this.northwindCategories = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
