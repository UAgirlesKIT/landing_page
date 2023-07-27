// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"localization.js":[function(require,module,exports) {
var locale = "uk"; //initial language
// the translation data
var translation = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      whyUs: "Why choose us",
      team: "Team"
    },
    btns: {
      header: "Get in Touch",
      about: "Message us",
      skills: "Place an order",
      team: "Let's work together"
    },
    hero: "Hey there! We're a group of Ukrainian girls who have taken the plunge into the world of front-end development and are on a mission to level up our skills.",
    about: {
      title: "About Us",
      p1: "We've had the incredible opportunity to study at an awesome international IT school, SheCodes. Some of us are still enrolled in the program, while others have already conquered multiple training courses and gained valuable hands-on experience in the industry.",
      p2: "But wait, there's more! In August 2022, we came together and formed the fantastic community known as \"UA Girls KEEP IN TECH.\" Our goal? To support and uplift each other every step of the way. And guess what? We've got a whopping 900 smart, fearless, and ambitious professionals with various qualifications and expertise in our incredible community.",
      p3: "Let's get real for a moment. We've faced the heat of the Ukrainian IT market's cutthroat competition. We know what it's like to be one of the hundreds of candidates vying for a \"trainee\" position, pulling all-nighters to tackle those mind-boggling test assignments that even challenge seasoned \"mid-level\" experts. \n But hey, we're not giving up! Nope, not us. We've decided to take a different approach: if you can't beat 'em, join 'em! And that's exactly what we're doing. Embracing the challenge, joining the ranks, and making our mark in the ever-evolving world of tech."
    },
    history: {
      title: "We founded \"UA Girls KEEP IN TECH\" to work.",
      p1: "We want to spend our lives not searching for job vacancies, sending out resumes, and completing test tasks, but rather focusing on self-realization, personal growth, and satisfying the needs of real clients.",
      p2: "We aspire to be valuable contributors right here, right now. Our goal is to create stunning websites, web, and mobile applications.",
      p3: "We believe in the beauty of our dreams!"
    },
    skills: {
      title: "What can we do?",
      services: {
        title: "Services",
        li1: "Designing unique resume layouts",
        li2: "Creating exclusive personal websites",
        li3: "Crafting visually appealing email templates",
        li4: "Developing portfolios to showcase your work",
        li5: "Coding landing pages and websites",
        li6: "Implementing responsive design",
        li7: "Working with user behavior algorithms",
        li8: "Optimizing \"handcrafted\" websites to meet technical SEO requirements (headings, titles, alts, descriptions)"
      },
      techTitle: "Our Tech Stack",
      p: "And if we don\u2019t now something? There's nothing that Google or ChatGPT can't help us with :)"
    },
    whyUs: {
      title: "Why choose us?",
      col1: {
        color1: "We write code from scratch,",
        text1: "rather than offering template solutions.",
        color2: "We are extremely attentive and diligent",
        text2: "because we're just starting our developer careers, and are far from feeling too high and mighty to double check our code.",
        color3: "We have a reserve of several hundred specialists,",
        text3: "so we can find the right qualifications for your task without overcharging for a straightforward job.",
        color4: "We stay up to date with industry trends,",
        text4: "constantly experimenting with modern libraries and frameworks."
      },
      col2: {
        text1: "By choosing us,",
        color1: "you'll get the desired results",
        text2: "at a reasonable price",
        color2: "and contribute to the enrichment of the Ukrainian IT community",
        text3: "with new solutions.",
        color3: "By the way,",
        text4: "we gladly welcome beginners into our ranks and mentor them on real projects."
      },
      p: "Coding is more than just a job. It's a passion.\uD83D\uDC97"
    },
    team: {
      title: "Our Team",
      honcharovaA: "Alla Honcharova",
      krykinovaD: "Dianna Krykinova",
      kolesnikovaO: "Oleksandra Kolesnikova",
      zarichnaO: "Olha Zarichna",
      rudyevaS: "Svitlana Rudyeva",
      stepanenkoH: "Halyna Stepanenko"
    }
  },
  uk: {
    nav: {
      about: "Про нас",
      services: "Що вміємо",
      whyUs: "Чому ми",
      team: "Команда"
    },
    btns: {
      header: "Зв'язатись",
      about: "Напишіть нам",
      skills: "Зробити замoвлення",
      team: "Попрацюємо разом?"
    },
    hero: "Привіт, ми - українські дівчата, котрі знайшли себе у front-end розробці та прагнуть у ній розвиватись.",
    about: {
      title: "Про нас",
      p1: "\u041C\u0438 \u043F\u0440\u043E\u0439\u0448\u043B\u0438 \u043A\u0443\u0440\u0441\u0438 \u043C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0457 IT-\u0448\u043A\u043E\u043B\u0438 SheCodes. \u0425\u0442\u043E\u0441\u044C \u0432\u0447\u0438\u0442\u044C\u0441\u044F \u0443 \u043D\u0456\u0439 \u0434\u043E\u0441\u0456. \u0410 \u0434\u0435\u0445\u0442\u043E \u0432\u0436\u0435 \u0432\u0441\u0442\u0438\u0433 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u0438 \u043A\u0456\u043B\u044C\u043A\u0430 \u0456\u043D\u0448\u0438\u0445 \u043D\u0430\u0432\u0447\u0430\u043D\u044C \u0456 \u043C\u0430\u0454 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438.",
      p2: "\u0423 \u0441\u0435\u0440\u043F\u043D\u0456 2022 \u0440\u043E\u043A\u0443 \u043C\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u043B\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0443 \xABUA girls KEEP IN TECH\xBB. \u041C\u0435\u0442\u0430 \u2014 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0442\u0438 \u0439 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043E\u0434\u043D\u0430 \u043E\u0434\u043D\u0443. \u0417\u0430\u0440\u0430\u0437 \u0443 \u043D\u0456\u0439 \u0434\u043E 900 \u0440\u043E\u0437\u0443\u043C\u043D\u0438\u0445, \u0441\u043C\u0456\u043B\u0438\u0432\u0438\u0445 \u0439 \u0440\u0456\u0448\u0443\u0447\u0438\u0445 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442\u0456\u0432 \u0440\u0456\u0437\u043D\u043E\u0457 \u043A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u0430\u0446\u0456\u0457 \u0442\u0430 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0456\u0432.",
      p3: "\u041C\u0438 \u0442\u0456, \u0445\u0442\u043E \u0432\u0456\u0434\u0447\u0443\u0432 \u043F\u0435\u043A\u0435\u043B\u044C\u043D\u0443 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0456\u044E \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u0406\u0422-\u0440\u0438\u043D\u043A\u0443. \u0425\u0442\u043E \u0437\u043D\u0430\u0454, \u044F\u043A \u0446\u0435 \u0431\u0443\u0442\u0438 \u043E\u0434\u043D\u0456\u0454\u044E \u0456\u0437 \u043A\u0456\u043B\u044C\u043A\u043E\u0445 \u0441\u043E\u0442\u0435\u043D\u044C \u043F\u0440\u0435\u0442\u0435\u043D\u0434\u0435\u043D\u0442\u0456\u0432 \u043D\u0430 \u043C\u0456\u0441\u0446\u0435 \xAB\u0442\u0440\u0435\u0439\u043D\u0456\xBB \u0442\u0430 \u043D\u043E\u0447\u0430\u043C\u0438 \u043A\u043E\u0440\u043F\u0456\u0442\u0438 \u043D\u0430\u0434 \u0442\u0435\u0441\u0442\u043E\u0432\u0438\u043C \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\u043C, \u044F\u043A\u0435 \u043B\u0435\u0434\u044C \u043F\u0456\u0434 \u0441\u0438\u043B\u0443 \xAB\u043C\u0456\u0434\u043B\u0443\xBB."
    },
    history: {
      title: "\u041C\u0438 \u0437\u0430\u0441\u043D\u0443\u0432\u0430\u043B\u0438 \xABUA girls KEEP IN TECH\xBB, \u0449\u043E\u0431 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438",
      p1: "\u0425\u043E\u0447\u0435\u043C\u043E \u0432\u0438\u0442\u0440\u0430\u0447\u0430\u0442\u0438 \u0441\u0432\u043E\u0454 \u0436\u0438\u0442\u0442\u044F \u043D\u0435 \u043D\u0430 \u043F\u043E\u0448\u0443\u043A \u0432\u0430\u043A\u0430\u043D\u0441\u0456\u0439, \u0440\u043E\u0437\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u0439 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0442\u0435\u0441\u0442\u043E\u0432\u0438\u0445 \u0437\u0430\u0432\u0434\u0430\u043D\u044C, \u0430 \u043D\u0430 \u0441\u0430\u043C\u043E\u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044E, \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0456 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0442\u0440\u0435\u0431 \u0440\u0435\u0430\u043B\u044C\u043D\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432.",
      p2: "\u041C\u0438 \u0445\u043E\u0447\u0435\u043C\u043E \u0431\u0443\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043C\u0438 \u043B\u044E\u0434\u044F\u043C \u0432\u0436\u0435, \u0442\u0443\u0442 \u0456 \u0437\u0430\u0440\u0430\u0437. \u0425\u043E\u0447\u0435\u043C\u043E \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u0456 \u0441\u0430\u0439\u0442\u0438, \u0432\u0435\u0431- \u0442\u0430 \u043C\u043E\u0431-\u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0438.",
      p3: "\u0412\u0456\u0440\u0438\u043C\u043E \u0443 \u043A\u0440\u0430\u0441\u0443 \u0441\u0432\u043E\u0457\u0445 \u043C\u0440\u0456\u0439!"
    },
    skills: {
      title: "\u0429\u043E \u043C\u0438 \u0432\u043C\u0456\u0454\u043C\u043E?",
      services: {
        title: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438",
        li1: "\u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u044E\u043C\u0435",
        li2: "\u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0435\u043A\u0441\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443-\u0432\u0456\u0437\u0438\u0442\u043A\u0438",
        li3: "\u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0456\u043C\u0435\u0439\u043B\u0456\u0432",
        li4: "\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
        li5: "\u043A\u043E\u0434\u0438\u043D\u0433 \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0456\u0432 \u0442\u0430 \u0441\u0430\u0439\u0442\u0456\u0432",
        li6: "\u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044F \u0441\u0430\u0439\u0442\u0456\u0432 \u043F\u0456\u0434 \u0440\u0456\u0437\u043D\u0456 \u0435\u043A\u0440\u0430\u043D\u0438 (Responsive \u0432\u0435\u0440\u0441\u0442\u043A\u0430)",
        li7: "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u043E\u0432\u0438\u0445 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0456\u0432 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",
        li8: "\u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \xAB\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u043D\u0438\u0445\xBB \u0441\u0430\u0439\u0442\u0456\u0432 \u043F\u0456\u0434 \u0432\u0438\u043C\u043E\u0433\u0438 SEO-\u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442\u0456\u0432 (\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438, titles, alts, descriptions)"
      },
      techTitle: "\u041D\u0430\u0448 Tech Stack",
      p: "\u041D\u0435\u043C\u0430\u0454 \u043D\u0456\u0447\u043E\u0433\u043E, \u0449\u043E \u043D\u0435 \u0437\u043D\u0430\u044E\u0442\u044C Google \u0447\u0438 ChatGPT :)"
    },
    whyUs: {
      title: "\u0427\u041E\u041C\u0423 \u041C\u0418?",
      col1: {
        color1: "\u041F\u0438\u0448\u0435\u043C\u043E \u043A\u043E\u0434 \u0437 \u043D\u0443\u043B\u044F,",
        text1: "\u0430 \u043D\u0435 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F.",
        color2: "\u0414\u0443\u0436\u0435 \u0443\u0432\u0430\u0436\u043D\u0456 \u0442\u0430 \u0441\u0442\u0430\u0440\u0430\u043D\u043D\u0456, ",
        text2: "\u0431\u043E \u043B\u0438\u0448\u0435 \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u043C\u043E \u043A\u0430\u0440\u2019\u0454\u0440\u0443 \u0434\u0435\u0432\u0435\u043B\u043E\u043F\u0435\u0440\u0430, \u043D\u0435 \u0445\u0430\u043F\u0430\u0454\u043C\u043E \u0437\u0456\u0440\u043E\u043A \u0437 \u043D\u0435\u0431\u0430.",
        color3: "\u041C\u0430\u0454\u043C\u043E \u043A\u0456\u043B\u044C\u043A\u0430\u0441\u043E\u0442 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442\u0456\u0432 \xAB\u0443 \u0440\u0435\u0437\u0435\u0440\u0432\u0456\xBB,",
        text3: "\u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0437\u043D\u0430\u0439\u0434\u0435\u043C\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E\u0457 \u043A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u0430\u0446\u0456\u0457, \u0449\u043E\u0431 \u0432\u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0447\u0443\u0432\u0430\u043B\u0438 \u0437\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u043D\u0435\u0441\u043A\u043B\u0430\u0434\u043D\u043E\u0457 \u0437\u0430\u0434\u0430\u0447\u0456.",
        color4: "\u0421\u0442\u0435\u0436\u0438\u043C\u043E \u0437\u0430 \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u043C\u0438 \u0433\u0430\u043B\u0443\u0437\u0456,",
        text4: "\u0435\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0443\u0454\u043C\u043E \u0456\u0437 \u0441\u0443\u0447\u0430\u0441\u043D\u0438\u043C\u0438 \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430\u043C\u0438 \u0439 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430\u043C\u0438."
      },
      col2: {
        text1: "\u041E\u0431\u0438\u0440\u0430\u044E\u0447\u0438 \u043D\u0430\u0441,",
        color1: "\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        text2: "\u0437\u0430 \u043F\u0440\u0438\u0454\u043C\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E",
        color2: "\u0442\u0430 \u0434\u0430\u0454\u0442\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0456\u0439 \u0406\u0422-\u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0456",
        text3: "\u0437\u0431\u0430\u0433\u0430\u0442\u0438\u0442\u0438\u0441\u044C \u043D\u043E\u0432\u0438\u043C\u0438 \u0440\u0456\u0448\u0435\u043D\u043D\u044F\u043C\u0438.",
        color3: "\u0414\u043E \u0440\u0435\u0447\u0456, ",
        text4: "\u043C\u0438 \u043E\u0445\u043E\u0447\u0435 \u0431\u0435\u0440\u0435\u043C\u043E \u0434\u043E\n        \u0441\u0432\u043E\u0457\u0445 \u043B\u0430\u0432 \u043F\u043E\u0447\u0430\u0442\u043A\u0456\u0432\u0446\u0456\u0432 \u0442\u0430 \u043C\u0435\u043D\u0442\u043E\u0440\u0438\u043C\u043E \u0457\u0445 \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445."
      },
      p: "\u041A\u043E\u0434\u0438\u0442\u0438 \u0434\u043B\u044F \u043D\u0430\u0441 \u2014 \u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043B\u044E\u0431\u0438\u0442\u0438\uD83D\uDC97"
    },
    team: {
      title: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430",
      honcharovaA: "Алла Гончарова",
      krykinovaD: "Діана Крикунова",
      kolesnikovaO: "Олександра Колеснікова",
      zarichnaO: "Ольга Зарічна",
      rudyevaS: "Svitlana Rudyeva",
      stepanenkoH: "Галина Степаненко"
    }
  }
};
document.addEventListener("alpine-i18n:ready", function () {
  window.AlpineI18n.create(locale, translation);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65270" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","localization.js"], null)
//# sourceMappingURL=/localization.f4df1708.js.map