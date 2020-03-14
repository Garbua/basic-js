const chainMaker = {
  arr: [],
  step: 0,
  getLength() {
    return this.step;
  },
  addLink(value) {
    if(value === undefined){
      this.arr.push('( () )');
    }else{
      this.arr.push(`( ${value} )`);
    }
    this.step++;
    return this;
  },
  removeLink(position) {
    if(this.arr.length >= position && position > 0 && (position ^ 0) === position){
      this.arr.splice(position - 1, 1);
      this.step--;
      return this;
    }else{
      this.arr = [];
      throw 'Error';
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
      let s = String(this.arr).split(',').join('~~');
      this.arr = [];
      this.step = 0;
      return s;
  },
};

module.exports = chainMaker;
