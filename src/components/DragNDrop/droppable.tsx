import {useDroppable} from '@dnd-kit/core';

interface componentProps {
  children: any;
  id: string;
  classes: string;

}

export default function Droppable({ children, id, classes }: componentProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : .5,
  };

  return (
    <div ref={setNodeRef} style={style} className={classes}>
      {children}
    </div>
  );
}
  