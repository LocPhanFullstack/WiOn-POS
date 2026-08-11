import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[wpPassword]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WPPasswordDirective),
      multi: true,
    },
  ],
})
export class WPPasswordDirective {
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input') onInput() {
    let value = this.el.nativeElement.value;
    if (!!value) {
      // loại bỏ dấu tiếng Việt
      value = value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
      // loại bỏ khoảng trắng
      value = value.replace(/\s+/g, '');
    }
    // gán lại chuỗi password
    this.el.nativeElement.value = value;
    this.onChange(value);
  }

  @HostListener('blur')
  handleBlur() {
    this.onTouched();
  }

  writeValue(value: string): void {
    if (!!value) {
      // loại bỏ dấu tiếng Việt
      value = value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
      // loại bỏ khoảng trắng
      value = value.replace(/\s+/g, '');
    }
    // gán lại chuỗi password
    this.el.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
