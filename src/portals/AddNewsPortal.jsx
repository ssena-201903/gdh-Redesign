import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import PrimaryButton from "../components/common/PrimaryButton";
import "./AddNewsPortal.scss";

const AddNewsPortal = ({ isOpen, onClose }) => {
  const [header, setHeader] = useState("");
  const [img, setImg] = useState("");
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

  const addSection = () => {
    setOrderCount((prevOrder) => prevOrder + 1);
    setSections((prevSections) => [
      ...prevSections,
      { order: orderCount + 1, text: "", type: "", variant: "" },
    ]);
  };

  const updateSection = (index, field, value) => {
    setSections((prevSections) =>
      prevSections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      )
    );
  };

  const addToFirestore = async () => {
    try {
      const newsRef = await addDoc(collection(db, "news"), {
        header,
        img,
        time: serverTimestamp(),
        topic,
        isLiked: false,
        isSaved: false,
        likedNumber: 0,
        savedNumber: 0,
        commentNumber: 0,
        seenNumber: 0,
      });

      const editorRef = doc(db, "editors", selectedEditorId);
      const editorSnapshot = await getDoc(editorRef);

      if (editorSnapshot.exists()) {
        const editorData = editorSnapshot.data();
        const editor = {
          name: editorData.name,
          picture: editorData.img,
        };
        await addDoc(collection(db, `news/${newsRef.id}/editor`), editor);
      } else {
        console.log("editor could not find");
      }

      const sectionRefs = [];
      for (const section of sections) {
        const sectionRef = await addDoc(
          collection(db, `news/${newsRef.id}/sections`),
          section
        );
        sectionRefs.push(sectionRef);
      }

    
    onClose();
    } catch (error) {
      console.log("failed to add news", error);
      alert("failed to load news data", error);
    }
  };

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
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="select-inputs">
          <select
            className="select-input"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
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
        <div className="sections-div">
          {sections.map((section, index) => (
            <div key={section.order} className="section-item">
              <input
                className="text-input"
                type="text"
                placeholder={`Section ${section.order} Text`}
                value={section.text}
                onChange={(e) => updateSection(index, "text", e.target.value)}
              />
              <select
                className="select-input"
                value={section.type}
                onChange={(e) => updateSection(index, "type", e.target.value)}
              >
                <option value="">Tip Seç</option>
                <option value="para">Paragraf</option>
                <option value="img">Görsel</option>
                <option value="header">Başlık</option>
              </select>
              <select
                className="select-input"
                value={section.variant}
                onChange={(e) =>
                  updateSection(index, "variant", e.target.value)
                }
              >
                <option value="">Variant Seç</option>
                <option value="main">Main</option>
                <option value="sub">Sub</option>
                <option value="minor">Minor</option>
              </select>
            </div>
          ))}
          <PrimaryButton
            width="120px"
            height="30px"
            margin="8px 0"
            onClick={addSection}
            textContent="Section Ekle"
            backgroundColor="#181731"
            variant="fill"
            color="white"
          />
        </div>
        <div>
          <PrimaryButton
            width="120px"
            height="30px"
            margin="8px 0"
            onClick={addToFirestore}
            textContent="Haberi Ekle"
            backgroundColor="#181731"
            variant="fill"
            color="white"
          />
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default AddNewsPortal;
