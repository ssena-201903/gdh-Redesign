import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./AddNewsPortal.scss";

const AddNewsPortal = ({ isOpen, onClose }) => {
  const [header, setHeader] = useState("");
  const [headerImg, setHeaderImg] = useState("");
  const [topic, setTopic] = useState("");
  const [orderCount, setOrderCount] = useState(0);
  const [sections, setSections] = useState([]);
  const [selectedEditorId, setSelectedEditorId] = useState("");

  const [editors, setEditors] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchEditorsAndTopics = async () => {
      try {
        const editorSnapshot = await getDocs(collection(db, "editors"));
        const editorList = editorSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEditors(editorList);

        const topicSnapshot = await getDocs(collection(db, "topics"));
        const topicList = topicSnapshot.docs.map((doc) => doc.data().name);
        setTopics(topicList);
      } catch (error) {
        console.log("could not fetch editors or topic", error);
      }
    };
    if (isOpen) fetchEditorsAndTopics();
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="portal-backdrop" onClick={onClose}>
      <div className="portal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h5>Haber Ekle</h5>
        <div className="text-inputs">
          <input
            className="text-input"
            type="text"
            placeholder="Başlık"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Başlık Resmi URL"
            value={headerImg}
            onChange={(e) => setHeaderImg(e.target.value)}
          />
        </div>
        <div className="select-inputs">
          <select className="select-input" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Konu Seç</option>
            {topics.map((t, idx) => (
              <option key={idx} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            className="select-input"
            value={selectedEditorId}
            onChange={(e) => setSelectedEditorId(e.target.value)}
          >
            <option value="">Editör Seç</option>
            {editors.map((editor) => (
              <option key={editor.id} value={editor.id}>
                {editor.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={() => console.log("haber ekle")}>
            Haberi Veritabanına Ekle
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default AddNewsPortal;
