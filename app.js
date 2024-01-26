let thumbContainer = document.getElementById("thumb-container");
let displayImage = document.getElementById("display");

let images = [
  {
    url: "https://images.unsplash.com/photo-1665133178106-ef28e6f79864?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Harry Potter Bridge in Scotland",
  },
  {
    url: "https://images.unsplash.com/photo-1589489873423-d1745278a8f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Scottish Castle",
  },
  {
    url: "https://images.unsplash.com/photo-1633206876269-feee3e979a26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "highland cow in a field",
  },
  {
    url: "https://images.unsplash.com/photo-1546706872-9c90b8d0c94f?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Old man of Storr in Isle of Skye",
  },
];

const createThumbnails = (arrayOfImages) => {
  arrayOfImages.forEach((image) => {
    let imgElement = document.createElement("img");

    imgElement.src = image.url;
    imgElement.alt = image.alt;
    //think about for loop arrayOfImages.length adding image element.tabindex

    imgElement.addEventListener("click", () => {
      console.log(image.alt);
      createDisplayImg(image);
    });

    thumbContainer.appendChild(imgElement);
  });
};

function createDisplayImg(image) {
  displayImage.innerHTML = "";

  let largeDisplayImg = document.createElement("img");
  largeDisplayImg.src = image.url;
  largeDisplayImg.alt = image.alt;

  displayImage.appendChild(largeDisplayImg);
}
createThumbnails(images);
