// 1 단비
let tiling = function (n) {
  //경우의수
  let nCase  = [1, 2, 3];
  if(n < 4) {
    return n
  } else {
    for(let i = 3; i < n; i++) {
      nCase[i] =  nCase[i - 1] + nCase[i - 2]
    }
  }
  return nCase[n - 1]
};

// 2 영산
let tiling = function (n) {
  //경우의수
  let nCase  = [1, 2, 3];
  if(n < 4) {
    return n
  } else {
    for(let i = 3; i < n; i++) {
      nCase[i] =  nCase[i - 1] + nCase[i - 2]
    }
  }
  return nCase[n - 1]
};

// 3 민우
let tiling = function (n) {
  const recursive = (result,num1,num2,counter) => {
    return n === counter ? result : recursive(num1+num2, num2, num1+num2, counter+1)
  }
  return n <= 3 ? n : recursive(5,3,5,4);
};
