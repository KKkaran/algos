let edges = [[4,5],[5,3],[1,5],[2,1]]//edges of the tree
//create the final tree from the above edges.
 /*
        1
      /   \
     5     2
    /  \
   4    3
 */

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


//recursice approach
function dfs(root){
    if(root === null) return [];

    const leftValues = dfs(root.left);
    const rightValues = dfs(root.right);


    return [root.val,...leftValues, ...rightValues];

}
console.log(dfs(a));







//iterative approach
// function dfs(root){
//     if(root == null) return [];

//     const stack = [ root ]
//     const result = [];
//     while(stack.length > 0){
//         const curr = stack.pop();
//         result.push(curr.val);        
//         if(curr.left) stack.push(curr.left)
//         if(curr.right) stack.push(curr.right)
//     }
//     return result;
// }
// console.log(dfs(a))
