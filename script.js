// pop up js 
document.addEventListener("DOMContentLoaded", () => {
    const postBtn = document.querySelector(".postbutton");
    const textarea = document.querySelector(".create-post textarea");
    const feed = document.querySelector(".feed");

    postBtn.addEventListener("click", () => {
        const text = textarea.value.trim();

        if (text === "") {
            alert("Write something before posting!");
            return;
        }


    });
});

// LIKE BUTTON HAII
document.addEventListener("click", function(e) {
    if (e.target.closest(".post-actions a:first-child")) {
        e.preventDefault();
        const btn = e.target;

        if (btn.classList.contains("liked")) {
            btn.classList.remove("liked");
            btn.style.color = "#1877f2";
            btn.textContent = "Like";
        } else {
            btn.classList.add("liked");
            btn.style.color = "red";
            btn.textContent = "Liked ❤️";
        }
    }
});


// SEARCH BAR CHECK KAREGA
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", function () {
    let value = searchInput.value.toLowerCase();
    let posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        let text = post.innerText.toLowerCase();
        post.style.display = text.includes(value) ? "block" : "none";
    });
});

// FRIEND REQUEST BUTTON HAI
const requestButtons = document.querySelectorAll(".requestbtn");

requestButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "Requested ✔";
        btn.style.background = "green";
    });
});
