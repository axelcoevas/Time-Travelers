import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../static/ProfileUpload.css'
import { db } from '../firebase'
import { useStorage } from '../hooks/userStorage'
import { useSateValue } from '../StateProvider'

const ProfileUpload = () => {
  const [file, setFile] = useState(null);
  const [{ user }] = useSateValue();
  const history = useHistory();

  useEffect(() => {
    if (url) {
      doProfileUpdate(url)
      history.go(0)
    }
  })

  const doProfileUpdate = (photoURL) => {
    return db
      .collection("users")
      .doc(user.uid)
      .update({
        profileURL: photoURL
      })
  }

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }


  const { progress, url } = useStorage(file);

  return (
    <div className="upload-container">
      <div className="inputs-container">
        <progress className="progress" value={progress} max="100"></progress>
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
    </div>
  )
}

export default ProfileUpload