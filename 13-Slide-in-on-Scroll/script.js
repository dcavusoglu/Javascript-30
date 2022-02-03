function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const sliderImages = document.querySelectorAll('.slide-in');

    function slideUpdate(e) {
      sliderImages.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight)
        - image.height / 2;
        console.log(slideInAt);

        const imageBottom = image.offsetTop + image.height;

        //console.log('image bottom:', imageBottom);

        const imageHalfShown = slideInAt > image.offsetTop;
        //console.log('half:', imageHalfShown);

        const imageNotPassed = window.scrollY < imageBottom;
        //console.log('not passed:', imageNotPassed);
        if(imageHalfShown && imageNotPassed) {
          image.classList.add('active');
        }
        else {
          image.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', slideUpdate);
