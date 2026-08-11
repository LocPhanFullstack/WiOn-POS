import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TDS_I18N, vi_VN } from 'tds-ui/i18n'; 
// Đa ngôn ngữ
import localeVi from '@angular/common/locales/vi'; 
import { registerLocaleData } from '@angular/common'; 

// Thiết lập tiếng Việt
registerLocaleData(localeVi); 

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'wion-fnb-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TDS_I18N, useValue: vi_VN }],
})
export class AppComponent {
  title = 'admin';
}
