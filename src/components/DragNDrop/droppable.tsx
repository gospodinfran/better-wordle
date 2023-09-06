import {useDroppable} from '@dnd-kit/core';
import { ReactNode } from 'react';

interface componentProps {
  children: ReactNode;
  id: string;
  classes: string;
}

export default function Droppable({ children, id, classes }: componentProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : .95,
  };

  return (
    <div ref={setNodeRef} style={style} className={classes}>
      {children}
    </div>
  );
}
  