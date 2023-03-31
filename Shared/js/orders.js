window.addEventListener("DOMContentLoaded", function (e) {
    const order = localStorage.getItem("order");

    if (order) {
        const bookOrder = JSON.parse(order);

        const book = document.querySelector(".newsArticle")
        const title = book.querySelector(".bookTitle");
        const price = book.querySelector(".bookPrice");
        const desc = book.querySelector(".bookDesc");

        title.innerText = bookOrder.title;
        price.innerText = bookOrder.price;
        desc.innerText = bookOrder.desc;

        const img = document.querySelector(".subArticleImage");
        img.setAttribute("src", `./Shared/img/${bookOrder.id}.png`);
        img.setAttribute("alt", bookOrder.Title);
    }
 });