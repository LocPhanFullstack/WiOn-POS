import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSIllustrationModule } from 'tds-ui/illustration';

@Component({
  selector: 'wion-fnb-empty-data',
  standalone: true,
  templateUrl: './empty-data.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TDSIllustrationModule],
  host: {
    class: 'w-full flex',
  },
})
export class EmptyDataComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() iconWidth: number = 350;
  @Input() iconHeight: number = 350;
  @Input() title: string = '';
  @Input() titleClass: string = 'tds-heading-4 font-semibold text-center mt-6';
  @Input() content: string = '';
  @Input() contentClass: string = 'tds-color-text-tertiary text-center mt-2';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
