const Notification = (props) => {
  const { className, url, Text } = props;
  const containerClass = `notifications-container ${className}`;
  return (
    <div className={containerClass}>
      <img className="icon" src={url} />
      <p className="matter">{Text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list">
      <Notification
        className="primary"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        Text="Information Message"
      />
      <Notification
        className="success"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        Text="Success Message"
      />
      <Notification
        className="warning"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        Text="Warning Message"
      />
      <Notification
        className="danger"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        Text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
