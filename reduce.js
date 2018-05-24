//html-tags.js
//
//Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:
//
//import { node, append, make, reduce } from 'hexlet-html-tags';
//
//const html1 = append(make(), node('h1', 'header1'));
//const html2 = append(html1, node('h1', 'header2'));
//const html3 = append(html2, node('p', 'content'));
//
//reduce((element, acc) => {
//  return is('h1', element) ? acc + 1 : acc;
//}, 0, html3); // 2
//
//Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.
//
//import { make, append, node } from 'hexlet-html-tags';
//
//const html1 = make();
//const html2 = append(html1, node('h1', 'scheme'));
//const html3 = append(html2, node('p', 'is a lisp'));
//const html4 = append(html3, node('blockquote', ''));
//const html5 = append(html4, node('blockquote', ''));
//const html6 = append(html5, node('blockquote', 'quote'));
//
//emptyTagsCount('blockquote', html6); // 2
//
//Примечание
//
//Функцию headersCount можно использовать для наглядного сопоставления частного варианта свёртки с обобщённой реализацией операции отображения (собственно, reduce).

import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (func, StartAcc, dom) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item = head(items);
    const newAcc = func(item, acc);
    return iter(tail(items), newAcc);
  };
  return iter(dom, StartAcc);
};

export const emptyTagsCount = (tag, dom) => reduce((element, acc) =>
  (is(tag, element) && (value(element) === '') ? acc + 1 : acc), 0, dom);

// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
