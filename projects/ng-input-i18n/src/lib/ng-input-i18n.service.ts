import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { NgInputI18nConfig } from './ng-input-i18n.config';

@Injectable({
  providedIn: 'root'
})
export class NgInputI18nService {

  defaultLocale: 'en-US';

  configuration: NgInputI18nConfig;

  constructor(@Inject(LOCALE_ID) private locale: string, private config: NgInputI18nConfig) {
    this.configuration = this.config;
  }

  getLocale() {
    return this.locale;
  }

  getLocaleDecimalSeparator(): string {
    return getLocaleNumberSymbol(this.locale ? this.locale : this.defaultLocale, NumberSymbol.Decimal);
  }

  getLocaleGroupSeparator(): string {
    return getLocaleNumberSymbol(this.locale ? this.locale : this.defaultLocale, NumberSymbol.Group);
  }
}
