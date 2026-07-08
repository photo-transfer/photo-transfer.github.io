(function () {
  var storageKey = "phototransfer.site.language";
  var supported = { zh: true, en: true };

  function browserLanguage() {
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "en"];

    for (var i = 0; i < languages.length; i += 1) {
      var lang = String(languages[i]).toLowerCase();
      if (lang.indexOf("zh") === 0) return "zh";
      if (lang.indexOf("en") === 0) return "en";
    }

    return "en";
  }

  function pageTitle(lang) {
    var zh = document.body.getAttribute("data-title-zh");
    var en = document.body.getAttribute("data-title-en");
    return lang === "zh" ? (zh || en || document.title) : (en || zh || document.title);
  }

  function setLanguage(lang, persist) {
    if (!supported[lang]) lang = "en";
    document.body.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    document.title = pageTitle(lang);

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i += 1) {
      var active = buttons[i].getAttribute("data-set-lang") === lang;
      buttons[i].setAttribute("aria-pressed", active ? "true" : "false");
    }

    if (persist) {
      try {
        localStorage.setItem(storageKey, lang);
      } catch (error) {
        /* Ignore private browsing storage errors. */
      }
    }
  }

  function initialLanguage() {
    try {
      var saved = localStorage.getItem(storageKey);
      if (supported[saved]) return saved;
    } catch (error) {
      /* Ignore private browsing storage errors. */
    }
    return browserLanguage();
  }

  setLanguage(initialLanguage(), false);

  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest("[data-set-lang]");
    if (!button) return;
    setLanguage(button.getAttribute("data-set-lang"), true);
  });
}());
