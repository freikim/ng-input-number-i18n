import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { NgInputNumberI18nConfig, NgInputNumberI18nDefaultLocale } from './ng-input-number-i18n.config';

@Injectable({
  providedIn: 'root'
})
export class NgInputNumberI18nService {

  configuration: NgInputNumberI18nConfig;

  constructor(private config: NgInputNumberI18nConfig) {
    this.configuration = this.config;
  }

  getLocale() {
    return this.configuration.locale;
  }

  getLocaleDecimalSeparator(): string {
    return getLocaleNumberSymbol(this.configuration.locale, NumberSymbol.Decimal);
  }

  getLocaleGroupSeparator(): string {
    return getLocaleNumberSymbol(this.configuration.locale, NumberSymbol.Group);
  }
}
