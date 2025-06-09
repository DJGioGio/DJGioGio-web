let upto = 50;
            let counts = setInterval(updated, 15);

            function updated() {
            let count = document.getElementById("counter");
            count.innerHTML = ++upto;
            if (upto === 1000000000000000) {
                clearInterval(counts);
            }
            }