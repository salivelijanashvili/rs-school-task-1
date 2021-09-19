// ES6

let changer = 0;

class IntBuilder {
    constructor(int) {
        this.int = int;
    }
    print() {
        changer = this.int;
        return changer;
    }   

    plus(...arr) {
        changer = changer + arr.reduce((a, b) => a + b);
        return changer;
    }

    minus(...arr) {
        changer = changer - (arr.reduce((a, b) => a + b));
        return changer;
    }

    multiply(number) {
      changer = changer * number;
      return changer;
    }

    devide(number) {
      changer = changer / number;
      return changer;
    }

    mod(number) {
      changer = changer % number;
      return changer;
    }

    get() {
        return changer;
    }
}

const intBuilder = new IntBuilder(10);

console.log(
  'results:',
   intBuilder.print(),
   intBuilder.plus(2, 3, 2),
   intBuilder.minus(1, 2),
   intBuilder.multiply(2),
   intBuilder.devide(4),
   intBuilder.mod(3),
   intBuilder.get()
)