
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export default function Draggable({children, classes, id, onClick}: {children: any, classes: string, id: any, onClick: () => void}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
