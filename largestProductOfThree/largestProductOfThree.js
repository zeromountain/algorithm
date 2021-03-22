const largestProductOfThree = function (arr) {
  // 오름차순정렬
  const sorted_arr = arr.sort((a, b) => a - b);
  
  const length = arr.length,
        candi1 = sorted_arr[length - 1] * sorted_arr[length - 2] * sorted_arr[length - 3], // 모두 양수인 경우: 오름차순 정렬이므로 끝 인덱스부터 순차적으로 3개
        candi2 = sorted_arr[length - 1] * sorted_arr[0] * sorted_arr[1]; / 음수가나올 경우: 제일 작은 음수 두개 고르고(0번인덱스, 1번인덱스), 제일 큰 양수(끝 인덱스)의 곱
  return Math.max(candi1, candi2); // 두 가지 경우 중 더 큰 값 반환
};

/*
배열의 요소 중 3개의 요소의 곱으로 최대값 찾기
배열의 요소가 양의 정수라면 -> max 메소드를 사용하여 배열에서 slice해 변수에 저장
배열의 요소가 음의 정수라면 -> min 메소드를 사용하여 배열에서 sliceg해 변수에 저장
음수인 요소는 무조건 두번 곱해야함
*/

  // console.log(sorted_arr);
  // 오름차순 정렬된 배열에서
  // 제일 작은 수 첫 인덱스
  // 제일 큰 양수는 끝 인덱스
