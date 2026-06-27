/* ========================================
   Hugo Book Custom JS — Personal Blog
   ======================================== */


// ---- Reading Progress Bar ----
(function () {
  function init() {
    var bar = document.createElement("div");
    bar.id = "reading-progress-bar";
    document.body.prepend(bar);

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollTop = window.scrollY;
          var docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          bar.style.width = Math.min(progress, 100) + "%";
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


// ---- Back to Top Button ----
(function () {
  function init() {
    var btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.innerHTML = "&#8593;";
    btn.setAttribute("aria-label", "回到顶部");
    btn.setAttribute("title", "回到顶部");
    document.body.appendChild(btn);

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          btn.classList.toggle("visible", window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


// ---- Code Block Copy Button ----
(function () {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".book-codeblock-copy");
    if (!btn) return;

    var wrapper = btn.closest(".book-codeblock-wrapper");
    var pre = wrapper ? wrapper.querySelector("pre") : null;
    var code = pre ? pre.textContent : "";
    if (!code) return;

    navigator.clipboard.writeText(code).then(function () {
      var original = btn.getAttribute("data-text") || "复制";
      btn.setAttribute("data-text", "已复制");
      btn.classList.add("copied");
      setTimeout(function () {
        btn.setAttribute("data-text", original);
        btn.classList.remove("copied");
      }, 2000);
    });
  });
})();


// ---- Pixel Typewriter ----
(function () {
  var mottos = [
    "Talk is cheap. Show me the code.",
    "Stay hungry, stay foolish.",
    "Hello, World!",
    "Make it work, make it right, make it fast."
  ];

  function init() {
    var el = document.querySelector(".hero-pixel-text");
    if (!el) return;

    var i = 0;    // motto index
    var j = 0;    // char index
    var deleting = false;
    var wait = 0;

    function type() {
      var motto = mottos[i];

      if (deleting) {
        // Delete mode
        if (j > 0) {
          j--;
          el.textContent = motto.substring(0, j);
          setTimeout(type, 40 + Math.random() * 30);
        } else {
          deleting = false;
          i = (i + 1) % mottos.length;
          setTimeout(type, 300);
        }
      } else {
        // Typing mode
        if (j < motto.length) {
          j++;
          el.textContent = motto.substring(0, j);
          setTimeout(type, 60 + Math.random() * 60);
        } else {
          // Finished typing: pause then start deleting
          deleting = true;
          setTimeout(type, 2500);
        }
      }
    }

    // Start after a short delay
    setTimeout(type, 800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
