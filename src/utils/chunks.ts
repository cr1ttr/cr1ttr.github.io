// function to take an array and split it into chunks.
// each chunk will be of size `n` unless it is unable, then it will return whatever it can.
// `n` is expected to be a whole number.
export default function chunks(array: any[], n: number) {
  let result: any[][] = [];
  let sub_result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    sub_result.push(array[i]);
    if (sub_result.length == n) {
      result.push(sub_result);
      sub_result = [];
    }
  }

  if (sub_result.length != 0) { result.push(sub_result); }

  return result;
}
