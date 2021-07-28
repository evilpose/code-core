const getJSON = function(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechang = function(){
      if(xhr.readyState !== 4) return;
      if(xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } esle {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  })
}

/**
 * 1. 状态码
 *      100   一切正常，继续请求
 *      101   服务器应客户端进行协议切换
 *    2XX 成功状态码
 *      200   请求成功
 *      201   请求成功，并创建了新的资源，新的资源在应答之前就被创建了
 *      202   表示服务器已经收到请求消息，但还没有进行处理
 *      204   表示目前请求成功，但客户端不需要更新现有页面
 *    3XX 重定向状态码
 *      300   请求成功吗，但是结果有多个选择
 *      301   永久性重定向
 *      302   临时性重定向
 *      303   请使用 get 来访问新地址获取资源
 *      304   无需再次传输请求内容，可以使用缓存的内容
 *    4XX 客户端错误状态码
 *      400   请求出现错误，比如请求头不对
 *      401   没有提供认证信息，请求没有带上 token 等
 *      403   请求的资源不允许访问问
 *      404   请求内容不存在
 *      405   客户端请求的方法虽然能被服务器识别，但是服务器禁止使用该方法
 *    5XX 服务器错误状态码
 *      500   服务器错误
 *      501   表示request header 里的 method 或 Content-* 时不被服务器支持，无法被处理
 *      502   网管错误，与 web 服务器通讯失败
 *      503   服务器暂时不可用
 *      504   表示网关或者代理服务器无法再规定时间内活得想要内容
 *      505   请求 http 版本不支持
 * 2. application/json 类型
 */ 