import React, { useState } from "react";
import PropTypes from "prop-types";
import cameraSVG from "../../../assets/images/camera.svg";
import editSVG from "../../../assets/images/edit.svg";
import { openUploadWidget } from "../../../utils/CloudinaryService";
import axios from "axios";

BoxInfo.propTypes = {
  onUploadImage: PropTypes.func,
  userInfo: PropTypes.object,
};

function BoxInfo(props) {
  const { userInfo, onUploadImage, isMe } = props;
  const [inputContent, setInputContent] = useState("");
  const [statusEditBox, setStatusEditBox] = useState(false);

  // upload image
  function beginUpload(type) {
    const uploadOptions = {
      cloudName: process.env.REACT_APP_CLOUD_NAME,
      uploadPreset: "pnto4uty",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === "success") {
          const imageUrl = photos.info.url;
          const url =
            process.env.REACT_APP_API_URL + `users/${userInfo.id}/update`;
          // gui du lieu len server
          axios.post(url, { [type]: imageUrl }).then((res) => {
            console.log(res, "oke");
            const newUserInfo = {
              ...userInfo,
              [type]: imageUrl,
            };
            // chuyen userinfo cho component cha quan ly
            onUploadImage(newUserInfo);
          });
        }
      } else {
        console.log(error);
      }
    });
  }

  function onHandleInputChange(event) {
    const value = event.target.value;
    setInputContent(value);
  }

  function onSave() {
    const url = process.env.REACT_APP_API_URL + `users/${userInfo.id}/update`;
    let newName = inputContent;
    axios.post(url, { name: newName }).then((res) => {
      window.location.reload(false);
    });
  }

  return (
    <div
      className="box-info"
      style={{ backgroundImage: `url(${userInfo.backgroundUrl})` }}
    >
      {isMe && (
        <div className="upload" onClick={() => beginUpload("backgroundUrl")}>
          <img src={cameraSVG} alt="camera" />
          <p>Cập nhật ảnh bìa</p>
        </div>
      )}
      <div className="box-info__content">
        {isMe && (
          <div
            onClick={() => beginUpload("avatarUrl")}
            className="avatar"
            style={{ backgroundImage: `url(${userInfo.avatarUrl})` }}
          ></div>
        )}
        {isMe || (
          <div
            className="avatar"
            style={{ backgroundImage: `url(${userInfo.avatarUrl})` }}
          ></div>
        )}
        <p className="name">{userInfo.name}</p>
      </div>
      {isMe && (
        <div
          onClick={() => setStatusEditBox(!statusEditBox)}
          className="box-info__edit"
        >
          <img src={editSVG} alt="edit" />
          <p>Cập nhật thông tin</p>
        </div>
      )}
      {statusEditBox && (
        <div className="edit-box">
          <input
            onChange={onHandleInputChange}
            value={inputContent}
            type="text"
            placeholder="Nhập tên mới ..."
          />
          <div className="button-box">
            <button onClick={onSave} className="box-btn">
              Lưu
            </button>
            <button onClick={() => setStatusEditBox(false)} className="box-btn">
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoxInfo;
