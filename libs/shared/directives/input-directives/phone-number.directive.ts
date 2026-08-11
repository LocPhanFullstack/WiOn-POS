import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { checkValidPhoneByGoogleLib } from '../docs/google-libphone';
import { TDSHelperString } from 'tds-ui/shared/utility';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[wpPhoneNumber]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WPPhoneNumberDirective),
      multi: true,
    },
  ],
})
export class WPPhoneNumberDirective {
  @Input() allowPlusSign: boolean = false;
  @Output() validPhonePattern = new EventEmitter<boolean>();

  private onChange = (_: any) => {};
  private onTouched = () => {};
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event']) onInput(event: any): void {
    const input = event.target as HTMLInputElement;
    const inputText = event.data;
    let pointerStart = input.selectionStart;
    let pointerEnd = input.selectionEnd;
    let value = '';
    let result = '';

    if (inputText) {
      const startWithPlus =
        pointerStart! == inputText.length &&
        this.allowPlusSign &&
        inputText.startsWith('+');
      const removedString = inputText.replace(/[0-9]/g, '');

      if (startWithPlus) {
        pointerStart = pointerStart! - removedString.length + 1;
        pointerEnd = pointerEnd! - removedString.length + 1;
      } else {
        pointerStart = pointerStart! - removedString.length;
        pointerEnd = pointerEnd! - removedString.length;
      }
    }

    // set lại vị trí ban đầu của con trỏ chuột (set trước khi setSelectionRange thực thi)
    setTimeout(() => {
      input.setSelectionRange(pointerStart, pointerEnd);
    }, 1);

    if (this.allowPlusSign) {
      if (input.value.startsWith('+')) {
        value = '+' + input.value.replace(/[^0-9]/g, '');
      } else {
        value = input.value.replace(/[^0-9]/g, '');
      }
    } else {
      value = input.value.replace(/[^0-9]/g, '');
    }

    if (input.maxLength && input.maxLength > 0) {
      result = value.substring(0, input.maxLength);
    } else {
      result = value;
    }
    // gán lại chuỗi sdt
    input.value = result; // update trên UI
    this.onChange(result); // update form
    //check valid sdt
    if (TDSHelperString.hasValueString(result)) {
      this.validPhonePattern.emit(checkValidPhoneByGoogleLib(result));
    } else {
      this.validPhonePattern.emit(true);
    }
  }

  @HostListener('blur')
  handleBlur() {
    this.onTouched();
  }

  writeValue(value: string): void {
    if (value) {
      if (this.allowPlusSign) {
        if (value.startsWith('+')) {
          value = '+' + value.replace(/[^0-9]/g, '');
        } else {
          value = value.replace(/[^0-9]/g, '');
        }
      } else {
        value = value.replace(/[^0-9]/g, '');
      }
      const maxLength = this.el.nativeElement.maxLength;
      if (maxLength > 0) {
        value = value.substring(0, maxLength);
      }
    }
    this.el.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
