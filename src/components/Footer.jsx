import React from 'react';

function Footer(){
  return (
    <footer>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 25px;
          color: white;
          background-color: grey;
          text-align: center;
          opacity: 0.8;
          box-shadow: 0 0 5px black;
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
      Footer Loaded
    </footer>
  );
}
export default Footer;
