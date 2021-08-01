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