// Movies
const moviesArr = [
    {
      title: "Maestro",
      year: 2022,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/OoikoSpzF0_fmm2tIcDpI7nJLoU=/fit-in/180x240/v2/https://resizing.flixster.com/QxuXNaDPg5NQX_DPml6C0zV1A5E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmMDhiMTk1LTc5MzMtNGQ0OS04NTNiLTY2MWEwZDBkYjRlMi5qcGc=",
    },
    {
      title: "Zone of Interest",
      year: 2022,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/WnKhzqDiHS3SOp1iYESrxYDkinM=/fit-in/180x240/v2/https://resizing.flixster.com/sK_6rOkR73t2sfxWzzu1MJY4e-E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkMDcxNjExLWY2OGYtNGJlNS04OTNjLTdhNDA3OGIzZjA1NC5qcGc=",
    },
    {
      title: "Barbie",
      year: 2022,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/mseQ6bVjmmFpjXk-Lp7hApMglvc=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v12_ah.jpg",
    },
    {
      title: "American fiction",
      year: 2022,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/yQEwYjwt1Vp3gwdEa9xF8dds8ZI=/fit-in/180x240/v2/https://resizing.flixster.com/Kes35WjbggKb9o6T7JG1nBGE2RE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M4ODA3YzJjLTA5YWItNDFhZi1hNDc5LTc0MWU0NWMxYTU3ZS5qcGc=",
    },
    {
      title: "Killers of the Flower Moon",
      year: 2024,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/XHPHiHfJoxMe7zOs-4N9S6IjVx0=/fit-in/180x240/v2/https://resizing.flixster.com/GGQKtXozu58SHWKH0Cz-5jQ9U38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOWE1N2ZkLTY4MzgtNDA3Yi05MDEwLWQzN2QwMTFkZDdmNS5qcGc=",
    },
    {
      title: "oppenhiemer",
      year: 2024,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/-rFgv34f4XAPdUTpcLC9nnT-5GQ=/fit-in/180x240/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=",
    },
    {
      title: "Anatomy of a fall",
      year: 2024,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/bYBGgcBJfNaJ2L9RUBRbrHSMZG0=/fit-in/180x240/v2/https://resizing.flixster.com/DiduaaJKONgMBcwEdDgLlFGE7Vo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmMGYzZGMxLWVjNmItNGI1ZS05ODAxLTkwY2U4ZGQyMzI5Ni5qcGc=",
    },
    {
      title: "The Holdovers",
      year: 2024,
      ticketPrice: 1,
      posterURL:
        "https://resizing.flixster.com/6wDe42goETkgLNWSO_Rst1SUwMo=/fit-in/180x240/v2/https://resizing.flixster.com/Gfe3Lf75Qo5Pb0feNQ58BzwVBOA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ4N2I3NGFjLWY3NDAtNDVlMS05ODFmLTNmYjA5ZmE3NTViNi5qcGc=",
    },
    
  ];
  
  // Display movies
  function displayMovies() {
    const moviesEl = document.querySelector(".movies");
  
    for (let i = 0; i < moviesArr.length; i++) {
      const movie = document.createElement("div");
      movie.classList.add(
        "movie",
        "col",
        "card",
        "p-0",
        "shadow",
        "border-0",
        "rounded-3"
      );
  
      movie.innerHTML = `
          <div class="movie-poster">
              <img src="${moviesArr[i].posterURL}" class="card-img-top"/>
          </div>
          <div class="card-body">
              <h5 class="card-title fw-bold">
                ${moviesArr[i].title} (${moviesArr[i].year})
              </h5>
              <h5 class="fw-bold text-danger">${moviesArr[i].ticketPrice}৳</h5>
              <button class="btn btn-dark fw-bold book-ticket">Book Ticket</button>
          </div>
        `;
      moviesEl.append(movie);
    }
  }
  displayMovies();
  
  function displayModal() {
    const bookTickets = document.querySelectorAll(".book-ticket");
    const modalWindow = document.querySelector(".modal-window");
  
    for (let i = 0; i < bookTickets.length; i++) {
      bookTickets[i].addEventListener("click", function () {
        for (let j = 0; j < moviesArr.length; j++) {
          if (i === j) {
            const title = moviesArr[j].title;
            const year = moviesArr[j].year;
            const price = moviesArr[j].ticketPrice;
            const vat = Number((price * 0.07).toFixed(2));
            const subtotal = price + vat;
  
            modalWindow.style.opacity = 1;
            modalWindow.style.visibility = "visible";
  
            modalWindow.innerHTML = `
            <span class="close-btn"> ❌ </span>
            <h2 class="fw-bold mt-3">${title} (${year})</h2>
            <h5><strong>Price:</strong> ${price}</h5>
            <h5><strong>VAT</strong> ${vat}</h5>
            <h3><strong>Subtotal:</strong> ${subtotal}</h3>
            <button class="btn btn-danger fw-bold mt-4 buy-now">Buy Now</button>
            `;
  
            const closeBtn = document.querySelector(".close-btn");
            closeBtn.addEventListener("click", function () {
              modalWindow.style.opacity = 0;
              modalWindow.style.visibility = "hidden";
            });
          }
        }
      });
    }
  }
  
  displayModal();