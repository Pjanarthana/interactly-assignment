import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch } from 'react-redux';
import { deleteTextBox, updateTextBox } from '../redux/textSlice';

const TextBox = ({ id, x, y, width, height, text, style }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTextBox(id));
  };

  const handleDragStop = (e, d) => {
    dispatch(updateTextBox({ id, x: d.x, y: d.y }));
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    dispatch(updateTextBox({
      id,
      width: parseInt(ref.style.width, 10),
      height: parseInt(ref.style.height, 10),
      ...position,
    }));
  };

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      bounds="parent"
      className="bg-white bg-opacity-70 rounded-lg shadow-md border border-gray-300 p-2 flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <span style={style} className="text-lg font-semibold">
          {text}
        </span>
        <button
          onClick={handleDelete}
          className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600"
        >
          ✕
        </button>
      </div>
    </Rnd>
  );
};

export default TextBox;
