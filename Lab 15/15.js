"use strict";

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");

    imgEl.src = imgPath;

    imgEl.addEventListener("load", function () {
      imgEl.classList.add("images");

      document.body.appendChild(imgEl);

      resolve(imgEl);
    });

    imgEl.addEventListener("error", function () {
      reject(new Error("Has Error"));
    });
  });
}

let currentImg;

createImage(`./img/img-1.png`)
  .then((imgEl) => {
    currentImg = imgEl;
    console.log("img 1");

    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";

    return createImage("img/img-2.png");
  })
  .then((imgEl) => {
    currentImg = imgEl;
    console.log("img 2");

    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  });

// 15.2

async function loadNPause() {
  try {
    const imgEl1 = await createImage(`img/img-1.png`);
    await wait(2);
    imgEl1.style.display = "none";

    const imgEl2 = await createImage(`img/img-2.png`);
    await wait(2);
    imgEl2.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}
loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));


    // promise all để chạy đồng thời nhiều tác vụ promise khác nhau
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    // chạy foeach để thêm class cho từng phẩn tử
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.log(error);
  }
};

loadAll(["img/img-1.png", "img/img-2.png", "img/img-3.png"]);
