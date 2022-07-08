import sectionBlocks from './sectionBlocks';

const bootstrapBasicBlocks = [
  // These are the Shapes

  {
    id: 'shp',
    label: 'Circle',
    category: 'Shapes',
    type: "svg",
    content: `<div class="shapes fa shapes text-primary"><svg width="150px" height="150px" font-colour="Blue" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-circle-fill"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>
</div>`,
    attributes: {
        activeOnRender: 1
    },
    
},

{
  id: 'o-rect',
  label: 'Rectangle',
  category: 'Shapes',
  type: "svg",
  content: `<div class="0-rect"><svg width="150px" height="150px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="currentColor" class="bi bi-rectangle-fill">
<g>
 <g>
   <path d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667v298.667C0,411.221,4.779,416,10.667,416h490.667
     c5.888,0,10.667-4.779,10.667-10.667V106.667C512,100.779,507.221,96,501.333,96z"/>
 </g>
</g>
</svg>
</div>`,
  attributes: {
      activeOnRender: 1
  },
},

{
  id: 'tri',
  label: 'Triangle',
  category: 'Shapes',
  type: "svg",
  content: `<div class="0-rect"><svg width="150px" height="150px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-triangle-fill">
  <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
</svg>
</div>`,
  attributes: {
      activeOnRender: 1
  },
},

{
  id: 'sqr',
  label: 'Square',
  category: 'Shapes',
  type: "svg",
  content: `<div class="0-rect"><!-- License: MIT. Made by Primer: https://github.com/primer/octicons -->
<svg width="150px" height="150px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-Square-fill"><path fill-rule="evenodd" d="M7.75 6A1.75 1.75 0 006 7.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0018 16.25v-8.5A1.75 1.75 0 0016.25 6h-8.5z"/></svg>
</div>`,
  attributes: {
      activeOnRender: 1
  },
},

{
  id: 'pyr',
  label: 'Pyramid',
  category: 'Shapes',
  type: "svg",
  content: `<div class="0-rect"><!-- License: CC Attribution. Made by boxicons: https://github.com/atisawd/boxicons -->
<svg width="150px" height="150px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-Pyramid-fill"><path d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zm8.12-7.078L12 19.798V4.667l7.565 10.087z"/></svg>
</div>`,
  attributes: {
      activeOnRender: 1
  },
},

{
  id: 'Cyl',
  label: 'Cylinder',
  category: 'Shapes',
  type: "svg",
  content: `<div class="0-rect"><!-- License: CC0. Made by SVG Repo: https://www.svgrepo.com/svg/293435/cylinder -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="currentColor" class="bi bi-cylinder-fill">
<rect x="103.804" y="56.073" width="304.4" height="399.854"/>
<ellipse style="fill:#aac0d6;" cx="255.996" cy="56.073" rx="152.2" ry="56.073"/>
<ellipse cx="255.996" cy="455.927" rx="152.2" ry="56.073"/>
</svg>
</div>`,
  attributes: {
      activeOnRender: 1
  },
},

{
  id: 'Oct',
  label: 'Octahedron',
  category: 'Shapes',
  type: "svg",
  content: `<div class="0-rect"><?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg width="150px" height="150px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 511.995 511.995;" xml:space="preserve" fill="currentColor" class="bi bi-octahedran-fill">
<g>
	<g>
		<path d="M425.944,223.995c0-0.533-0.235-1.003-0.299-1.515c-0.064-0.512-0.064-1.024-0.213-1.515
			c-0.064-0.235-0.149-0.469-0.235-0.704c-0.256-0.683-0.661-1.237-1.024-1.835c-0.021-0.021-0.021-0.064-0.043-0.085
			c-0.213-0.32-0.277-0.704-0.512-1.024l-0.213-0.256c-0.021-0.021-0.021-0.043-0.043-0.043L252.973,4.048
			c-0.107-0.128-0.192-0.256-0.299-0.363c-0.384-0.448-0.875-0.683-1.323-1.045c-0.512-0.427-0.96-0.896-1.536-1.216
			c-0.811-0.469-1.707-0.704-2.603-0.939c-0.363-0.085-0.661-0.32-1.045-0.384c-0.064,0-0.107,0.021-0.171,0
			c-2.667-0.363-5.44,0.235-7.744,1.941c-0.341,0.235-0.619,0.469-0.917,0.747c0,0.021-0.021,0.021-0.021,0.021
			c-0.512,0.469-0.832,1.067-1.216,1.621c-0.235,0.32-0.491,0.576-0.704,0.939c-0.085,0.171-0.256,0.277-0.341,0.448l-147.84,277.12
			c-0.021,0.043,0,0.085-0.043,0.128c-0.171,0.341-0.192,0.725-0.341,1.088c-0.235,0.619-0.405,1.195-0.533,1.856
			c-0.107,0.576-0.213,1.131-0.235,1.728c0,0.299-0.021,0.576,0,0.896c0.021,0.469,0.149,0.917,0.256,1.387
			c0.149,0.747,0.363,1.429,0.683,2.133c0.149,0.32,0.149,0.683,0.32,1.003c0.021,0.064,0.085,0.085,0.107,0.149
			c0.064,0.021,0.064,0.107,0.085,0.149c0.128,0.213,0.384,0.299,0.512,0.512c0.192,0.277,0.256,0.619,0.491,0.875l179.947,213.333
			c0.192,0.213,0.469,0.363,0.683,0.555c0.619,0.619,1.28,1.152,2.027,1.6c0.235,0.149,0.405,0.384,0.661,0.512
			c0.043,0.021,0.107,0.021,0.149,0.043c0.192,0.085,0.384,0.128,0.576,0.213c1.28,0.533,2.624,0.896,4.053,0.896
			c0.789,0,1.579-0.085,2.389-0.256c0.064-0.021,0.085-0.064,0.149-0.064c0.043,0,0.085,0,0.128-0.021
			c0.107-0.021,0.192-0.149,0.299-0.171c0.661-0.192,1.216-0.512,1.792-0.811c0.32-0.171,0.661-0.235,0.96-0.448
			c0.555-0.363,0.981-0.789,1.451-1.237c0.341-0.32,0.597-0.619,0.896-0.96c0.448-0.533,0.875-1.067,1.216-1.685
			c0.064-0.107,0.192-0.149,0.235-0.277l138.667-277.333c0.043-0.085,0.043-0.192,0.085-0.299c0.235-0.533,0.32-1.109,0.491-1.664
			c0.107-0.405,0.384-0.747,0.448-1.152c0.021-0.171-0.043-0.341-0.021-0.512c0.021-0.256,0.085-0.512,0.085-0.768
			C425.88,224.208,425.944,224.102,425.944,223.995z M247.576,62.758l40.533,150.549h-63.104L247.576,62.758z M293.848,234.64
			l11.499,42.667h-69.483l-9.856-42.667H293.848z M224.898,70.246l-22.037,146.965l-79.872,44.096L224.898,70.246z M213.976,277.307
			h-75.904l67.328-37.163L213.976,277.307z M119.64,298.64h99.264l37.397,162.027L119.64,298.64z M275.864,450.641l-35.072-152
			h65.493L275.864,450.641z M302.744,425.168l26.155-130.773l58.859-39.253L302.744,425.168z M315.949,234.64h64.085l-54.336,36.224
			L315.949,234.64z M310.21,213.307L268.184,57.19l124.885,156.117H310.21z"/>
	</g>
</g>
</svg>

</div>`,
  attributes: {
      activeOnRender: 1
  },
},
// End of Shapes

// Begining of Components

  {
      id: 'nav',
      label: 'nav',
      category: 'Components',
      attributes: {
          class: 'gly-one-column'
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
    </nav>`
  },
  {
      id: 'modal',
      label: 'modal',
      category: 'Components',
      attributes: {
          class: 'gly-three-columns'
      },
      content: `<!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Click
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
          </div>
          </div>
      </div>
      </div>`,
  },

  // These are basic blocks
  {
      id: 'b1',
      label: '1 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-one-column'
      },
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
<div class="col-md-12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div>
</div><style>.col-md-12:empty{display:table-cell;height:75px}</style>`
  },
  {
      id: 'b2',
      label: '2 Blocks',
      category: 'Grid',
      attributes: {
          class: 'gly-two-columns'
      },
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
<div class="col-md-6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
<div class="col-md-6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
</div><style>.col-md-6:empty{display:table-cell;height:75px}</style>`
  },
  {
      id: 'b3',
      label: '3 Blocks',
      category: 'Grid',
      attributes: {
          class: 'gly-three-columns'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col-md-4 col-sm-6" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '<div class="col-md-4 col-sm-6" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '<div class="col-md-4 col-sm-6" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '</div><style>.col-md-4:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'b5',
      label: '4/8 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-four-eight'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '<div class="col-md-8" data-gjs-draggable=".row" data-gjs-custom-name="m8"></div>'
          + '</div><style>.col-md-4:empty,.col-md-8:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'b6',
      label: '5/7 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-four-eight'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col m5" data-gjs-draggable=".row" data-gjs-custom-name="m5"></div>'
          + '<div class="col m7" data-gjs-draggable=".row" data-gjs-custom-name="m7"></div>'
          + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'b7',
      label: '3/9 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-three-nine'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col-md-3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
          + '<div class="col-md-9" data-gjs-draggable=".row" data-gjs-custom-name="m9"></div>'
          + '</div><style>.col-md-3:empty,.col-md-9:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'text',
      label: 'Text',
      attributes: {
          class: 'fa fa-text-width'
      },
      category: 'Basic',
      content: { type: "text", content: "Insert your text here", style: { padding: "10px" } }
  }, {
      id: 'image',
      label: 'Image',
      category: 'Basic',
      attributes: {
          class: 'fa fa-file-image-o'
      },
      content: {
          type: 'image',
          activeOnRender: 1
      },
  }, {
      id: 'list',
      label: 'List',
      category: 'Basic',
      attributes: {
          class: 'fa fa-bars'
      },
      content: `<ul class="list-group">
<li class="list-group-item">List One</li>
<li class="list-group-item">List Two</li>
<li class="list-group-item">List Three</li>
<li class="list-group-item">List Four</li>
</ul>`,
  },
  {
      id: 'list2',
      label: 'List Two',
      category: 'Basic',
      attributes: {
          class: 'fa fa-bars'
      },
      content: `<div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
  </div>`
  },
  {
      id: 'table',
      label: 'Table',
      category: 'Basic',
      attributes: {
          class: 'fa fa-table'
      },
      content: `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>`
  },
  {
      id: 'res',
      label: 'Image',
      category: 'Media',
      content: '<img src="http://via.placeholder.com/250x250/0174DF/ffffff/" class="img-fluid">',
      attributes: {
          class: 'fa fa-image'
      }
  },
  {
      id: 'video',
      label: 'Video',
      category: 'Media',
      attributes: {
          class: 'fa fa-youtube-play'
      },
      content: {
          type: 'video',
          src: 'img/video2.webm',
          style: {
              height: '350px',
              width: '615px',
          }
      },
  }, {
      id: 'h1p',
      label: 'Text section',
      category: 'Typography',
      content: '<div>'
          + '<h3>Insert title here</h3>'
          + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
          + '</div>',
      attributes: {
          class: 'fa fa-align-center'
      }
  }, {
      id: 'quo',
      label: 'Quote',
      category: 'Typography',
      content: '<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
      attributes: {
          class: 'fa fa-quote-right'
      }
  }
]

const blocks = [...sectionBlocks,...bootstrapBasicBlocks]

const blocksObj = {
    blocks
}



export default blocksObj;