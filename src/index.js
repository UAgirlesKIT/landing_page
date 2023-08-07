import { translation } from "./localization";

import AlpineI18n from "alpinejs-i18n";
import Alpine from "alpinejs";

let locale = "uk"; //initial language

document.addEventListener("alpine-i18n:ready", function () {
  window.AlpineI18n.create(locale, translation);
});

Alpine.plugin(AlpineI18n);
Alpine.start();
