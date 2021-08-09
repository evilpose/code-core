// 反转链表

function reserverList(head){
  let pre = null, curr = head;
  while(curr){
    const next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  };
  return pre;
}

// 两个链表的第一个公共节点
// 解法一  存一个链表 另一个进行对比 
// 解法二  齐头并进
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
      return null;
  }
  let pA = headA, pB = headB;
  while (pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return pA;
}

// 两个顺序链表合并
const mergeTwoLists = (l1, l2) => {
  // 定义一个虚拟节点，最后返回虚拟节点的下一个节点
  const res = new ListNode(0);
  // 定义p指向虚拟节点
  let p = res;
  // 定义p1,p2分别指向两个链表头部
  let [p1, p2] = [l1, l2];
  // 当p1, p2都有值的时候
  while (p1 && p2) {
      // 如果p1指向的值小，则p指向p1的值
      // p1右移
      // 否则p指向p2的值，p2右移
      if (p1.val < p2.val) {
          p.next = p1;
          p1 = p1.next;
      } else {
          p.next = p2;
          p2 = p2.next;
      }
      // 记得p也要右移
      p = p.next;
  }
  // 到最后退出循环了，p1,p2肯定有且只有一个是null
  // 那么另一个不是null的还没有连接到p上
  // 把p再连接到不是null的那个
  p.next = p1 ? p1 : p2;
  // 返回虚拟节点的下一个节点
  return res.next;
};
