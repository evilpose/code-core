class myPromise {
    constructor(handle) {
        this._onFulfilledCallbacks = [];
        this._onRejectedCallbacks = [];
        this.state = 'pending';
        this.value;
        this.reason;

        let _resolve = (value) => {
            if (this.state == 'pending') {
                this.state = 'resolved';
                this.value = value;
                    this._onFulfilledCallbacks.forEach((callback) => callback(value));
            }
        }
    
        let _reject = (reason) => {
            if (this.state == 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                    this._onRejectedCallbacks.forEach((callback) => callback(reason));
            }
        }

        try {
            handle(_resolve, _reject);
        } catch (err) {
            _reject(err);
        }

    }

    then(onFulfilled, onRejected) {
        onFulfilled = onFulfilled instanceof Function ? onFulfilled : (v) => v;
        onRejected = onRejected instanceof Function ? onRejected : (r) => r;
        return new myPromise((nextResolve, nextReject) => {

            const _onResolved = () => {
                setTimeout(() => {
                    try {
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
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
p.then(function(res) {
    console.log(res);
    return new myPromise((resolve,reject) => {
        setTimeout(() => {
            resolve('2323')
        }, 3000);
    })
}).then((res) => {
    console.log(res);
});


myPromise.resolve = function(value){
    if (value instanceof Promise){
        return value;
    };
    return new Promise(resolve => resolve(value));
};

myPromise.reject = function(reason){
    return new Promise((resolve, reject) => reject(reason));
};

myPromise.all = function(promiseArr){
    let index = 0, result = [];
    return new Promise((resolve, reject) => {
        promiseArr.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                index++;
                result[i] = val;
                if(index === promiseArr.length) {
                    resolve(result);
                }
            }).catch(reason => reject(reason))
        })
    })
};

let q = new myPromise(function (resolve, reject) {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
// myPromise.all([p, q]).then(res => console.log(res));


myPromise.race = function(promiseArr){
    return new Promise((resolve, reject) => {
        promiseArr.forEach(p => {
            Promise.resolve(p).then(val => {
                resolve(val)
            }).catch(err => {
                reject(err)
            })
        })
    })
};
// myPromise.race([p, q]).then(res => console.log(res));


myPromise.allSettled = function(promiseArr){
    let result = [];

    return new Promise((resolve, reject) => {
        promiseArr.forEach(p => {
            Promise.resolve(p).then(val => {
                result.push({
                    status: 'fulfilled',
                    value: val
                });
                if (result.length === promiseArr.length) {
                    resolve(result);
                }
            }).catch(err => {
                result.push({
                    statue: 'rejected',
                    reason: err
                });
                if (result.length === promiseArr.length) {
                    resolve(result);
                }
            })
        })
    })
}


// let r = Promise.reject('出错了');

// myPromise.allSettled([p, r]).then(res => console.log(res));


myPromise.any = function(promiseArr) {
    let index = 0;
    return new Promise((resolve, reject) => {
        if(promiseArr.length === 0) return;
        promiseArr.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                resolve(val);
            }, err => {
                index++;
                if (index === promiseArr.length) {
                    reject(new AggregateError('All promises were rejected'));
                }
            })
        })
    })
};

const promises = [
    Promise.reject('ERROR A'),
    Promise.resolve('result A'),
    Promise.resolve('result B'),
]

myPromise.any(promises).then(res => console.log(res));

// finally()方法用来制定不管Promise对象最后状态如何，都会执行的操作
// Promise.finally()
