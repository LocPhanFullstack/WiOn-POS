import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSButtonModule } from 'tds-ui/button';
import { Router } from '@angular/router';
import { TDSModalModule, TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'wion-fnb-disconnect-error',
  standalone: true,
  templateUrl: './disconnect-error.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TDSButtonModule, TDSModalModule],
  host: {
    class: 'w-full h-full flex',
  },
})
export class DisconnectErrorComponent implements OnInit {
  @Input() returnUrl = '/shop';

  constructor(
    private router: Router,
    private modalService: TDSModalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modalService.closeAll();
  }

  reloadPage() {
    window.location.reload();
  }
}
