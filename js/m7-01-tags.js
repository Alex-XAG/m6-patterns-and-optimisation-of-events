// Delegating
// - one of many
// - few of many and Set

// /////////////////////  - one of many ////////////////
// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags__btn--active");
//   // console.log(currentActiveBtn);

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//   }
//   // currentActiveBtn?.classList.remove("tags__btn--active"); // new syntax replace if before!!!!

//   // console.log(event.target);
//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add("tags__btn--active");

//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }
///////////////////////////////////////////////////////////////
// //////// new syntax replace if before!!!! ///////
// const settings = {
//   theme: {
//     userDefined: {
//       color: "#fff",
//     },
//   },
// };

// if (settings && settings.theme && settings.theme.userDefined) {
//   console.log(settings.theme.userDefined.color);
// }

// console.log(settings?.theme?.userDefined?.color); // replacing if
// ////////////////////////////////////////////////////////////////

// //////////////////   (toggle)  few of many    new Set() //////////////
const tagsContainer = document.querySelector(".js-tags");
let selectedTags = new Set();

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = event.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");

  if (isActive) {
    selectedTags.delete();
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle("tags__btn--active");

  console.log(selectedTags);
}
