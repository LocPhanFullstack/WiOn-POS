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
  selector: 'wion-fnb-empty-search',
  standalone: true,
  templateUrl: './empty-search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TDSIllustrationModule],
  host: {
    class: 'w-full flex',
  },
})
export class EmptySearchComponent implements OnInit {
  @Input() iconName: string = 'wi-empty-search';
  @Input() contentClass: string =
    'tds-color-text-secondary tds-body-2 text-center mt-3';
  @Input() iconWidth: number = 350;
  @Input() iconHeight: number = 350;
  @Input() searchText: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
