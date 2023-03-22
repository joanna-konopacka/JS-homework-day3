const btnPrimary = document.querySelector(".btn-primary");
const btnSuccess = document.querySelector(".btn-success");

const showArticle1 = () => {
	btnPrimary.nextElementSibling.classList.remove("d-none");
};
const showArticle2 = () => {
	btnSuccess.nextElementSibling.classList.remove("d-none");
};

btnPrimary.addEventListener("click", showArticle1);
btnSuccess.addEventListener("click", showArticle2);
