// Функцию avg возвращает среднее значение переданного массива,
// если длина массива равна нулю, то возвращается 0
export function avg(array) {
  if(array.length === 0) return 0;

  return array.reduce((a, v) => a + v, 0) / array.length;
}

// функция duplicateCount принимает строку и возвращает количество дубликатов в ней,
// регистр символов не имеет значения,
// пробелы не учитываются при подсчете дубликатов
export  function duplicateCount(text) {
  const duplicates = [];

  return text
      .toLowerCase()
      .replace(/ /g, '')
      .split("")
      .reduce((acc, cur, index, arr) => {
          if (arr.includes(cur, ++index) && !duplicates.includes(cur)) {
              duplicates.push(cur);
              return ++acc;
          }
          return acc;
      }, 0);
}

// Функцию checkAnagram проверяет, являются ли две строки анаграммами, 
// регистр букв не имеет значения,
// пробелы или знаки препинания в расчет не берутся
export const checkAnagram = (str1, str2) => {
  return str1
    .replace(/[^A-Za-z0-9]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('') == str2
    .replace(/[^A-Za-z0-9]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

