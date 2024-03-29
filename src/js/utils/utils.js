/**
 * Возвращает слово в правильном склонении
 * pluralize(1, ['балл', 'балла', 'баллов']) // 1 балл
 * pluralize(2, ['балл', 'балла', 'баллов']) // 2 балла
 * pluralize(5, ['балл', 'балла', 'баллов']) // 5 баллов
 * @param {number} number
 * @param {array} titles
 * @returns string
 */
export const pluralize = (number, titles) => {
    const numberAbs = Math.abs(number);

    return titles[
        (numberAbs % 1000 > 4 && numberAbs % 1000 < 20)
            ? 2
            : [2, 0, 1, 1, 1, 2][(numberAbs % 10 < 5) ? numberAbs % 10 : 5]
    ];
};

/**
 * Возвращает целочисленное значение в виде строки с пробелами
 * pluralize(100000) // 100 000
 * @param {number} number
 * @returns string
 */
export const maskNumber = number => {
    const maskedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');

    return maskedNumber;

};
