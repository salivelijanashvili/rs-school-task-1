// base class
class BaseClass {
    plus(...params) {
        this.param += params.reduce((previousValue, currentValue) => previousValue + currentValue);
        console.log(this.param);
        return this;
    }

    minus(...params) {
        let n = params[0];
        this.param = this.constructor === IntBuilder ? this.param - params.reduce((previousValue, currentValue) => previousValue + currentValue) : this.param.slice(0, (-1) * n);
        console.log(this.param);
        return this;
    }

    multiply(n) {
        this.param = this.constructor === IntBuilder ? this.param * n : this.param.repeat(n)
        console.log(this.param);
        return this;
    }

    divide(n) {
        this.param = this.constructor === IntBuilder ? Math.floor(this.param / n) : this.param.slice(0, Math.floor(this.param.length / n));
        console.log(this.param);
        return this;
    }

    get() {
        console.log(this.param);
        return this.param;
    }
}

// IntBuilder with ES6
class IntBuilder extends BaseClass {
    constructor(param) {
        super();
        this.param = param || 0;
    }
    static random(from, to) {
        return Math.floor(Math.random() * (to - from) + from);
    }

    mod(n) {
        this.param %= n;
        console.log(this.param);
        return this;
    }
}

// StringBuilder with ES5
function StringBuilder(param) {
    this.param = param || '';
}
StringBuilder.prototype = Object.create(BaseClass.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function (str) {
    this.param = this.param.split(str).join('');
    console.log(this.param);
    return this;
}

StringBuilder.prototype.sub = function (from, n) {
    this.param = this.param.substr(from, n);
    console.log(this.param);
    return this;
}