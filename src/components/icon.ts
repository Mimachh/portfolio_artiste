export const iconPaths = {
    fullVolume:
      'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z',
    midVolume: 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z',
    lowVolume: 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667',
    pause: 'M0 0h6v24H0zM12 0h6v24h-6z',
    play: 'M18 12L0 24V0'
  };


  export const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return min + ':' + (sec < 10 ? '0' + sec : sec);
  };


  function isDraggable(el: HTMLElement) {
    return Array.from(el.classList).indexOf('rap-pin') !== -1;
  }
  
  export const getRangeBox = (event: MouseEvent | React.MouseEvent<HTMLDivElement>, currentDragElement: HTMLDivElement | null) => {
    let rangeBox = event.target as HTMLElement;
    if (event.type === 'click' && isDraggable(rangeBox) && rangeBox?.parentElement?.parentElement) {
      rangeBox = rangeBox.parentElement.parentElement;
    }
    if (event.type === 'mousemove' && currentDragElement?.parentElement?.parentElement) {
      rangeBox = currentDragElement.parentElement.parentElement;
    }
    return rangeBox;
  };