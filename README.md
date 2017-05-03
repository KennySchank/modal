# modal
A small JavaScript library for displaying effective modals.

## ID and Class Explanations

#### IDs
`modal_modalShadow` defines the modal shadow element.

#### Classes
`modal_closed` defines modal (and modal shadow) elements that are closed by default. When a modal (or modal shadow) is opened, this class is removed.

`modal_modal` defines "normal" (non-video) modals.

`modal_videoModal` defines video modals.


## How To

### HTML

#### 1. LINK TO LIBRARY FILES
Link to `modal.css` and `modal.js`.
``` html
<html>
<head>
  <title>Page Title</title>
  <link rel="stylesheet" type="text/css" href="path/to/modal.css" />
</head>
<body>
  ...
  <script src="modal.js"></script>
</body>
</html>
```

#### 2. ADD MODAL SHADOW ELEMENT
Place the following code as a child of `<body>` (preferably toward the end).
``` html
  ...

  // Modal shadow element
  <div id="modal_modalShadow" class="modal_closed"></div>
  
  <script src="path/to/modal.js"></script>
</body>
</html>
```

#### 3. ADD MODAL ELEMENTS
After the modal shadow element added above, add each modal element, one after the other.
Normal modal elements have a class of `modal_modal`. Video modal elements have a class of `modal_videoModal`.
All modal elements have a class of `modal_closed`.
Each modal should have a unique ID. Any buttons that open and close modals should also have IDs.
``` html
  ...
  
  // Button for opening modal
  <span id="openModal">Open Modal</span>
  
  // Modal shadow element
  <div id="modal_modalShadow" class="modal_closed"></div>

  // Modal elements
  <div id="modal1" class="modal_modal modal_closed">
    <p><!-- Modal Content --></p>
    <span id="closeModal1">Close Modal</span>
  </div>
  <div id="modal2" class="modal_videoModal modal_closed"><video>...</video></div>
  
  <script src="path/to/modal.js"></script>
</body>
</html>
```

### JavaScript

#### 1. ADD CLICK HANDLERS
At the end of `modal.js`, add click handlers for buttons that open and close modals.
``` javascript
  ...
  
  const openModalButton = document.getElementById('openModal');
  openModalButton.addEventListener('click', () =>
  {
    modal_open('modal1');
  });
  
  const closeModalButton = document.getElementById('closeModal1');
  closeModalButton.addEventListener('click', () =>
  {
    modal_close('modal1');
  });
  
  ...
```
