// arr[0] > arr[1]: true -> swap = arr[1], arr[1] = arr[0], arr[0] = swap / false -> arr[1]과 arr[2] 비교
// arr[1] > arr[2]: true -> swap = arr[2], arr[2] = arr[1], arr[1] = swap
// ...
// arr[n-1] > arr[n]: true -> ,,,,
// swap 함수의 역할: 단순히 arr의 앞뒤 요소의 위치를 바꿔준다.
const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubblSort = function (arr) {
  let length = arr.length;
  let i = 0;

  while (i < length) {
    // swap 의 횟수를 기록하는 이유:
    // 루프가 1회전 하면 swaps는 0으로 초기화된다.
    let swaps = 0;
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
        // swap 함수를 실행하면 j와 j+1 요소의 위치가 바뀐다.
      }
    }
    i++;
    // swap이 되지 않는다면 이미 정렬이 된 상태이기 때문에 루프를 종료시킨다.
    if (swaps === 0) {
      break;
      // return을 하면 함수가 종료된다.
    }
  }
  return arr;
};
