import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSModalModule, TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'wion-fnb-page-not-found',
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TDSButtonModule, TDSModalModule],
  host: {
    class: 'w-full h-full flex',
  },
})
export class PageNotFoundComponent implements OnInit {
  constructor(private modalService: TDSModalService) {}

  ngOnInit(): void {
    this.modalService.closeAll();
  }

  onBack() {
    history.back();
  }
}
