let player1 = {
  level: 1,
  phone: "567898",
  name: "frank"
};

let player2 = {
  level: 4,
  phone: "5678956768",
  name: "randy"
};
let player3 = {
  level: 2,
  phone: "5678956768",
  name: "rjeff"
};
let player4 = {
  level: 60,
  phone: "5678956768",
  name: "jose"
};
let player5 = {
  level: 56,
  phone: "5678956768",
  name: "pepe"
};
let player6 = {
  level: 26,
  phone: "5678956768",
  name: "heman"
};
let player7 = {
  level: 34,
  phone: "5678956768",
  name: "lissett"
};
let player8 = {
  level: 64,
  phone: "5678956768",
  name: "dion"
};
let player9 = {
  level: 7,
  phone: "5678956768",
  name: "tony"
};
let player10 = {
  level: 94,
  phone: "5678956768",
  name: "keylani"
};

class Node {
  constructor(id, player) {
    this.id = id;
    this.player = player;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nid = 0;
    this.length = 0;
  }

  insert(player) {
    const node = new Node(this.nid++, player);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  search(id) {
    let node = this.head;
    while (node) {
      if (id === node.id) {
        return node;
      } else if (node.next) {
        console.log("player not found");
        node = node.next;
      }
    }
  }

  forEach(callback) {
    let node = this.head;

    if (node) {
      callback(node);

      while (node.next) {
        node = node.next;
        callback(node);
      }
    }
  }
}
// ******************************EVENT LISTENERS*****************************

let displaybtn = document.getElementById("displaybtn");
displaybtn.addEventListener("click", function(e) {
  console.log("working");
  linkedList.forEach(function(node) {
    let display = document.getElementById("display");
    display.innerHTML += node.player.name;
    console.log(displaybtn.addEventListener);
  });
});

let searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", function(e) {
  console.log("itworks")
  let search = document.getElementById("searchinput");
  if (search.value == node.id) {
  search.innerHTML += node.player.name;
  }
});

let node = new Node();
let linkedList = new LinkedList();

linkedList.insert(player1);
linkedList.insert(player2);
linkedList.insert(player3);
linkedList.insert(player4);
linkedList.insert(player5);
linkedList.insert(player6);
linkedList.insert(player7);
linkedList.insert(player8);
linkedList.insert(player9);
linkedList.insert(player10);

console.log(linkedList);
