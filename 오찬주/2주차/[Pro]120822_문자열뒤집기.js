/*

[문자열 뒤집기]

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000

*/

//문제 풀이
//문자열을 배열로 변환(split) -> 배열 뒤집기(reverse) -> 배열을 문자열로 변환(join)

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

/*
다른 풀이
스프레드 문법(spread syntax)
: 배열이나 객체를 펼쳐서 개별 요소로 분리
: 주로 배열과 객체의 결합, 복사, 함수 호출 시 인수 전달 등 다양한 상황에서 사용

... 연산자
: 배열이나 문자열을 개별 요소로 분해하여 결합

const arr = [1, 2, 3];
const newArr = [...arr];
console.log(newArr); // 출력 결과: [1, 2, 3]

*/

function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
