export default function MENU() {
  const hambugerBtnState = {
    open: false,
  };
  const nodeRef = {
    spansContainer: document.getElementById('spans-containers'),
    menuContainer: document.getElementById('menu-option-container'),
    main: document.getElementsByTagName('main'),
  };

  // add background
  (() => {
    const menuBack = nodeRef.main[0].appendChild(document.createElement('div'));
    menuBack.className = 'menu-back';
    menuBack.style.cssText =
      'display: flex;background-color: rgb(227 178 143); position: absolute; height: 649px; width: 384px; z-index: -1; left: 53px; transform: rotateZ(20deg); flex-flow: column; justify-content: center; bottom: 40px;';
  })();

  // show menu
  function showMenu(hambugerBtnState, nodeRef) {
    hambugerBtnState.open = true;
    nodeRef.spansContainer.children[1].style.visibility = 'hidden';
    nodeRef.spansContainer.children[0].style.transition =
      'transform linear .2s';
    //   nodeRef.spansContainer.children[0].style.transform = 'translateY(11px)'
    nodeRef.spansContainer.children[0].style.transform = 'translateX(-5px)';
    setTimeout(() => {
      nodeRef.spansContainer.children[0].style.transform =
        'translateX(-7px) rotate(41deg)';
    }, 10);
    setTimeout(() => {
      nodeRef.spansContainer.children[0].style.transform =
        'translateX(-5px) rotate(41deg) translate3d(7px, 0px, 0px)';
    }, 100);

    nodeRef.spansContainer.children[2].style.transition =
      'transform linear .2s';
    nodeRef.spansContainer.children[2].style.transform = 'translateX(-5px)';
    setTimeout(() => {
      nodeRef.spansContainer.children[2].style.transform =
        'translateX(-9px) rotate(-45deg)';
    }, 10);
    setTimeout(() => {
      nodeRef.spansContainer.children[2].style.transform =
        'translateX(-9px) rotate(-45deg) translate3d(17px, 0px, 0px)';
    }, 100);
  }
  // hide menu
  function hideMenu(hambugerBtnState, nodeRef) {
    hambugerBtnState.open = false;
    nodeRef.spansContainer.children[0].style.transition =
      'transform linear .2s';
    nodeRef.spansContainer.children[0].style.transform = '';
    nodeRef.spansContainer.children[2].style.transition =
      'transform linear .2s';
    nodeRef.spansContainer.children[2].style.transform = '';
    setTimeout(() => {
      nodeRef.spansContainer.children[1].style.visibility = 'visible';
    }, 150);
  }

  (() => {
    nodeRef.spansContainer.addEventListener('click', () => {
      const menuBack = document.querySelector('.menu-back');
      if (hambugerBtnState.open === false) {
        showMenu(hambugerBtnState, nodeRef);
        menuBack.style.transition = 'left linear .1s';
        menuBack.style.left = '403px';
        Array.from(nodeRef.menuContainer.children).forEach((listItem) => {
          setTimeout(() => {
            listItem.style.visibility = 'visible';
          }, 150);
        });
      } else {
        hideMenu(hambugerBtnState, nodeRef);
        menuBack.style.transition = 'left linear .1s';
        menuBack.style.left = '53px';
        Array.from(nodeRef.menuContainer.children).forEach((listItem) => {
          setTimeout(() => {
            listItem.style.visibility = 'hidden';
          }, 10);
        });
      }
    });
  })();
}
