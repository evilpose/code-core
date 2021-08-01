// 1. 你的网站是怎么阻止csrf 攻击的?
// 2. 为什么用token 就可以防止 csrf 攻击?
// 3. 讲一下跨域[跨域]  jsonp  什么是简单请求
// 4. xss

/**
 * csrf 是 跨站请求伪造，攻击者诱导受害者进去第三方网站，在第三方网站中向攻击网站发送跨站请求，
 * 利用被害者在被攻击网站的注册凭证，完成后台的验证，达到冒充用户对被攻击网站的执行某项操作的目的。
 * 
 * 特点
 *  一般发起在第三方的网站，而不是被攻击网站，被攻击网站无法防止被攻击。
 *  攻击者是利用受害者的凭据进行冒名操作，而不是直接盗取数据
 *  跨站请求可以使用各种方式：图片URL，超链接，CORS，Form提交等，部分请求方式可直接嵌入到第三方论坛、文章中。
 * 
 * 防护
 *  同源检查，使用 Origin Header 或者 Referer Header 进行同源验证
 *  Token 要求所有的用户请求都携带一个CSRF攻击者无法获取的Token，服务器进行校验携带的token的是否正确
 *    token分为两种，一种是存贮在session中，但是因为nginx的负载均衡，session默认存贮在单机服务器内存中，导致
 *    后面的请求拿不到数据，所以得存储在redis之类的公共空间中，但是这在读取和验证上有很大的复杂度和性能问题。所以
 *    有种方法是计算出token出来，而非随机生成，这样拿到之后进行解密，解析值然后进行判断。
 *  双重cookie验证，使用请求的时候带上cookie中的某些字段内容，但是这种方式也并不安全，在子域名下如果有xss攻击的话，
 *    修改了cookie，那么也还是有风险的。
 *  samesite 验证同源
 * 
 * xss 跨站脚本攻击
 *  是一种代码注入攻击，攻击者在目标网站上注入恶意脚本，使之在用户的浏览器上运行，利用这些恶意脚本获取敏感信息。
 * 分类
 *  存储型
 *  反射型
 *  DOM型
 * 防范
 *  针对输入内容进行转译，对HTML进行转译，多使用类库进行转译，避免使用innerHTML这种做法，控制输入长度也能增加xss攻击难度
 * 
 * 
 * 跨域：协议 + 域名 + 端口
 * 限制内容：cookie，localStorge，indexedDB 
 * 不限制内容：img href script
 * 跨域并不是发不出去，是发出去了，返回被浏览器拦截了
 * 解决方案： 
 *  1. jsonp  但是只持续get方案
 *  2. cores 当访问不同源服务器上的内容的时候，会发起一个 跨域http请求。
 *     2.2  简单请求
 *        请求方式为 HEAD,POST或者GET
 *        http消息头不超出 Accept、Accept、Accept-Language、
 *        Content-Language、 Last-Event-ID、 Content-Type(限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain)
 *        简单请求的实现具体来说就是在信息头中加入一个Origin字段
 *     2.3  非简单请求
 *        就是不满足上面情况之一的，比如请求方式为PUT，非简单请求会在请求之前发起一次预检请求，预检请求方式是options，
 *        预检请求后的回应，服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和
 *        Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
 *  3. node 正向代理
 *      比如webpack种的proxy，同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。
 *  4. nginx 反向代理
 *      通过nginx配置一个代理服务器做跳板机，反向代理访问目标，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。
 *  5. websocket 
 *      WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了,
 *      所以因此也没有跨域的限制。
 *  6. postMessage
 *      页面和其打开的新窗口的数据传递
 *      多窗口之间消息传递
 *      页面与嵌套的iframe消息传递
 *      上面三个场景的跨域数据传递
 *  7. document.domain + Iframe
 *      该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。
 *      只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域。
 *      实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。
 *  8. location.hash + iframe
 *      不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信
 *  9. window.name + iframe
 *      window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。
 */