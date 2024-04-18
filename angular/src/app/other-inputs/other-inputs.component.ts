import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_CALENDAR_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxCheckboxComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxSwitchComponent } from '@infragistics/igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../models/northwind/categories-type';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-other-inputs',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_COMBO_DIRECTIVES, IgxRadioGroupDirective, IgxCheckboxComponent, IgxRadioComponent, IgcFormsModule, IgxSwitchComponent, FormsModule, NgFor, FormsModule],
  templateUrl: './other-inputs.component.html',
  styleUrls: ['./other-inputs.component.scss']
})
export class OtherInputsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];
  public value: Date = new Date('2024-04-17T00:00');
  public value1: string = '1';
  public value2: number = 3;
  public value3: number = 60;
  public value4: string = '{ lower: 20, upper: 80 }';

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
