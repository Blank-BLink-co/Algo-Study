/*

[카운트업]

<문제 설명>
정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 
return하도록 solution 함수를 완성해주세요.

<제한사항>
0 ≤ start_num ≤ end_num ≤ 50

<입출력 예>
start_num	end_num	result
3	10	[3, 4, 5, 6, 7, 8, 9, 10]

*/

//문제 풀이

function solution(start_num, end_num) {
  var answer = [];
  for (i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

//주의 할 점: 계속 push[i]를 해서 빈배열로 return됐다.. 바본가 .. push(i)로 할 것!!

//다른 풀이

function solution(start_num, end_num) {
  return Array.from({ length: end_num - start_num + 1 }, () => {
    return start_num++;
  });
}
