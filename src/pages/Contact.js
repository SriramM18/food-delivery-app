import contact from "../assets/svg/contact.svg";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="heading-text">Contact us</h2>

      <p className="subheading-text">
        Find the best food delivery service with Go Foods!
      </p>
      <p className="paragraph">
        A food delivery application is nothing without a contact us section that
        is available 24 * 7. This is because faster delivery and hassle free
        ordering experience for the customers are of utmost importance. The
        contact us section must be easily accessible and should have all the
        necessary information that the customer might need.
      </p>
      <img className="display-img-bg mtop20" src={contact} />
    </div>
  );
};

export default Contact;
