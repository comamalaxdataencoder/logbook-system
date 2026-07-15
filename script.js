document.getElementById('submitBtn').addEventListener('click', () => {
    const data = {
        formType: document.getElementById('formSelect').value,
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value
    };

    // Dito natin ilalagay ang Web App URL na kukunin natin sa susunod na step
    fetch("ILAGAY_DITO_ANG_URL_NG_GOOGLE_SCRIPT", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => alert("Saved!"));
});