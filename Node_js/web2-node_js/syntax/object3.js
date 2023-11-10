var obj = {
  v1: 'v1',
  v2: 'v2',
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  },
};

obj.f1();
obj.f2();
