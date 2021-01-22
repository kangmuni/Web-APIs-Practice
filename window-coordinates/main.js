const black = document.querySelector("#black");

black.addEventListener("click", (event) => {
  const rect = black.getBoundingClientRect();
  console.log(rect);
  // 브라우저 페이지에서의 상위가 기준
  // 스크롤링이 되어도 원래 시작하는 페이지 상위에서부터의 좌표를 알려줌
  //   console.log(event.pageX);
  //   console.log(event.pageY);
  // 눈으로 보이는 브라우저 상위가 기준
  // 스크롤링이 되면 브라우저에서 눈으로 보이는 상위에서부터의 좌표를 알려줌
  //   console.log(event.clientX);
  //   console.log(event.clientY);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
});
