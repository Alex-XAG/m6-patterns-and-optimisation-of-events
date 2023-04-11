const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQL" },
  { label: "Postgre5QL" },
  { label: "MongaDB" },
];

// 1. Render markup of list elements
// 2. Listen changing of filter
// 3. Filter data and render new elements

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.list.insertAdjacentHTML("beforeend", markupRender(tech));

refs.input.addEventListener("input", _.debounce(onInputChange, 300));

function onInputChange(evt) {
  evt.preventDefault();

  const newMarkup = tech.filter(item =>
    item.label.toLowerCase().includes(evt.target.value.toLowerCase())
  );

  refs.list.innerHTML = markupRender(newMarkup);
}

function markupRender(options) {
  return options
    .map(option => {
      return `
        <li>
        <p>${option.label}</p>
        </li>
        `;
    })
    .join("");
}
