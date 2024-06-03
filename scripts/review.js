document.addEventListener('DOMContentLoaded', () => {
    let counter = localStorage.getItem("tally");

    if (!counter) {
        counter = 0;
    }

    counter = Number(counter) + 1;
    localStorage.setItem("tally", counter);

    document.querySelector("#review-count").innerText = counter;
});
