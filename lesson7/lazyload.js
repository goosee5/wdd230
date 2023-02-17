const images = document.querySelectorAll('img');
      const options = {
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
            img.classList.add('fade-in');
            observer.unobserve(img);
          }
        });
      }, options);
      
      images.forEach(image => {
        observer.observe(image);
      });