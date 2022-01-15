
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegree = (((seconds / 60) * 360) + 90);
      secondHand.style.transform = `rotate(${secondsDegree}deg)`;

      const minutes = now.getMinutes();
      const minutesDegree = ((minutes / 60) * 360) + 90 + secondsDegree;
      minuteHand.style.transform = `rotate(${minutesDegree}deg)`

      const hour = now.getHours();
      const hoursDegree = ((hour / 12) * 360) + 90 + minutesDegree;
      hourHand.style.transform = `rotate(${hoursDegree}deg)`
    }
    setInterval(setDate, 1000);
