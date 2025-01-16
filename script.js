const list = document.getElementById("list");
const container = document.getElementById("container");

const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((res) => {
    if (!res.ok) {
      return Promise.reject();
    }
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const newLi = document.createElement("li");
      newLi.textContent = item.title;
      list.appendChild(newLi);
    });
  })
  .catch((err) => {
    container.textContent = "There is some error, try again later";
  });
