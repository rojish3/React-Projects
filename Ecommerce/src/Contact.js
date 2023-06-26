import styled from "styled-components";

const Contact = () => {
  
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.3144174031247!2d85.27684799567282!3d27.678429961205335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb180b7d99319d%3A0x9ac37c3956bf8034!2sManka%20gvahila%20dhuku!5e0!3m2!1sen!2snp!4v1687793135270!5m2!1sen!2snp" 
        width="90%" 
        height="450" 
        style={{ border:0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" action="https://formspree.io/f/mqkvzqad" method="POST">
            <input 
              type="text" 
              placeholder="username" 
              name="username" 
              autoComplete="off" 
              required
              // value=""
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              // value=""
            />
            <textarea 
              name="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter your message"
              required
            ></textarea>
            <input
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
    const Wrapper = styled.section`
      padding: 9rem 0 5rem 0;
      text-align: center;
  
      .container {
        margin-top: 6rem;
  
        .contact-form {
          max-width: 50rem;
          margin: auto;
  
          .contact-inputs {
            display: flex;
            flex-direction: column;
            gap: 3rem;
  
            input[type="submit"] {
              cursor: pointer;
              transition: all 0.2s;
  
              &:hover {
                background-color: ${({ theme }) => theme.colors.white};
                border: 1px solid ${({ theme }) => theme.colors.btn};
                color: ${({ theme }) => theme.colors.btn};
                transform: scale(0.9);
              }
            }
          }
        }
      }
    `;

export default Contact;
