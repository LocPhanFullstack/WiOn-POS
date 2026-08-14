import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageModule } from 'tds-ui/message';
import { TDSUploadModule } from 'tds-ui/upload';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDS_BASE_URL_IMAGE, TDSImageModule } from 'tds-ui/image';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { ButtonSize } from 'tds-ui/core/config';
import { WIMfConfigService } from '@wi-mfes/config';
import { TDSMapperPipeModule } from 'tds-ui/cdk/pipes/mapper';

@Component({
  selector: 'wp-image',
  standalone: true,
  imports: [
    CommonModule,
    TDSUploadModule,
    TDSDropDownModule,
    TDSMessageModule,
    TDSImageModule,
    TDSSpinnerModule,
    TDSAvatarModule,
    TDSMapperPipeModule,
  ],
  providers: [
    TDSDestroyService,
    {
      provide: TDS_BASE_URL_IMAGE,
      useFactory: (service: WIMfConfigService) => {
        const config = service.getRemoteConfig('file');
        return config ? config.assetsBaseUrl : '';
      },
      deps: [WIMfConfigService],
    },
  ],
  styleUrls: ['./wp-image.component.scss'],
  templateUrl: './wp-image.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-w-full max-h-full flex',
  },
})
export class WPImageComponent implements OnInit, OnChanges {
  @Input() imageUrl!: string | null | undefined;
  @Input() title!: string;
  @Input() id: TDSSafeAny = 'default';
  @Input() icon: string = '';
  @Input() iconSize?: number;
  @Input() styleClass: string =
    'tds-avatar-color-background-icon tds-color-icon-disable';
  @Input() errorStyleClass?: string;
  @Input() radius: number = 9999;
  @Input() width?: number;
  @Input() height?: number;
  @Input() errorImage?: string;
  @Input() useTDSAvatar: boolean = false;
  @Input() maskIcon!: string;
  @Input() maskSize: number = 34;
  @Input() maskRadius: number = 9999;
  @Input() maskIconSize: number = 20;
  @Input() spinningSize!: ButtonSize;

  @Output() removeImage: EventEmitter<number> = new EventEmitter<number>();
  @Output() errorId: EventEmitter<{ id: any; error: boolean }> =
    new EventEmitter<{ id: any; error: boolean }>();

  private baseUrlImage = inject(TDS_BASE_URL_IMAGE);
  previewVisible = false;
  loading: { [id: string]: boolean } = {};
  errors: { [id: string]: boolean } = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.imageUrl) {
      this.loading[`${this.id}`] = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imageUrl'] && !changes['imageUrl'].firstChange) {
      this.imageUrl = changes['imageUrl'].currentValue;
      if (this.imageUrl) {
        delete this.errors[`${this.id}`];
        this.loading[`${this.id}`] = true;
      }
    }
  }

  avatarLoaded(id: TDSSafeAny) {
    if (this.errors[`${id}`]) {
      this.errorId.emit({ id: id, error: false });
    }
    delete this.loading[`${id}`];
    delete this.errors[`${id}`];
  }

  avatarHasError(id: TDSSafeAny) {
    this.errors[`${id}`] = true;
    delete this.loading[`${id}`];
    this.errorId.emit({ id: id, error: true });
  }

  onVisiblePreview(e: boolean) {
    this.previewVisible = e;
  }

  onRemoveImage(id: number) {
    this.removeImage.emit(id);
  }

  closeMenu() {
    this.previewVisible = false;
  }

  readonly mapperSource = (
    url: string,
    loadingChange: boolean = false
  ): string => {
    if (
      TDSHelperString.hasValueString(this.baseUrlImage) &&
      TDSHelperString.hasValueString(url)
    ) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return this.baseUrlImage + url;
      }
    }
    return url;
  };
}
