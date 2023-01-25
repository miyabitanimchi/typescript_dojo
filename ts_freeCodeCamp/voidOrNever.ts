// void means the function doesn't return anything (returns undefined implicitly)
// void は関数が最後まで実行される
function consoleError(errMsg: string): void {
  console.log(errMsg);
}
// The never type represents the type of values that never occur
// never は関数の処理が中断、または永遠に続くこと
function consoleError2(errMsg: string): never {
  throw Error(errMsg);
}

function forever(): never {
  while (true) {}
}

export {};
