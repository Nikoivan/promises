import read from "./reader";

export default function json(data) {
  return new Promise((resolve) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}

read().then((response) => {
  json(response).then((result) => {
    console.log(result);
  });
});
