export default  function GetRate(curFrom, curTo, data) {
    let rate_1 = 1;
    let rate_2 = 1;
  
  data.forEach(item => {
    if(item.cc === curFrom) {
      rate_1 = item.rate
    }
    if(item.cc === curTo) {
      rate_2 = item.rate
    }
  })
  const rate = rate_1/rate_2
   return rate
}