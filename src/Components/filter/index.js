export default function filter(arr, newArr) {
    return arr.filter((i) => newArr.indexOf(i.cc) > -1)
  }