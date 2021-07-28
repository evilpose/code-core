class myPromise {
    constructor(handle) {
        this._onFulfilledCallbacks = [];
        this._onRejectedCallbacks = [];
        this.state = 'pending';
        this.value;
        this.reason;
        try {
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (e) {
            console.log('here');
            this._reject(e);        // ？
        }
    }

    _resolve(value) {
        console.log('执行 _resolve 了');
        if (this.state == 'pending') {
            this.state = 'resolved';
            this.value = value;
            setTimeout(() => {
                this._onFulfilledCallbacks.forEach((callback) => callback(value));
            })
        }
    }

    _reject(reason) {
        console.log('执行 _reject 了');
        if (this.state == 'pending') {
            this.state = 'rejected';
            this.reason = reason;
            setTimeout(() => {
                this._onRejectedCallbacks.forEach((callback) => callback(reason));
            })
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = onFulfilled instanceof Function ? onFulfilled : (v) => v;
        onRejected = onRejected instanceof Function ? onRejected : (r) => r;
        return new myPromise((nextResolve, nextReject) => {

            const _onResolved = () => {
                setTimeout(() => {
                    try {
                        // onFulfilled(this.value);
                        let res = onFulfilled(this.value);
                        if (res instanceof myPromise) {
                            res.then(nextResolve, nextReject);
                        } else {
                            nextResolve(res);
                        }
                    } catch (e) {
                        nextReject(e);
                    }
                })
            }

            const _onRejected = () => {
                setTimeout(() => {
                    try {
                        let res = onRejected(this.reason);
                        if (res instanceof myPromise) {
                            res.then(nextResolve, nextReject);
                        } else {
                            nextResolve(res);
                        }
                    } catch (e) {
                        nextReject(e);
                    }
                })
            }
            
            switch (this.state) {
                case 'resolved':
                    _onResolved();
                    break;
                case 'rejected':
                    _onRejected();
                    break;
                default:
                    this._onFulfilledCallbacks.push(_onResolved);
                    this._onRejectedCallbacks.push(_onRejected);
                    break;
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
}


let p = new myPromise(function (resolve, reject) {
    resolve(1);
}).then(function(res) {
    console.log(res);
});

// p.then(function (v) {
//     console.log(v);
//     return 2;
// }).then(function (v) {
//     console.log(v);
//     return new myPromise(function (resolve, reject) {
//         // setTimeout(function () {
//             resolve(3);
//         // }, 3000);
//     });
// }).then(function (v) {
//     console.log(v);
// });
