        et = 0,
        tt = 50,
        it = void 0,
    var nt = function() {
        it && (et >= tt ? it.text("Вы победили") : it.text("Перевезено пассажиров " + et + " из " + tt))
    };
                ee = (0, h.default)("#loading-percent"), L = (0, h.default)("#loading-message"), L.text("мир"), it = (0, h.default)("#passenger-counter"), nt();
                    et < tt && (et += 1), nt();
}]);
