import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

const ImageUpload = (props) => {
  const [field, meta, helpers] = useField(props.name);
  const { uploadContainer, inputContainer, imgStyle } = props.classes;
  const onChange = (e) => {
    const file = e.target.files[0];
    const imageType = /image.*/;
    if (!file.type.match(imageType)) {
      e.target.value = '';
    } else {
      helpers.setValue(file);
      const reader = new FileReader();
      reader.onload = () => {
        const node = window.document.getElementById('imagePreview');
        if (node) {
          node.src = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          {...field}
          id="fileInput"
          type="file"
          value={undefined}
          accept=".jpg, .png, .jpeg, .gif"
          onChange={onChange}
        />
        <label htmlFor="fileInput">Choose file</label>
      </div>
        {field.value && (
          <img
            id='imagePreview'
            className={classNames({ [imgStyle]: !!field.value })}
            alt='user'
          />
        )}
    </div>
  );
};

export default ImageUpload;
