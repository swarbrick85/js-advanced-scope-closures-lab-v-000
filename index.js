function produceDrivingRange(range) {
  return function(a, b){
    let c = parseInt(a)
    let d = parseInt(b)
    let e;
    if (c > d)
      {e = c - d}
    else
      {e = d - c}
    if (e <= range)
      {return `within range by ${range - e}`}
    else
      {return `${e - range} blocks out of range`}
  }
}

function produceTipCalculator(dec_perc) {
  return function(bill) {
    return dec_perc * bill
  }
}

function createDriver() {
let driverId = 0;

return class Driver {
    constructor(name) {
        this.name = name
        this.id = ++driverId;
    }
  }
}
