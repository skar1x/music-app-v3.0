let header = document.querySelector(`.head_js`);

header.innerHTML = `
<div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="index.html" class="logo-text d-flex align-items-center me-3 mb-lg-0 text-dark text-decoration-none">
            Музыка
          </a>
  
          <ul class="nav col-12 col-lg-auto justify-content-center mb-md-0">
            <li><a href="index.html" class="nav-link px-2 ">Главная</a></li>
            <li><a href="#" class="nav-link px-2 ">Подкасты и книги</a></li>
            <li><a href="#" class="nav-link px-2 ">Детям</a></li>
            <li><a href="#" class="nav-link px-2 ">Потоки</a></li>
            <li><a href="#" class="nav-link px-2 ">Коллекция</a></li>
          </ul>
  
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 me-lg-auto ms-3 " role="search">
            <input type="search" class="form-control" placeholder="Поиск..." aria-label="Search">
          </form>
          <span class="plus-badge badge rounded-pill bg-secondary me-4">
              SUBSCRIPTION
          </span>

          <div class="dropdown text-end">
            <a href="#" class="d-block link-dark text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="assets/profile (1).png" alt="mdo" width="42" height="42" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" >
              <li><a class="dropdown-item" href="#">Профиль</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Выйти</a></li>
            </ul>
          </div>
        </div>
        <hr class="border_head">
      </div>
`