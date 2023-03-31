const retNavOptionContainers = document.getElementsByClassName("navOption-Container");
const retNavIcons = document.getElementsByClassName("navImage-Container");
const retNavLinks = document.getElementsByClassName("navLinkText-Container");
const orderButtons = document.querySelectorAll("button[data-order]");
const returnedColButtons = document.getElementById("collapseButton");
const returnedNavContainer = document.getElementsByClassName("nav-Container");

orderButtons.forEach(function(button){
            
    button.addEventListener("click", function(e){
        const button = e.currentTarget;
        const container = button.parentNode;

        const order = {
            id: button.getAttribute("data-order"),
            title: container.querySelector(".bookTitle").innerText,
            price: container.querySelector(".bookPrice").innerText,
            desc: container.querySelector(".bookDesc").innerText

        };

        localStorage.setItem("order", JSON.stringify(order));
        
        const currentUrl = window.location.href;
        const redirctUrl = window.location.href.replace(currentUrl, "orders.html")
        window.location.href = redirctUrl;
    });
});



for (let i = 0; i < retNavOptionContainers.length; i++){
    const item = retNavOptionContainers[i];
    const returnedIcon = retNavIcons[i];
    const returnedLink = retNavLinks[i];

    item.addEventListener("mouseenter", function (event) {
        returnedIcon.style = "color: #E5A00D";
        returnedLink.style = "color: #E5A00D";
    });

    item.addEventListener("mouseleave", function (event) {
        returnedIcon.style = "";
        returnedLink.style = "";
    });
}

returnedColButtons.addEventListener("click", function(event) {
    if (returnedColButtons.title === "Collapse"){
        returnedColButtons.title = "Expand";
        returnedNavContainer[0].style = "width: 44px;";
    }
    else{
        returnedColButtons.title = "Collapse";
        returnedNavContainer[0].style = "";        
    }
});

