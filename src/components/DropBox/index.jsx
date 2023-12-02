import './style.css';
import { useDroppable } from '@dnd-kit/core';

export const DropBox = ({ id, x, y, isSolved }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  const style = {
    border: isOver ? '2px solid red' : undefined,
  };

  return (
    <>
      {isSolved[id] ? (
        <use
          href={`#${id}`}
          x={x - 77}
          y={y - 77}
          ref={setNodeRef}
          style={style}
          width={100}
        />
      ) : (
        <circle
          cx={x}
          cy={y}
          r={20}
          style={style}
          ref={setNodeRef}
          fill="#DBBD1C"
        ></circle>
      )}
    </>
  );
};
