const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

// 윈도우가 전부 다 로드가 되면, 그 때 타겟의 크기를 읽어와서 도큐먼트에 마우스 무브라는 이벤트를 등록한다.
addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  // x, y가 0으로 타겟 이미지가 준비되지 않은 경우가 크다. 콘솔로그로 확인해보기
  console.log(targetRect);
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfWidth
    }px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;

    tag.innerHTML = `${x}px, ${y}px`;
  });
});
