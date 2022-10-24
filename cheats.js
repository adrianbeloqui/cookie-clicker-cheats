(function(window, document, undefined) {
  window.Cheater = {
    autoClickerIds: [],
    goldenCookieDelayId: null,
    goldenCookieClickerId: null,
    upgradeBuyer: null,

    startAutoClicker: function(count) {
      var a = document.getElementById("bigCookie");
      for(var i = 0; i < 100; i++) {
        Cheater.autoClickerIds.push(setInterval(function() {
          a.click();
        }, 10));
      }      
    },

    stopAutoClicker: function() {
      while(Cheater.autoClickerIds.length > 0) {
        clearInterval(Cheater.autoClickerIds.pop());
      }
    },
    
    startAutoBuyUpgrades: function() {
      Cheater.upgradeBuyer = setInterval(function() {
        var upgrades = document.getElementById("upgrades");
        var crates = upgrades.getElementsByClassName("upgrade enabled");
        if (crates.length > 0) {
          crates[0].click();
          console.log("Upgrade bought!");
        }
      }, 10);
    },
    
    stopAutoBuyUpgrades: function() {
      clearInterval(Cheater.upgradeBuyer);
    },

    startGoldenCookieAutoClicker: function() {
      var b = document.getElementById("goldenCookie");

      Cheater.goldenCookieDelayId = setInterval(function() {
        window.Game.goldenCookie["delay"] = 10;
      }, 15000);

      Cheater.goldenCookieClickerId = setInterval(function() {
        b.click();
        console.log("Golden Cookie clicked!");
      }, 2000);      
    },

    stopGoldenCookieAutoClicker: function() {
      clearInterval(Cheater.goldenCookieClickerId);
      clearInterval(Cheater.goldenCookieDelayId);
    },

    startAll: function(count) {
      Cheater.startAutoClicker(count);
      Cheater.startAutoBuyUpgrades();
      Cheater.startGoldenCookieAutoClicker();
    },
  }
})(window, document);
