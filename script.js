

// const keys = Array.from(document.querySelectorAll('.key'));

// function playSound(e){
  
    
//     const keyCode = keys[e.code];
//     if(!keyCode) return;
    
//     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${keyCode}"]`);

//     if(!audio || !key) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();

// }
// function removeTransition(e){
//     if(e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }


// keys.forEach(key=>key.addEventListener('transitionend', removeTransition))
// window.addEventListener('keydown', playSound)

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const codeMap = {
      'KeyA': '65', 'KeyS': '83', 'KeyD': '68', 'KeyF': '70', 'KeyG': '71',
      'KeyH': '72', 'KeyJ': '74', 'KeyK': '75', 'KeyL': '76'
    };
    
    const keyCode = codeMap[e.code];
    console.log('Key pressed:', e.code, 'Mapped to:', keyCode);
    if (!keyCode) return;
    
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    console.log('Audio element:', audio, 'Key element:', key);
    if (!audio || !key) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play().catch(err => console.error('Playback error:', err));
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  
  // Unlock audio context on first user interaction
  document.addEventListener('click', () => {
    const audio = new Audio();
    audio.play().catch(() => {});
  }, { once: true });