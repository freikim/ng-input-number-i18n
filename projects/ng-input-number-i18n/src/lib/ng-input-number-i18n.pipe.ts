import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numberFormat'
})
export class NgInputNumberI18nPipe extends DecimalPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale) {
    super(locale);
  }

  transform(value: number | string, digitsInfo?: string, locale?: string): string | null;
  transform(value: null | undefined, digitsInfo?: string, locale?: string): null;
  transform(value: number | string | null | undefined, digitsInfo?: string, locale?: string): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value === 'number') {
      value = value.toString();
    }

    return value === '0' ? '0' : !digitsInfo ? value : super.transform(value, digitsInfo);
  }
}
