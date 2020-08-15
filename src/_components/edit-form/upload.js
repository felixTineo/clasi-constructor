import React from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const UploadButton = ({ type })=> (
  <div>
    {/*this.state.loading ? <LoadingOutlined /> : <PlusOutlined />*/}
    <PlusOutlined />
    <div className="ant-upload-text">{type}</div>
  </div>
);

export default ({ onChange, value }) => {
  const handleChange = info => {
    const image = URL.createObjectURL(info.file.originFileObj);
    onChange(image);
  }

  return(
    <Upload
      name="logo"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      //beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {
        value ? <img src={value} alt="ingreso de imagenes" style={{ width: '100%' }} /> : <UploadButton type="jpg/png/svg" />
      }
    </Upload>    
  )
}