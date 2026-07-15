document.getElementById('submitBtn').addEventListener('click', () => {
    // Kinukuha natin ang lahat ng values mula sa HTML input fields
    const data = {
        formType: document.getElementById('formSelect').value,
        action: document.querySelector('input[name="action"]:checked').value, // IN o OUT
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        dept: document.getElementById('dept').value,
        whs: document.getElementById('whs').value,
        platform: document.getElementById('platform').value,
        tracking: document.getElementById('tracking').value,
        qty: document.getElementById('qty').value,
        recBy: document.getElementById('recBy').value,
        checkBy: document.getElementById('checkBy').value,
        forWho: document.getElementById('forWho').value,
        remarks: document.getElementById('remarks').value
    };

    // I-paste dito ang bagong Web App URL mo (yung may /exec sa dulo)
    fetch("URL_NG_GOOGLE_SCRIPT_DITO", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Success! Record updated.");
    })
    .catch(error => alert("Error: " + error));
});
