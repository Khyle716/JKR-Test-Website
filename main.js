document.addEventListener('DOMContentLoaded', (event) => {
  
  const curtainBtn = document.querySelector(".SearchCurtain");
  const mainCurtain = document.querySelector(".HeaderSearchContainer");
  
  curtainBtn.addEventListener("click", () => {
    
    if (mainCurtain.style.top === "-5px") {
      mainCurtain.style.top = "-76px";
    } else {
      mainCurtain.style.top = "-5px";
    }
  })
})