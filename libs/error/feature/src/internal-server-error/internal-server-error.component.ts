import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSButtonModule } from 'tds-ui/button';
import { Router } from '@angular/router';
import { TDSModalModule, TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'wion-fnb-internal-server-error',
  standalone: true,
  templateUrl: './internal-server-error.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TDSButtonModule, TDSModalModule],
  host: {
    class: 'w-full h-full flex',
  },
})
export class InternalServerErrorComponent implements OnInit {
  constructor(
    private router: Router,
    private modalService: TDSModalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modalService.closeAll();
  }

  reload() {
    window.location.reload();
  }
}
