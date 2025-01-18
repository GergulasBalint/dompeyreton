import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.9046495445327!2d-0.2922630017970249!3d44.972807426782076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd554bbe394c5fff%3A0x6141cd8626c6e5ec!2sCh%C3%A2teau%20Vieux%20Moulin%20-%20Dom%20Peyreton%20g%C3%AEtes%20de%20prestige.!5e1!3m2!1sen!2suk!4v1677786972071!5m2!1sen!2suk"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};
export { AddressMap };
