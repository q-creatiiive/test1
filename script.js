window.onload = function () {
  // تحميل الهيدر
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);

      // تفعيل زر تبديل الوضع الليلي
      const toggleBtn = document.getElementById("toggleThemeBtn");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          document.body.classList.toggle("dark-mode");
        });
      }
    });

  // تحميل الفوتر
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });

  // التحقق من البريد الإلكتروني
  const emailInput = document.getElementById("email");
  const warning = document.getElementById("emailWarning");

  if (emailInput && warning) {
    emailInput.addEventListener("input", () => {
      if (!emailInput.value.includes("@")) {
        warning.style.display = "block";
      } else {
        warning.style.display = "none";
      }
    });

    // منع إدخال الحروف العربية
    emailInput.addEventListener("keypress", (e) => {
      const arabicRegex = /[\u0600-\u06FF]/;
      if (arabicRegex.test(e.key)) {
        e.preventDefault();
      }
    });
  }

  // التحقق من النموذج عند الإرسال
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // منع الإرسال الفعلي

      let valid = true;

      if (!emailInput.value.includes("@")) {
        warning.style.display = "block";
        valid = false;
      } else {
        warning.style.display = "none";
      }

      const passwordInput = document.getElementById("password");
      if (passwordInput.value.trim() === "") {
        alert("⚠️ الرجاء إدخال كلمة المرور");
        valid = false;
      }

      if (valid) {
        alert("✅ تم تسجيل الدخول بنجاح!");
        // يمكنك التوجيه لصفحة أخرى مثلاً:
        // window.location.href = "home.html";
      }
    });
  }
};
