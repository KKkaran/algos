let edges = [[4,5],[5,3],[1,5],[2,1]]//edges of the tree
//create the final tree from the above edges.
 /*
        1
      /   \
     5     2
    /  \
   4    3
 */
 // [ 1, 5, 2, 4, 3   ]
class Node{
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const recursive = (root)=>{
    if(root == null) return []

   const left =  recursive(root.left)
   const right =  recursive(root.right)

    return [root.val, ...left,...right]
    
}
const iterative = (root)=>{

    if (root === null) return []
    const list = []
    const queue = [ root ];
    while(queue.length > 0){

        const curr = queue.shift(); //remove from the front
        list.push(curr.val);
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)

    }
    return list;

}
console.log(recursive(a));
//console.log(iterative(a));





