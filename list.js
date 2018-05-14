//Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение элементом списка.
//
//const numbers = l(3, 4, 5, 8);
//has(numbers, 8); // true
//has(numbers, 0); // false
//
//Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.
//
//const numbers = l(3, 4, 5);
//reverse(numbers); // (5, 4, 3)
//
//Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).
//
//const numbers = l(3, 4, 5, 8);
//const numbers2 = l(3, 2, 9);
//concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)


// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const has = (numbers, num) => {
  if (head(numbers) === num) {
    return true;
  }
  if (tail(numbers) === null) {
    return false;
  }
  else return has(tail(numbers), num);
};

export const reverse = (numbers) => {
  const iter = (counter, acc) => {
    if (counter === null) {
      return acc;
    }
    return iter(tail(counter), cons(head(counter), acc));
  };
  return iter(numbers, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) return list2;
  toString(list1);
  return cons(head(list1), concat(tail(list1), list2));
};
// END
