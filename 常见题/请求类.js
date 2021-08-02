// 聊一下axios .有什么优点, 跟 fetch, ajax对比
// axios 为什么既可以在浏览器发请求,又可以在node层发请求?

/**
 * ajax 是 jquery, 是基于 XHR 封装的，还支持 JOSNP
 * 
 * 
 * fetch 是比较靠近底层的一个, 是基于 promise 设计的, 当接受错误的http码的时候还是resolve, 但是会将 resolve 的返回值的 ok 属性设置为 false。
 * Fetch是一种新的获取资源的接口方式，并不是对XMLHttpRequest的封装。
 *  仅当网络故障时或请求被阻止时，才会标记为 reject。
 *  默认情况下, fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）.
 *  搭配上async/await将会让我们的异步代码更加优雅
 * 
 * 
 * axios 是封装非常好, 又比较小的一个, Axios是对XMLHttpRequest的封装, 可以在node.js中使用, 提供了并发请求的接口, 支持Promise API。
 * 
 * fetch 和 axios 它们最大的不同点在于Fetch是浏览器原生支持，而Axios需要引入Axios库。
 * 传递数据，Axios是放到data属性里，以对象的方式进行传递，而Fetch则是需要放在body属性中，以字符串的方式进行传递。
 * Axios的相应超时设置是非常简单的，直接设置timeout属性就可以了，Fetch提供了AbortController属性，但是使用起来不像Axios那么简单。
 * Axios还有非常好的一点就是会自动对数据进行转化，而Fetch则不同，它需要使用者进行手动转化。
 * Axios的一大卖点就是它提供了拦截器，可以统一对请求或响应进行一些处理，使用它可以为请求附加token、为请求增加时间戳防止请求缓存，以及拦截响应，
 *  一旦状态码不符合预期则直接将响应消息通过弹框的形式展示在界面上，比如密码错误、服务器内部错误、表单验证不通过等问题。
 *  而Fetch没有拦截器功能，但是要实现该功能并不难，直接重写全局Fetch方法就可以办到。
 * 
 */