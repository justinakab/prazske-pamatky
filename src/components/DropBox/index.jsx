import './style.css';
import { useDroppable } from '@dnd-kit/core';
import { Orloj2 } from '../Monument/Orloj2';
import { Rudolfinum2 } from '../Monument/Rudolfinum2';

const dropBoxSvgs = {
  orloj: Orloj2,
  rudolfinum: Rudolfinum2,
};

export const DropBox = (props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: props.id,
  });

  const style = {
    border: isOver ? '2px solid red' : undefined,
  };

  console.log(props.isSolved);

  return (
    <>
      <svg
        className={props.boxClass}
        style={style}
        ref={setNodeRef}
        xmlns="http://www.w3.org/2000/svg"
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
      >
        <path
          d="M47.9402 95.8804C74.4169 95.8804 95.8805 74.4169 95.8805 47.9402C95.8805 21.4636 74.4169 0 47.9402 0C21.4636 0 0 21.4636 0 47.9402C0 74.4169 21.4636 95.8804 47.9402 95.8804Z"
          fill="#DBBD1C"
        />
      </svg>
    </>
  );
};
