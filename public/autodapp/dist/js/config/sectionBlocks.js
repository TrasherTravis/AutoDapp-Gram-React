// Blocks under "Sections"
export default [
  {
    id: 'section-header',
    label: 'Header',
    category: 'Sections',
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand text-primary" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="d-flex">
              <button class="btn btn-outline-primary me-2"><span class="fas fa-lock me-2"></span>Login</button>
              <button class="btn btn-primary"><span class="fas fa-plus me-2"></span>New account</button>
            </div>
          </div>
        </div>
      </nav>
      <section id="hero" class="d-flex flex-column align-items-center justify-content-center pt-4">
        <h2 class="hero-title display-2 text-uppercase mt-5"><span class="text-primary">Auto</span>Dapps</h2>
        <p class="hero-subtitle display-6">Fastest way to build Dapps and Websites</p>
        <div class="hero-buttons my-5">
          <button class="btn btn-primary me-2">
          <span class="fas fa-eye me-2"></span>Try now
        </button>
        <button class="btn btn-outline-primary"><span class="fas fa-book me-2"></span>Documentation</button>
        </div>
        <div class="hero-image p-4 bg-white shadow-sm rounded">
          <img src="https://res.cloudinary.com/autodapp/image/upload/v1656664751/AutoDapp/Dapp_tbty4o.png" alt="AutoDapp">
        </div>
        <svg class="background-wave" width="1440" height="386" xmlns="http://www.w3.org/2000/svg"><g fill="#09F" fill-rule="nonzero" fill-opacity=".2"><path d="M0 87l26.7 10.7C53.3 108 107 130 160 124.3c53.3-5.3 107-37.3 160-64C373.3 34 427 12 480 12.3 533.3 12 587 34 640 55c53.3 21 107 43 160 21.3C853.3 55 907-9 960 1.7c53.3 10.3 107 96.3 160 122.6 53.3 26.7 107-5.3 160-26.6 53.3-21.7 107-31.7 133-37.4l27-5.3v128H0V87zM0 311l26.7-5.3C53.3 300 107 290 160 311c53.3 21 107 75 160 74.701C373.3 386 427 332 480 311c53.3-21 107-11 160 10.7C693.3 343 747 375 800 359c53.3-16 107-80 160-101.3 53.3-21.7 107 .3 160 21.3 53.3 21 107 43 160 42.7 53.3.3 107-21.7 133-32l27-10.7v-96H0v128z"/></g></svg>
      </section>
    <style>#hero{position:relative}#hero .background-wave{width:100%;height:600px;position:absolute;top:340px;left:0;z-index:-1} #hero .hero-image{max-width:600px} #hero .hero-image img{width:100%}</style>`
  },
  {
    id: "section-header-two",
    label: "Header Two",
    category: "Sections",
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<section id="header-two" class="bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex justify-content-center flex-column p-4">
              <h2 class="title text-uppercase">Draw your imagination</h2>
              <p class="subtitle">with AutoDapp page builder</p>
              <div class="buttons">
                <button class="btn btn-primary me-2">Try now</button>
                <button class="btn btn-outline-primary">
                  Watch videos
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
          <?xml version="1.0" encoding="iso-8859-1"?>
          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <!-- License: CC0. Made by SVG Repo: https://www.svgrepo.com/svg/264732/invoice -->
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path style="fill:#93A1B9;" d="M461.913,445.217H50.087c-9.217,0-16.696-7.473-16.696-16.696V155.826
            c0-27.619,22.468-50.087,50.087-50.087h345.043c27.619,0,50.087,22.468,50.087,50.087v272.696
            C478.609,437.744,471.13,445.217,461.913,445.217z"/>
          <path style="fill:#8291A6;" d="M428.522,105.739H256v339.478h205.913c9.217,0,16.696-7.473,16.696-16.696V155.826
            C478.609,128.207,456.141,105.739,428.522,105.739z"/>
          <path style="fill:#73E6E6;" d="M66.783,411.826h378.435v-256c0-9.206-7.49-16.696-16.696-16.696H83.478
            c-9.206,0-16.696,7.49-16.696,16.696V411.826z"/>
          <path style="fill:#57D9D9;" d="M428.522,139.13H256v272.696h189.217v-256C445.217,146.62,437.728,139.13,428.522,139.13z"/>
          <path style="fill:#6B7A99;" d="M461.913,495.304H50.087C22.468,495.304,0,472.836,0,445.217v-16.696
            c0-9.223,7.479-16.696,16.696-16.696h478.609c9.217,0,16.696,7.473,16.696,16.696v16.696
            C512,472.836,489.532,495.304,461.913,495.304z"/>
          <path style="fill:#5A6680;" d="M495.304,411.826H256v83.478h205.913c27.619,0,50.087-22.468,50.087-50.087v-16.696
            C512,419.299,504.521,411.826,495.304,411.826z"/>
          <path style="fill:#FFEACC;" d="M361.739,361.739H150.261c-27.619,0-50.087-22.468-50.087-50.087V66.783
            c0-27.619,22.468-50.087,50.087-50.087h211.478c27.619,0,50.087,22.468,50.087,50.087v244.87
            C411.826,339.271,389.358,361.739,361.739,361.739z"/>
          <path style="fill:#FFD9B3;" d="M361.739,16.696H256v345.043h105.739c27.619,0,50.087-22.468,50.087-50.087V66.783
            C411.826,39.164,389.358,16.696,361.739,16.696z"/>
          <path style="fill:#F37B2A;" d="M256,172.522c-4.457,0-8.652-1.74-11.804-4.896c-3.153-3.152-4.892-7.343-4.892-11.799
            s1.739-8.647,4.892-11.804c6.304-6.304,17.304-6.31,23.609,0.006c3.151,3.151,4.891,7.342,4.891,11.798
            c0,9.223,7.479,16.696,16.696,16.696c9.217,0,16.696-7.473,16.696-16.696c0-13.385-5.218-25.962-14.674-35.413
            c-5.357-5.36-11.778-9.18-18.717-11.637v-8.603c0-9.223-7.479-16.696-16.696-16.696c-9.217,0-16.696,7.473-16.696,16.696v8.602
            c-6.939,2.458-13.36,6.275-18.717,11.632c-9.458,9.456-14.674,22.033-14.674,35.418s5.217,25.962,14.674,35.413
            c9.456,9.462,22.033,14.674,35.413,14.674c4.457,0,8.652,1.74,11.804,4.896c3.152,3.152,4.892,7.343,4.892,11.799
            s-1.74,8.647-4.892,11.804c-6.304,6.304-17.304,6.31-23.609-0.006c-3.152-3.151-4.891-7.342-4.891-11.798
            c0-9.223-7.479-16.696-16.696-16.696s-16.696,7.473-16.696,16.696c0,13.385,5.217,25.962,14.674,35.413
            c5.357,5.36,11.778,9.18,18.717,11.637v8.603c0,9.223,7.479,16.696,16.696,16.696s16.696-7.473,16.696-16.696v-8.602
            c6.939-2.458,13.36-6.275,18.717-11.632c9.457-9.456,14.674-22.033,14.674-35.418c0-13.385-5.218-25.962-14.674-35.413
            C281.956,177.734,269.38,172.522,256,172.522z"/>
          <g>
            <path style="fill:#E56722;" d="M267.804,144.027c3.152,3.152,4.892,7.343,4.892,11.799c0,9.223,7.479,16.696,16.696,16.696
              c9.217,0,16.696-7.473,16.696-16.696c0-13.385-5.218-25.962-14.674-35.413c-5.357-5.36-11.778-9.18-18.717-11.637v-8.603
              c0-9.223-7.479-16.696-16.696-16.696v55.814C260.326,139.292,264.652,140.87,267.804,144.027z"/>
            <path style="fill:#E56722;" d="M272.696,278.261v-8.602c6.939-2.458,13.36-6.275,18.717-11.632
              c9.457-9.456,14.674-22.033,14.674-35.418c0-13.385-5.218-25.962-14.674-35.413c-9.456-9.462-22.033-14.674-35.413-14.674v33.391
              c4.457,0,8.652,1.74,11.804,4.896c3.152,3.152,4.892,7.343,4.892,11.799s-1.74,8.647-4.892,11.804
              c-3.152,3.152-7.479,4.729-11.804,4.729v55.815C265.217,294.957,272.696,287.484,272.696,278.261z"/>
          </g>
          </svg>          
          </div>
        </div>
      </div>
    </section><style>#header-two .d-flex{
    height:500px;
  }
  
  #header-two .col-md-6 svg{
    margin-top:5rem;
  }
  
  @media(max-width:768px){
    #header-two .d-flex{
      height:200px;
    }
    #header-two .col-md-6 svg{
      margin-top:1rem;
      height:300px;
    }
  }</style>`
  },
  {
    id: 'section-blog',
    label: 'Blog',
    category: 'Sections',
    attributes: {
      class: 'fa fa-th-large'
    },
    content: `<section id="blog">
        <div class="section-header container">
          <h3 class="display-6 p-4 text-uppercase">Recent Posts</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://placeimg.com/300/300/tech" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://placeimg.com/300/300/tech" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://placeimg.com/420/420/tech" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
  },
  {
    id: 'section-testimonial',
    label: 'Testimonial',
    category: 'Sections',
    attributes: {
      class: 'fa fa-sitemap'
    },
    content: `<section id="testimonial">
      <div class="section-header container">
          <h3 class="display-6 p-4 text-uppercase">Testimonials</h3>
        </div>
        <div class="container-fluit">
       
          <div id="splide" class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide py-5 px-4 m-4 rounded shadow bg-white">
                  <div class="testimonial text-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded-circle avatar p-1" width="58" alt="">
                    <p class="my-2"><b>John Doe</b><br><small>Backend developer</small></p>
                    <div class="my-2"><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates ut ad laudantium.</p>
                  </div>
                  <span class="fa fa-quote-left fa-3x text-muted"></span>
                </li>
                <li class="splide__slide py-5 px-4 m-4 rounded shadow bg-white">
                  <div class="testimonial text-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded-circle avatar p-1" width="58" alt="">
                    <p class="my-2"><b>Steve</b><br><small>Co-founder of company</small></p>
                    <div class="my-2"><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates ut ad laudantium.</p>
                  </div>
                  <span class="fa fa-quote-left fa-3x text-muted"></span>
                </li>
                <li class="splide__slide py-5 px-4 m-4 rounded shadow bg-white">
                  <div class="testimonial text-center">
                      <img src="https://randomuser.me/api/portraits/women/31.jpg" class="rounded-circle avatar p-1" width="58" alt="">
                    <p class="my-2"><b>Jessica</b><br><small>Product Manager</small></p>
                    <div class="my-2"><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates ut ad laudantium.</p>
                  </div>
                  <span class="fa fa-quote-left fa-3x text-muted"></span>
                </li>
              </ul>
            </div>
          </div>
      
        </div>
      </section>
      <style>
      #testimonial .splide{
        height:400px;
      }
      #testimonial .splide__slide{
        opacity:0.3;
        position:relative;
      }
      #testimonial .splide__slide.is-active{
         opacity:1;
      }
      #testimonial .avatar{
        border:1px solid var(--theme-color);
      }
      
      #testimonial .splide__slide .fa-quote-left{
        position:absolute;
        top:54px;
        left:40px;
        opacity:0.2;
      }
      #testimonial .splide__arrows .splide__arrow{
        top:-1rem;
        background:#fff;
      }
      #testimonial .splide__arrows .splide__arrow--prev{
          left:auto;
          right:4rem;
      }
      </style>`
  },
  {

    id: 'section-gallery',
    label: 'Gallery',
    category: 'Sections',
    attributes: {
      class: 'fa fa-th'
    },
    content:`<section id="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="display-4 my-4 text-uppercase">Lightbox images & videos</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://placeimg.com/420/420/tech" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://placeimg.com/420/420/tech" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://biati-digital.github.io/glightbox/demo/pexels-video-1550080.mp4" class="glightbox" data-title="My title" data-description="description here" data-type="video" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://placeimg.com/420/420/tech" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://placeimg.com/420/420/tech" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://www.youtube-nocookie.com/embed/pF37tPGkWio" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="video" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://placeimg.com/420/420/tech" class="glightbox" data-title="My title" data-description="description here" data-type="image" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://placeimg.com/420/420/tech" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://placeimg.com/420/420/tech" alt="" class="img-fluid"></a>
          </div>
        </div>
      </div>
    </div>
  </section><style>.image-wrap{
    height:250px;
  }
  .image-wrap img{
    transition:all ease 0.4s;
    width:100%;
    height:100%;
    object-fit:cover;
    cursor:zoom-in;
  }
  
  .image-wrap img:hover{
      transform:scale(0.99);
  }</style>`
  },
  {
    id:'section-brands',
    label:'Brands',
    category: 'Sections',
    attributes: {
       class: 'fa fa-ellipsis-h'
    },
    content:`<section id="brands" class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Google</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/google.svg" alt="Google">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Nike</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/google.svg" alt="Nike">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Apple</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/apple.svg" alt="Apple">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">IBM</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/ibm.svg" alt="IBM">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Uber</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/uber.svg" alt="Uber">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Window</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/window.svg" alt="Window">
        </div>
      </div>
    </div>
  </section><style>#brands img{
    opacity:0.3;
 }</style>`
  },
  {
    id:'section-contact',
    label:'Contact',
    category:'Sections',
    attributes:{
      class:'fa fa-envelope'
    },
    content:`<section id="contact" class="bg-white">
    <div class="container shadow p-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="address p-4 rounded shadow bg-primary text-white d-flex flex-column align-items-center justify-content-center">
               <h2 class="text-uppercase my-4">We love to hear from you</h2>
            <div class="mb-4 border border-1 border-top border-white" style="width:100px;"></div>
             <p>HUTCHINSON</p>
              <p>	4663 Sunny Day Drive</p>
            <p>714-778-6685</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-form p-4">
            <form id="contactForm" action="#" novalidate>
              <div class="validate-message"></div>
              <div class="form-group is-invalid my-3">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" name="name" required>
   <div class="invalid-feedback">Name is required</div>
              </div>
              <div class="form-group my-3">
                 <label for="email">Email</label>
                <input type="email" id="email" class="form-control" name="email" required><div class="invalid-feedback">Email is required</div></div>
              <div class="form-group my-3">
                <label for="phone">Phone <small class="text-muted">- optional</small></label>
                <input type="text" id="phone" class="form-control" name="phone"></div>
              <div class="form-group my-3">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-control" required></textarea><div class="invalid-feedback">Message is required</div></div>
              <div class="form-group my-3 d-flex justify-content-end">
                <button class="btn btn-primary btn-lg">
                  <span class="fa fa-envelope me-2"></span>Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section><style>.address{
      height:500px;
    }
    
    .contact-form .form-group .form-control{
      border:0;
      padding:4px 0;
      border-bottom:1px solid #ddd;
      border-radius:0;
    }
    
    .contact-form .form-group .form-control:focus{
      outline:none;
      box-shadow:none;
      border-bottom:1px solid #0d6efd;
    }
    
    .contact-form .form-group textarea{
      min-height:120px;
    }</style>`
  },
  {
    id:'section-subscribe',
    label:'Subscribe',
    category:'Sections',
    attributes:{
      class:"fa fa-paper-plane"
    },
    content:`<section id="subscribe" class="p-3 p-sm-5">
    <div class="container">
        <div class="subscribe-wrap d-flex align-items-center justify-content-center p-3 p-sm-5 shadow m-5 bg-white rounded">
          
             <form id="subscribe-form" action="#" method="POST">
               <h2 class="display-6 text-uppercase text-center my-4">Subscribe</h2>
              <div class="input-group">
    <input type="text" class="form-control border-primary" placeholder="Email">
    <div class="input-group-append">
      <button class="subscribe-btn btn px-sm-4 btn-primary" type="button">Submit</button>
    </div>
  </div>
               <p class="text-center my-4"><small>Never miss an update from us.</small></p>
            </form>
          
          
          
          <svg class="mail-icon" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="84.44%" y1="83.877%" x2="38.737%" y2="39.717%" id="a"><stop stop-color="#D2DEFF" stop-opacity="0" offset="0%"/><stop stop-color="#B7C5FF" offset="100%"/></linearGradient></defs><g fill-rule="nonzero" fill="none"><path d="M196.044 39.68c-8.733-22.221-35.635-35.547-58.42-26.728-26.009 10.066-17.385 51.434-41.01 59.8-12.76 4.518-31.625-12.361-44.518-14.95C28.338 53.032 6.83 69.796 1.534 93.011c-5.404 23.683 3.262 55.316 29.284 61.744 30.996 7.657 47.141-20.207 73.144-28.207 26.683-8.21 56.352 11.18 78.443-12.413 16.32-17.43 22.287-52.45 13.64-74.454z" fill="url(#a)" transform="translate(0 5)"/><path d="M186.268 54.45c0-15.428-12.507-27.936-27.936-27.936-11.953 0-22.148 7.51-26.137 18.066H31.177a7.812 7.812 0 00-7.813 7.813v86.488a7.812 7.812 0 007.813 7.813h137.646a7.812 7.812 0 007.813-7.813V75.545c5.898-5.122 9.632-12.67 9.632-21.095z" fill="#2626BC" opacity=".1"/><g fill="#FFF"><path d="M168.823 136.928H31.177a7.812 7.812 0 01-7.813-7.812V42.627a7.812 7.812 0 017.813-7.812h137.646a7.812 7.812 0 017.813 7.812v86.489a7.812 7.812 0 01-7.813 7.812z"/><path d="M102.38 72.075l74.256 57.04a7.812 7.812 0 01-7.813 7.813H31.177a7.812 7.812 0 01-7.813-7.812L97.62 72.075a3.906 3.906 0 014.76 0z"/><path d="M97.62 99.669L23.364 42.627a7.812 7.812 0 017.813-7.812h137.646a7.812 7.812 0 017.813 7.812L102.38 99.67a3.907 3.907 0 01-4.76 0z"/></g><path d="M144.901 126.533H132.35a1.953 1.953 0 01-1.953-1.953v-8.654c0-1.078.874-1.953 1.953-1.953H144.9c1.08 0 1.953.875 1.953 1.953v8.654a1.953 1.953 0 01-1.953 1.953z" fill="#6583FE"/><g fill="#0D6EFD"><path d="M121.825 118.571h-10.873a1.953 1.953 0 110-3.906h10.873a1.953 1.953 0 110 3.906zM121.825 126.533H83.609a1.953 1.953 0 110-3.906h38.216a1.953 1.953 0 110 3.906z"/></g><g fill="#0D6EFD" transform="translate(21.094 12.422)"><circle stroke="#FFF" stroke-width="20" transform="rotate(-80.792 137.204 32.266)" cx="137.204" cy="32.266" r="27.933"/><path d="M137.238 62.152c16.481 0 29.89-13.408 29.89-29.89 0-16.48-13.408-29.889-29.89-29.889-16.481 0-29.89 13.409-29.89 29.89 0 9.587 4.543 18.129 11.584 23.602L80.096 85.698c-.7.538-1.678.538-2.38 0L4.294 29.297a5.87 5.87 0 015.789-4.95h89.596a1.953 1.953 0 100-3.907H10.083c-5.385 0-9.766 4.38-9.766 9.765v86.489c0 5.385 4.381 9.765 9.766 9.765h137.646c5.385 0 9.766-4.38 9.766-9.765V65.077a1.953 1.953 0 10-3.906 0v47.653l-51.136-39.28 19.899-15.286a29.694 29.694 0 0014.886 3.988zM55.36 73.45L4.223 112.73V34.17l51.136 39.28zm98.153 44.147c-.437 2.803-2.86 4.956-5.783 4.956H10.083c-2.923 0-5.346-2.153-5.783-4.956l54.266-41.685 16.77 12.883a5.852 5.852 0 003.57 1.211 5.85 5.85 0 003.57-1.21l16.77-12.884 54.266 41.685zm-42.257-85.334c0-14.327 11.656-25.983 25.983-25.983 14.328 0 25.983 11.656 25.983 25.983s-11.655 25.983-25.983 25.983c-14.327 0-25.983-11.656-25.983-25.983z"/></g><path d="M146.138 35.158l3.987 9.527-3.987 9.527c-.677 1.618.957 3.239 2.57 2.55l24.07-10.281c1.58-.676 1.58-2.917 0-3.592l-24.07-10.281c-1.613-.69-3.247.932-2.57 2.55z" fill="#FFF"/><g fill="#6583FE"><path d="M129.23 16.59a5.645 5.645 0 01-4.005-1.656 5.67 5.67 0 010-8.01 5.67 5.67 0 018.01 0 5.67 5.67 0 010 8.01 5.645 5.645 0 01-4.005 1.656zm0-7.418c-.45 0-.9.171-1.244.514a1.76 1.76 0 000 2.486 1.76 1.76 0 002.486 0 1.76 1.76 0 000-2.486 1.753 1.753 0 00-1.242-.514zM85.366 164.107a5.647 5.647 0 01-4.005-1.656 5.67 5.67 0 010-8.01 5.67 5.67 0 018.01 0 5.67 5.67 0 010 8.01 5.646 5.646 0 01-4.005 1.656zm0-7.418c-.45 0-.9.171-1.243.514a1.76 1.76 0 000 2.486 1.76 1.76 0 002.486 0 1.76 1.76 0 000-2.486 1.753 1.753 0 00-1.243-.514zM115.148 21.62c-.5 0-1-.19-1.38-.572l-2.33-2.33-2.33 2.33a1.953 1.953 0 01-2.762-2.762l3.71-3.711c.763-.762 2-.762 2.762 0l3.711 3.71a1.953 1.953 0 01-1.38 3.335zM171.776 156.688c-.5 0-1-.19-1.381-.572l-2.33-2.33-2.33 2.33a1.953 1.953 0 01-2.762-2.762l3.711-3.71c.762-.763 2-.763 2.762 0l3.71 3.71a1.953 1.953 0 01-1.38 3.334zM69.877 158.544c-.5 0-1-.19-1.381-.572l-2.33-2.33-2.33 2.33a1.953 1.953 0 01-2.762-2.762l3.71-3.711c.763-.763 2-.763 2.762 0l3.711 3.71a1.953 1.953 0 01-1.38 3.335z"/></g></g></svg>
      </div>
    </div>
  </section><style>.subscribe-btn{
    border-top-left-radius:0;
    border-bottom-left-radius:0;
  }
  
  #subscribe{
    background: rgb(13,143,253);
    background: linear-gradient(325deg, rgba(13,143,253,1) 0%, rgba(13,110,253,1) 68%, rgba(29,13,253,1) 100%);
  }
  #subscribe .subscribe-wrap{
     position:relative;
  }
  
  #subscribe .subscribe-wrap svg.mail-icon{
    position:absolute;
    top:-80px;
    left:10px;
    z-index:0;
  }
  
  form#subscribe-form{
    width:500px;
  }
  
  @media(max-width:768px){
    form#subscribe-form{
      max-width:500px;
    }
    #subscribe .subscribe-wrap svg.mail-icon{
      display:none;
    }
  }</style>`
  },
  {
    id:'section-parallax',
    label:'Parallax',
    category:'Sections',
    attributes:{
      class:"fa fa-copy"
    },
    content:`<section id="parallax" class="parallax">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="parallax-content p-4 shadow bg-white rounded text-center">
            
         
          <h2>Title text</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellendus maiores enim dolore nesciunt!</p>
             </div>
        </div>
      </div>
    </div>
  </section><style>
  .parallax-content{
    height:200px;
   opacity:0.8;
   margin-top:150px;
 }
 
 .parallax {
   /* The image used */
   background-image: url("https://placeimg.com/1500/1500/tech");
 
   /* Set a specific height */
   min-height: 500px;
 
   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
 }
  </style>`
  },
  {
    id:'section-team',
    label:'Team',
    category:'Sections',
    attributes:{
      class:'fa fa-th'
    },
    content:`<section id="team">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">OUR AMAZING TEAM</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660134/user1.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>Peter J. Lamy</h4>
                            <p class="my-2"><small>Software Developer</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660145/user4.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>June D. Smith</h4>
                            <p class="my-2"><small>Product Manager</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660134/user3.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>Dianna C. Avila</h4>
                            <p class="my-2"><small>Graphic Designer</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660147/user2.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>Robert C. Young</h4>
                            <p class="my-2"><small>Web Designer</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>`
  },
  {
    id: 'section-footer',
    label: 'Footer',
    category: 'Sections',
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<section id="footer">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4">
            <h3 class="text-primary">Logo</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla unde eum dolor, recusandae iusto dolorum.</p>
            <p>
              <b>Follow Us</b>
              <span class="fa fa-facebook me-2"></span>
              <span class="fa fa-instagram me-2"></span>
              <span class="fa fa-twitter me-2"></span>
              <span class="fa fa-linked-in me-2"></span>
            </p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>SITE MAP</b></li>
                <li class="list-group-item">About</li>
                <li class="list-group-item">Contact</li>
                <li class="list-group-item">Login</li>
                <li class="list-group-item">Sign Up</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>HELP</b></li>
                <li class="list-group-item">Tutorials</li>
                <li class="list-group-item">Support</li>
                <li class="list-group-item">FAQ</li>
                <li class="list-group-item">Create ticket</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>TERMS</b></li>
                <li class="list-group-item">Terms of Service</li>
                <li class="list-group-item">Privacy policy</li>
                <li class="list-group-item">Service Agreement</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <p class="text-center text-muted">
              <small>&copy; 2019-2021 | AutoDapp | All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </section><style>#footer .list-group-item {
      background: transparent;
  }</style>`
  },
  {
    id: 'section-footer-two',
    label: 'Footer Two',
    category: 'Sections',
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<section id="footer-two">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4">
            <h3 class="text-primary">Logo</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla unde eum dolor, recusandae iusto dolorum.</p>
            <p>
              <b>Follow Us</b>
              <span class="fa fa-facebook me-2"></span>
              <span class="fa fa-instagram me-2"></span>
              <span class="fa fa-twitter me-2"></span>
              <span class="fa fa-linked-in me-2"></span>
            </p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>SITE MAP</b></li>
                <li class="list-group-item">About</li>
                <li class="list-group-item">Contact</li>
                <li class="list-group-item">Login</li>
                <li class="list-group-item">Sign Up</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>HELP</b></li>
                <li class="list-group-item">Tutorials</li>
                <li class="list-group-item">Support</li>
                <li class="list-group-item">FAQ</li>
                <li class="list-group-item">Create ticket</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>TERMS</b></li>
                <li class="list-group-item">Terms of Service</li>
                <li class="list-group-item">Privacy policy</li>
                <li class="list-group-item">Service Agreement</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <p class="text-center text-muted">
              <small>&copy; 2022-2023 | AutoDapp | All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </section>`
  }
]