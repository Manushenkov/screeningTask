export const createDecline = (text_forms: string[]) => (n: number) => {
    n = Math.abs(n) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) {
        return n + " " + text_forms[2];
    }

    if (n1 > 1 && n1 < 5) {
        return n + " " + text_forms[1];
    }

    if (n1 === 1) {
        return n + " " + text_forms[0];
    }

    return n + " " + text_forms[2];
};
