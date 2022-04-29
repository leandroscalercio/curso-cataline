const myPromisse = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

myPromisse().then((response) => {
  console.log(response);
});

async function exec() {
  const response = await myPromisse();
  console.log(response);
}

const arrow = async () => {
  const response = await myPromisse();
  console.log(response);
};

arrow();
