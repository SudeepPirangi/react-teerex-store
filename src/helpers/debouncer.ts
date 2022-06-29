const debouncer = (func: (term: string) => void, timeout: number) => {
  var timer: any = null;
  return (term: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, term);
    }, timeout);
  };
};

export default debouncer;
