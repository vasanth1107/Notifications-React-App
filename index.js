const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, name } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="iconUrl" src={iconUrl} />
      <p className="name">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-app-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="info-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="Information Message"
      />
      <Notification
        className="success-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Success Message"
      />
      <Notification
        className="warning-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Warning Message"
      />
      <Notification
        className="error-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
