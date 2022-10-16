import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, theme }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs.length ? (
        docs.map((doc) => (
          <>
            <motion.div
              className="img-wrap"
              style={imgLoaded ? { border: `2px solid #F87171` } : {}}
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setSelectedImg(doc.url);
              }}
            >
              <motion.img
                onLoad={() => setImgLoaded(true)}
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, height: 10, width: 10 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </>
        ))
      ) : (
        <>
          <motion.div className="img-wrap">
            <motion.img className="skeleton" />
          </motion.div>
          <motion.div className="img-wrap">
            <motion.img className="skeleton" />
          </motion.div>
          <motion.div className="img-wrap">
            <motion.img className="skeleton" />
          </motion.div>
          <motion.div className="img-wrap">
            <motion.img className="skeleton" />
          </motion.div>
          <motion.div className="img-wrap">
            <motion.img className="skeleton" />
          </motion.div>
          <motion.div className="img-wrap">
            <motion.img className="skeleton" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ImageGrid;
