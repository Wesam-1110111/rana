window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  // نص متغير بتأثير سلس
    const words = ["تصميم إعلاني؟", "هوية بصرية؟", "حملة ممولة؟", "موقع إلكتروني؟", "تصوير إحترافي؟", "كتابة محتوى؟"];
    let wordIndex = 0;
  const wordEl = document.getElementById("changing-word");

  function rotateWord() {
    wordEl.classList.remove("show");
    setTimeout(() => {
      wordEl.textContent = words[wordIndex];
      wordEl.classList.add("show");
      wordIndex = (wordIndex + 1) % words.length;
    }, 300);
  }

  rotateWord();
  setInterval(rotateWord, 2000); // كل كلمتين في 2 ثانية (تعديل بسيط)
  
