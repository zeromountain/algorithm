// n이 0인가? yes -> return 0, No -> else if
// n이 1인가? yes -> return 1, No -> else if
// n이 2인가? yes -> fibo(0) + fibo(1), No-> else if
// ...
// n이 n-1인가? yes -> fibo(n-2) + fibo(n-1)
// Advanced
// 알고리즘 최적화: 각 회차의 요소들을 배열에 저장하면 O(n)으로 시간복잡도를 줄일 수 있다.
// 함수 실행시 n번째 요소를 함수 내부의 배열에 저장해 기억한다.
function fibonacci(n) {
  // 0번째, 1번째 요소는 이미 정의되었으므로 배열에 저장해둔다.
  const sequence = [0, 1];
  // 배열에 저장되지 않은 n번째 요소들을 저장하는 함수
  const addFibo = (n) => {
    // n이 배열의 요소가 값이 존재한다면 배열의 n번째 요소를 리턴
    if (sequence[n] !== undefined) return sequence[n];
    // 그렇지 않다면 배열에 저장 후 n 번째 요소를 리턴
    sequence[n] = addFibo(n - 1) + addFibo(n - 2);
    return sequence[n];
  };
  // addFibo를 반환값으로 주어야 재귀함수가 실행
  return addFibo(n);
}
