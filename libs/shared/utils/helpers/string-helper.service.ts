import { Injectable } from '@angular/core';
import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';

@Injectable({
  providedIn: 'root',
})
export class WPStringHelperService {
  constructor() {}

  // phương thức viết hoa chữ cái đầu chuỗi (applyAllChar = true: viết hoa toàn bộ chữ cái đầu của mỗi từ)
  public uppercaseFirstChar(
    value: string,
    applyAllChar: boolean = false
  ): string {
    if (!TDSHelperString.hasValueString(value?.trim())) {
      return '';
    } else {
      let data: string[] = [];
      if (applyAllChar) {
        const words = value.split(' ');
        data = words.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1));
      } else {
        data = [value.charAt(0).toUpperCase() + value.slice(1)];
      }
      return data.join(' ');
    }
  }

  // áp dụng phương thức viết hoa chữ cái đầu chuỗi, đầu vào là giá trị trả về của event (input)
  public uppercaseFirstCharInputValue(
    inputEvent: TDSSafeAny,
    applyAllChar: boolean = false
  ): string {
    const value = inputEvent.target?.value as string;
    const start = inputEvent.target.selectionStart;
    const end = inputEvent.target.selectionEnd;

    // set lại vị trí ban đầu của con trỏ chuột (set trước khi setSelectionRange thực thi)
    setTimeout(() => {
      inputEvent.target.setSelectionRange(start, end);
    }, 1);
    return this.uppercaseFirstChar(value, applyAllChar);
  }

  //phương thức hightlight ký tự được tìm thấy
  public styleSearchLabel(
    value: string,
    searchText: string,
    limitCharacter?: number | undefined,
    decorationClass: string = 'tds-color-text-info-light dark:tds-color-text-info-dark'
  ) {
    const text = searchText;
    let data = value;
    let result: string = '';

    if (
      TDSHelperString.hasValueString(data.trim()) &&
      TDSHelperString.hasValueString(text.trim())
    ) {
      if (limitCharacter != undefined && data.length > limitCharacter) {
        data = data.slice(0, limitCharacter).trim() + '...';
      }

      let startIndex = TDSHelperString.stripSpecialChars(
        TDSHelperString.compoundUnicode(data)
      )
        .toLocaleLowerCase()
        .search(
          TDSHelperString.stripSpecialChars(
            TDSHelperString.compoundUnicode(text)
          ).toLocaleLowerCase()
        );

      if (startIndex >= 0) {
        if (startIndex > 0) {
          for (let i = 0; i <= startIndex; i++) {
            if (AccentCharacterUnicodes.includes(data.charCodeAt(i))) {
              startIndex = startIndex + 1;
            }
          }
        }

        let endIndex = startIndex + text.length;
        for (let i = startIndex; i <= endIndex; i++) {
          if (AccentCharacterUnicodes.includes(data.charCodeAt(i))) {
            endIndex = endIndex + 1;
          }
        }

        const replaceValue = data.substring(startIndex, endIndex);
        result = TDSHelperString.replaceAll(
          data,
          replaceValue,
          `<span class="${decorationClass}">${replaceValue}</span>`
        );
      } else {
        result = data;
      }
    }
    return TDSHelperString.compoundUnicode(result);
  }

  public detectVietnameseCharacter(value: string) {
    return VietnameseCharactersRegex.test(value);
  }

  public getVietnameseCharacterRegex() {
    return VietnameseCharactersRegex;
  }

  public detectEmoji(value: string): boolean {
    return emojiRegex?.test(value);
  }

  public getEmojiRegex() {
    return emojiRegex;
  }

  public detechExceptedKeysForSeachInput(event: any) {
    return exceptedFunctionKeys.indexOf(event.key) > -1;
  }

  public getExceptedKeysForSeachInput() {
    return exceptedFunctionKeys;
  }
}

// trừ 'Shift' 'Control'
const exceptedFunctionKeys = [
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Tab',
  'CapsLock',
  'Meta',
  'Alt',
  'ContextMenu',
  'Escape',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'PrintScreen',
  'ScrollLock',
  'Pause',
  'Insert',
  'Home',
  'PageUp',
  'PageDown',
  'End',
];
const emojiRegex =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])|[\u200D\u2640-\u2642\u2600-\u26FF]|\uFE0F/g;
const AccentCharacterUnicodes = [768, 769, 777, 771, 803]; //huyền, sắt, hỏi, ngã, nặng
const VietnameseCharactersRegex: RegExp = new RegExp(
  /[àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]/u
);
