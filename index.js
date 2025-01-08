const buttons = document.querySelectorAll("button");
let ans = "";
let input = document.querySelector("#input-box");

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.id == "equal") {
      try {
        let evaluated = eval(ans);
        ans = evaluated.toString();
        input.value = evaluated;
      } catch (error) {
        input.value = "Error!";
        ans = "";
      }
    } else if (e.target.id == "clear") {
      input.value = "";
      ans = "";
    } else if (e.target.id == "delete") {
      ans = ans.slice(0, -1);
      input.value = ans;
    } else {
      input.value += e.target.id;
      ans += e.target.id;
    }
  });
});