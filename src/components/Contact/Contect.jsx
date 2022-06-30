import "./Contact.scss";

const Contect = () => {
  return (
    <section className="section-contact">
            <div className="row">
                <div className="contact">
                    <div className="contact__form">

                        <form onsubmit="(e) => e.preventDefault(e)" action="mailto:dev.iProger@gmail.com" method="POST"
                            enctype="multipart/form-data" name="EmailForm" className="form">

                            <div className="mb-lg">
                                <h2 className="heading-secondary">Contact With Me</h2>
                            </div>

                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Your name" id="name" name="name"
                                    required />
                                <label for="name" className="form__label">Your Name</label>
                            </div>
                            <div className="form__group">
                                <input type="Email" className="form__input" placeholder="Your Email" id="email" name="email"
                                    required />
                                <label for="email" className="form__label">Your Email</label>
                            </div>
                            <div className="form__group mb-lg">
                                <div className="form__radio-group">
                                    <input type="radio" name="client" id="client" className="form__radio-input" />
                                    <label for="client" className="form__radio-label">
                                        <span className="form__radio-btn" />
                                        Human
                                    </label>
                                </div>
                                <div className="form__radio-group">
                                    <input type="radio" name="client" id="dev" className="form__radio-input" />
                                    <label for="dev" className="form__radio-label">
                                        <span className="form__radio-btn" />
                                        Developer
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--green btn--animated">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contect