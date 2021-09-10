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

// 二叉树深度
var maxDepth = function(root){
    if(!root){
        return 0;
    }

    let loop = (node, depth = 1) => {
        if(!node){
            return depth - 1
        }
        if(!node.left && !node.right){
            return depth;
        }
        const leftDepth = loop(node.left, depth);
        const rightDepth = loop(node.right, depth);
        return Math.max(leftDepth, rightDepth);
    }

    return loop(root);
}

// 二叉树最近的公共祖先
const lowestCommonAncestor = (root, q, p) => {
    if(!root || root === p || root === q){ return root };
    const left = lowestCommonAncestor(root.left, q, p);
    const right = lowestCommonAncestor(root.right, q, p);
    if(!left) return right;
    if(!right) return left;
    return root;
}

// 二叉树的右视图
var rightSideView = function(root) {
    //二叉树右视图 只需要把每一层最后一个节点存储到res数组
      let res = [], queue = [];
      queue.push(root);
      while(queue.length&&root){
          let length = queue.length;
          while(length--){
              node = queue.shift();
              if(!length){
                  res.push(node.val)
              }
              node.left&&queue.push(node.left)
              node.right&&queue.push(node.right)
          }
      }
      return res;
};

// 二叉树中的最大路径和
var maxPathSum = function(root) {
    let ans = root.val
    function dfs (node) {
        if (!node) {
            return 0
        }
        const { left, right, val } = node
        const L = dfs(right)
        const R = dfs(left)

        ans = Math.max(ans, val + L + R, val + L, val + R, val)

        return Math.max(val, val + Math.max(L, R))
    }
    dfs(root)
    return ans
};