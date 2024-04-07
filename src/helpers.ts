export const clsx = (classNames: string) => {
  return classNames.split(/\s+/);
};

export const createElem = (tag: string, cssClasses: string[]) => {
  const el = document.createElement(tag);

  el.classList.add(...cssClasses);

  return el;
};
