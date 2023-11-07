const GoogleMap = () => {
  const MapStyle = {
    width: "100%",
    height: "754px",
  };
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.630018265727!2d46.641161486929725!3d24.739579121304782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2f16a1c6709%3A0x6aa7ce59c063b9f5!2sAl%20Takhassousi%2C%20An%20Nakheel%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1698239121480!5m2!1sen!2seg"
        width={MapStyle.width}
        height={MapStyle.height}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default GoogleMap;
