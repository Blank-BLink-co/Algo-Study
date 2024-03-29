/*

[점의 위치 구하기]

문제 설명
사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 
사분면은 아래와 같이 1부터 4까지 번호를 매깁니다.
x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 
좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 
solution 함수를 완성해주세요.

제한사항
dot의 길이 = 2
dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
-500 ≤ dot의 원소 ≤ 500
dot의 원소는 0이 아닙니다.

*/

//문제 풀이
// if, else if문으로 하면 될듯

function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  } else if (dot[0] < 0 && dot[0] < 0) {
    return 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    return 4;
  }
}

/*
다른 풀이 방법
- 구조 분해 할당 & 삼항 연산자
: 객체나 배열을 변수로 분해할 수 있게 해주는 문법

dot은 좌표 [x,y]를 나타냄

*/

function solution(dot) {
  //x좌표 y좌표는 상수이기에 const 사용
  const [numx, numy] = dot;
  const check = numx * numy > 0;
  return numx > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

const dot1 = [4, -1];

console.log(solution(dot1));
