const myPromisse = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("deu ruim");
    }, 200);
  });

// myPromisse()
//   .then(() => {
//     console.log("primeira vez");
//   })
//   .catch((erro) => {
//     console.warn(erro);
//   });

const exec = async () => {
  try {
    await myPromisse();
    await myPromisse();
    await myPromisse();
    await myPromisse();
    console.log("primeira vez");
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("FIM!");
  }
};

exec();
