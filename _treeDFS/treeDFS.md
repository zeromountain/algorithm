### zero.mountain

```js
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다. 
  // root노드를 제일 먼저
  // root노드의 children[0~1] 순회
  // children[0] 자식노드들 추가
  // children[1] 방문
  let value = [node.value];
  for(let i = 0; i < node.children.length; i++) {
    value = value.concat(dfs(node.children[i]));
  }
  return value;
};

  /*
parent_node = {
  value: value;
  children: [
    child_node{
      value:
      childre:[...]
    }
  ]
}
*/
// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
```

### justmin

```js
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let bucket = [node.value]

  if(node.children.length > 0){
    for(let i=0;i<node.children.length;i++){
      bucket = [...bucket, ...dfs(node.children[i])]
    }
  }

  return bucket;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
```
