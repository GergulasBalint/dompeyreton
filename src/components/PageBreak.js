const PageBreak = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="pb-left-wrapper">
            <div className="page-break-left"></div>
          </div>
          <div className="pb-mid-wrapper">
            <div className="page-break-center"></div>
          </div>
          <div className="pb-right-wrapper">
            <div className="page-break-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBreak;
