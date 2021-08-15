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

// 两个顺序链表合并  用一个p把他们串起来
const mergeTwoLists = (l1, l2) => {
  const res = new ListNode(0);
  let p = res;
  let [p1, p2] = [l1, l2];
  while (p1 && p2) {
      if (p1.val < p2.val) {
          p.next = p1;
          p1 = p1.next;
      } else {
          p.next = p2;
          p2 = p2.next;
      }
      p = p.next;
  }
  p.next = p1 ? p1 : p2;
  return res.next;
};
