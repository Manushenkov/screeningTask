import {Currency} from "../reducer";

export enum CurrencySign {
    RUB = "₽",
    USD = "$",
    EUR = "€",
}

export function getCurrentCurrencySign(currency: Currency) {
    switch (currency) {
        case Currency.RUB:
            return CurrencySign.RUB;

        case Currency.USD:
            return CurrencySign.USD;

        case Currency.EUR:
            return CurrencySign.EUR;

        default:
            return CurrencySign.RUB;
    }
}
