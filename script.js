document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#greeting-form");
    const nameInput = document.querySelector("#name");
    const greeting = document.querySelector("#greeting");
    const counter = document.querySelector(".counter-number");

    /* Greeting Function */
    function handleGreeting(event) {

        event.preventDefault();

        const name = nameInput.value.trim();

        if (!name) {
            greeting.textContent = "Please enter your name.";
            return;
        }

        greeting.textContent = `Hello, ${name}! 👋`;
        nameInput.value = "";
    }

    form.addEventListener("submit", handleGreeting);


    /* Visitor Counter */
    async function updateCounter() {

        counter.textContent = "Views: Loading...";

        try {

            const response = await fetch(
                "https://o73g5ptpujgtclinhzhhneplje0jogoh.lambda-url.us-east-1.on.aws/"
            );

            if (!response.ok) {
                throw new Error("Network error");
            }

            const data = await response.json();

            counter.textContent = `Views: ${data}`;

        } catch (error) {

            console.error("Visitor counter error:", error);
            counter.textContent = "Views unavailable";

        }

    }

    updateCounter();

});