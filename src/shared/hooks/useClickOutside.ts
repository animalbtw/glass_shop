import {useRef, useEffect, RefObject} from 'react';

/**
 * Хук для реакции на клик за пределами DOM-эллемента
 *
 * @example
 * const ref = useClickOutside(() => setOpen(false), isOpen);
 * <div ref={ref}> DOM-эллемент, клик за пределами которого вызовет обработчик </div>
 */

export function useClickOutside<T extends Element>(callback: Function, isOpen?: boolean): RefObject<T> {
  const ref = useRef<T>(null);

  const handleClick = (e: DocumentEventMap['click']): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback(e);
    }
  };

  useEffect(() => {
    isOpen && document.addEventListener('click', handleClick);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
}