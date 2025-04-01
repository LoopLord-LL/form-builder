document.querySelector("form").addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const years = document.getElementById("years").value.trim();
    const position = document.getElementById("position").value.trim();
    const plans = document.getElementById("plans").value.trim();
    const github = document.getElementById("github").value.trim();
    const linkedin = document.getElementById("linkedin").value.trim();
    const website = document.getElementById("public-website").value.trim();
    const cv = document.getElementById("cv").value.trim();
    const country = document.getElementById("counrty").value;
    const checkbox = document.querySelector(".check").checked;
  
    if (!name || !email || !phone || !years || !position || !plans || !github || !linkedin || !website || !cv || country === "0" || !checkbox) {
      alert("Please fill out all required fields.");
      e.preventDefault();
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format.");
      e.preventDefault();
      return;
    }
  
    if (!/^\d+$/.test(phone)) {
      alert("Phone number must contain only digits.");
      e.preventDefault();
      return;
    }
  
    if (years < 0) {
      alert("Finished university years cannot be negative.");
      e.preventDefault();
      return;
    }
  });