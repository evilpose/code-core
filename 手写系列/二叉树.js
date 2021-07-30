let tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4
        }
    }
}

// 前序遍历
var forwordTraversal = function(root){
    const res = [];
    const handle = (root) => {
        if (!root) {
            return
        }
        res.push(root.val);
        handle(root.left);
        handle(root.right);
    };
    handle(root)
    return res;
}
console.log(forwordTraversal(tree));

// 中序遍历
var inorderTraversal = function(root) {
    const res = [];
    const handle = (root) => {
        if (!root) {
            return;
        }
        handle(root.left);
        res.push(root.val);
        handle(root.right);
    }
    handle(root);
    return res;
};

console.log(inorderTraversal(tree));

// 后续遍历
var endTraversal = function(root){
    let res = [];
    let handle = (root) => {
        if(!root){
            return
        }
        handle(root.left);
        handle(root.right);
        res.push(root.val);
    };
    handle(root);
    return res;
}
console.log(endTraversal(tree));