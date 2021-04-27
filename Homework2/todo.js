let ulDom = document.querySelector("#list");

function newElement() {
  let inputDom = document.querySelector("#task");
  let inputV = inputDom.value;
  if (inputV !== "") {
    let liDom = document.createElement("li");
    let butDom = document.createElement("button");
    let iconDom = document.createElement("i");
    iconDom.innerHTML = `<i class="far fa-check-circle"></i>`;
    iconDom.classList.add("mr-2");
    butDom.innerHTML = `<i class="far fa-trash-alt"></i>`;
    butDom.classList.add(
      "btn-danger",
      "btn",
      "float-right",
      "d-flex",
      "align-items-center",
      "px-2",
      "mr-3"
    );
    liDom.innerHTML = `${inputV}`;
    liDom.appendChild(butDom);
    ulDom.append(liDom);
    liDom.addEventListener("click", function () {
      if (this.classList.contains("line-through")) {
        this.classList.remove("line-through");
        liDom.classList.remove("bg-success");
        liDom.removeChild(iconDom);
      } else {
        this.classList.add("line-through");
        liDom.classList.add("bg-success");
        liDom.prepend(iconDom);
      }
    });
    butDom.addEventListener("click", function () {
      liDom.remove();
    });
    localStorage.setItem("taskk", liDom.innerHTML);
    $(".success").toast("show");
    inputDom.value = "";
  } else {
    $(".error").toast("show");
  }
}
