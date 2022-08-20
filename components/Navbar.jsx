import styles from '../styles/Navbar.module.css'
import Image from 'Next/image'
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#modal");

function Navbar() {

    const [modalType, setModalType] = useState(null)

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            margin: "0",
            
        },
    };

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
   
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
      });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }));
    };

    console.log(formData)

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            console.log("Passwords do not match");
        } else {
            const userData = {
                name,
                email,
                password,
            };
        }
    }


  return (
    <div className={styles.navContainer}>
      <div className="logoContainer">
        <Image src="/mockLogo.svg" width={140} height={140} alt="mockLogo" />
      </div>
      <div className={styles.buttonWrapper}>
        <p className={styles.navButton} onClick={openModal}>
          Sign-up
        </p>
        <p className={styles.navButton} onClick={openModal}>
          Login
        </p>
        <div id="modal">
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <section className={styles.section}>
                <form onSubmit={onSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={onChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      value={password2}
                      onChange={onChange}
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <button className={styles.btn}>Submit</button>
                  </div>
                </form>
              </section>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar