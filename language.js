function toggleLanguages(button, event) {

    event.stopPropagation();

    button.nextElementSibling.classList.toggle("show");

}

document.addEventListener("click", function (e) {

    document.querySelectorAll(".language-menu").forEach(menu => {

        if (!menu.parentElement.contains(e.target)) {

            menu.classList.remove("show");

        }

    });

});

function googleTranslateElementInit() {

    new google.translate.TranslateElement({
        pageLanguage: "en",
        autoDisplay: false
    }, "google_translate_element");

    restoreLanguage();
}

function translateLanguage(item, event, lang, name) {

    event.stopPropagation();

    localStorage.setItem("selectedLanguage", lang);

    localStorage.setItem("selectedLanguageName", name);

    document.querySelectorAll(".currentLanguage").forEach(el => {

        el.textContent = name;

    });

    const combo = document.querySelector(".goog-te-combo");

    if (combo) {

        combo.value = lang;

        combo.dispatchEvent(new Event("change"));

    }

    item.parentElement.classList.remove("show");

}

function restoreLanguage() {

    const lang = localStorage.getItem("selectedLanguage");
    const name = localStorage.getItem("selectedLanguageName");

    if (!lang) return;

    document.querySelectorAll(".currentLanguage").forEach(el => {
        el.textContent = name;
    });

    const interval = setInterval(() => {

        const combo = document.querySelector(".goog-te-combo");

        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event("change"));
            clearInterval(interval);
        }

    }, 300);
}