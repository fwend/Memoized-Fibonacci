let fibonacci = (function () {

    const cache = { 0: 0, 1: 1 };

    return function (n) {

        if (!cache[n - 1]) {
            cache[n - 1] = fibonacci(n - 1);
        }

        return cache[n - 1] + cache[n - 2];
    };
})();
