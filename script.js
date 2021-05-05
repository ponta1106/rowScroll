let boxes = [];
let left = 0;
const con = document.querySelector('.container');

const create = () => {
  // divを生成しboxesに代入
  for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'box');
    div.setAttribute('id', 'box' + i);  
    boxes.push(div);
  };
  setTimeout(create, 7000);
}

const set = () => {
  // .container内にboxesの中身をマウント
  for (let i = 0; i < boxes.length; i++) {
    con.appendChild(boxes[i]);
  }
  setTimeout(set, 7000);
}

// boxesの先頭１０個を削除
const destroy = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes.shift(boxes[0]);
  }
  setTimeout(destroy, 7000);
}

// 要素を左に移動
const margin = () => {
  con.style.marginLeft = left + "px";
  left--;
  setTimeout(margin, 1);
}

create();
set();

setTimeout(create, 7000);
setTimeout(set, 7000);
setTimeout(destroy, 7000);
setTimeout(margin, 1);
