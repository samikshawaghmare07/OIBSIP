function showMore() {
    document.getElementById("aboutText").innerText =
        "Dr. B. R. Ambedkar devoted his life to fighting inequality, empowering marginalized communities, and establishing the principles of justice, liberty, equality, and fraternity in India.";
}

function addContribution() {
    let list = document.getElementById("list");

    let contributions = [
        "Leader of Dalit Movement",
        "Advocate of Women's Rights",
        "Founder of Bahishkrit Hitakarini Sabha"
    ];

    contributions.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));
function loadBooks() {
    let books = [
        "Who Were the Shudras?",
        "The Buddha and His Dhamma",
        "States and Minorities",
        "Thoughts on Linguistic States",
        "The Untouchables"
    ];

    let bookList = document.getElementById("bookList");

    books.forEach(book => {
        let li = document.createElement("li");
        li.textContent = book;
        bookList.appendChild(li);
    });
}

function showWork() {
    document.getElementById("workText").innerText =
        "Dr. B. R. Ambedkar was the Chairman of the Drafting Committee of the Indian Constitution. He fought relentlessly for social equality, abolition of untouchability, protection of fundamental rights, women's empowerment, and democratic values. His vision laid the foundation for a just, inclusive, and progressive India.";
}
