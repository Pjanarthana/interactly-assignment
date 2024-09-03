import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTextBox } from '../redux/textSlice';
import { v4 as uuidv4 } from 'uuid';

const ConfigPanel = () => {
  const dispatch = useDispatch();
  const [config, setConfig] = useState({
    x: 0,
    y: 0,
    width: 100,
    height: 25,
    text: '',
    style: { color: '#FF0000', fontSize: 20 },
  });

  const handleAddTextBox = () => {
    if (config.text.trim()) {
      dispatch(addTextBox({ id: uuidv4(), ...config }));
      setConfig({ ...config, text: '' }); // Clear the input after adding the text box
    } else {
      alert('Please enter some text!');
    }
  };

  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('style')) {
      setConfig({ ...config, style: { ...config.style, [name.split('.')[1]]: value } });
    } else {
      setConfig({ ...config, [name]: value });
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
      <div>
        <label className="block text-sm font-medium">Text:</label>
        <input
          type="text"
          name="text"
          value={config.text}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter text"
        />
      </div>
      <button
        onClick={handleAddTextBox}
        className="px-4 py-2 bg-black text-white rounded hover:bg-black-600"
      >
        Add Text
      </button>
      <div>
        <label className="block text-sm font-medium">X:</label>
        <input
          type="number"
          name="x"
          value={config.x}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Y:</label>
        <input
          type="number"
          name="y"
          value={config.y}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Width:</label>
        <input
          type="number"
          name="width"
          value={config.width}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Height:</label>
        <input
          type="number"
          name="height"
          value={config.height}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Color:</label>
        <input
          type="color"
          name="style.color"
          value={config.style.color}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Font Size:</label>
        <input
          type="number"
          name="style.fontSize"
          value={config.style.fontSize}
          onChange={handleConfigChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default ConfigPanel;
