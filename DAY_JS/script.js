        let startBtn = document.getElementById('start');
        let stopBtn = document.getElementById('stop');
        let resetBtn = document.getElementById('reset');
        let hour = 0, minute = 0, second = 0, ms = 0;
        let timer = false;

        startBtn.addEventListener('click', function () {
            if (!timer) {
                timer = true;
                stopWatch();
            }
        });

        stopBtn.addEventListener('click', function () {
            timer = false;
        });

        resetBtn.addEventListener('click', function () {
            timer = false;
            hour = 0; minute = 0; second = 0; ms = 0;
            document.getElementById('hours').innerHTML = "00";
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
            document.getElementById('ms').innerHTML = "00";
        });

        function stopWatch() {
            if (timer) {
                ms++;

                if (ms == 100) {
                    second++;
                    ms = 0;
                }

                if (second == 60) {
                    minute++;
                    second = 0;
                }

                if (minute == 60) {
                    hour++;
                    minute = 0;
                }

                let hrString = hour < 10 ? "0" + hour : hour;
                let minString = minute < 10 ? "0" + minute : minute;
                let secString = second < 10 ? "0" + second : second;
                let msString = ms < 10 ? "0" + ms : ms;

                document.getElementById('hours').innerHTML = hrString;
                document.getElementById('minutes').innerHTML = minString;
                document.getElementById('seconds').innerHTML = secString;
                document.getElementById('ms').innerHTML = msString;

                setTimeout(stopWatch, 10);
            }
        }

function thisk(){
            document.querySelectorAll('button').forEach(function(btn) {
            btn.onclick = function() {
               console.log(btn.value);
                this.classList.toggle('clicked');
                this.textContent = this.classList.contains('clicked') ? "Clicked!" : "Button";
            };
        });

}



