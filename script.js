const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const workText = document.getElementById("work");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const API_URL =
    "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom";



async function getQuote() {
    quoteText.textContent = "Loading...";
    authorText.textContent = "";
    workText.textContent = "";

    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "X-Api-Key": "4WtFuJUcZYOb6wIdq4huERwbQHq5zUngHO5LdQvN"
 
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.textContent = `"${data[0].quote}"`;
        authorText.textContent = `— ${data[0].author}`;

        if (data[0].work) {
            workText.textContent = `Source: ${data[0].work}`;
        }
    } catch (error) {
        quoteText.textContent = "Unable to load quote. Please try again.";
        console.error(error);
    }
}

newQuoteBtn.addEventListener("click", getQuote);

// Load first quote automatically
getQuote();