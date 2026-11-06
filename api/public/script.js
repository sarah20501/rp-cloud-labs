
const sessionForm = document.getElementById("sessionForm");
const responseMessage = document.getElementById("responseMessage");

sessionForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const college = document.getElementById("college").value;
    const tool = document.getElementById("tool").value;

    const submitButton = sessionForm.querySelector("button[type='submit']");

    const requestData = {
        studentId: studentId,
        college: college,
        tool: tool
    };

    responseMessage.textContent = "Submitting your request...";
    submitButton.disabled = true;

    try {
        const response = await fetch("/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Request failed.");
        }

        responseMessage.textContent =
            result.message +
            " | Status: " + result.status +
            " | Tool: " + result.tool;

        responseMessage.className = "success-message";

        sessionForm.reset();

    } catch (error) {
        responseMessage.textContent =
            "Error: " + error.message;

        responseMessage.className = "error-message";

    } finally {
        submitButton.disabled = false;
    }
});
