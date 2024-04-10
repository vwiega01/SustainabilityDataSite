function runAnimations() {
  document
    .querySelector("#id-82342")
    .addEventListener("click", func_82342_71362);

  function func_82342_71362(e) {
    e.stopPropagation();

    document
      .querySelector(".parent-div")
      .classList.add("parent-animation-1145");
    document.querySelector("#id-1145").classList.add("animationClass-1145");
    document
      .querySelector("#id-82342")
      .removeEventListener("click", func_82342_71362);
  }
}
runAnimations();
