import {avg} from '../index.js';
import {duplicateCount} from '../index.js';
import {checkAnagram} from '../index.js';

describe('test avg - среднее значение массива', () => {
    it('среднее значение равно 2.5', () => {
        const result = avg([0, 1, 2, 3, 4, 5]);
        expect(result).toBe(2.5);
    }),
    it('если длина массива равна 0, то возвращается 0', () => {
        const result = avg([]);
        expect(result).toBe(0);
    })
});

describe('test duplicateCount - количество дубликатов в строке', () => {
    it('количество дубликатов равно 0', () => {
        const result = duplicateCount('abcdee');
        expect(result).toBe(1);
    }),
    it('количество дупликатов для пустой строки - 0', () => {
        const result = duplicateCount('');
        expect(result).toBe(0);
    })
    it('регистр не влияет на подсчет дубликатов - 3', () => {
        const result = duplicateCount('asdAZxcz929');
        expect(result).toBe(3);
    }),
    it('пробелы не учитываютя при подсчете дубликатов', () => {
        const result = duplicateCount('vv dD 77 qwe');
        expect(result).toBe(3);
    })
});

describe('test checkAnagram - \
являются ли строки анаграммами \
(регистр, пробелы и знаки препинания не учитываются)', () => {

    const str1 = 'an,a gR.am';
    const str2 = 'Amr-ganA';

    it('true', () => {
        const result = checkAnagram(`${str1}`, `${str2}`);
        expect(result).toBe(true);
    })
});
