class formSubmit extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <<style>
    </style>
    <form
    class="form"
    name="Queenpin-Contact-Form-Services-Page"
    method="POST"
    data-netlify="true"
    onSubmit="submit"
  >
    <p class="form-section">
      <input
        type="text"
        name="name"
        placeholder="Name *"
        onfocus="formSectionFocusFunc(0)"
        required
      />
    </p>

    <p class="form-section double-form-section">
      <input
        id="email-box"
        type="email"
        name="email"
        placeholder="Email *"
        onfocus="doubleformSectionFocusFunc(0)"
        required
      />
      <input
        id="phone-number-box"
        type="tel"
        name="phone number"
        placeholder="Phone Number"
        onfocus="doubleformSectionFocusFunc(1)"
      />
    </p>

    <p class="form-section">
      <input
        id="subject-box"
        type="text"
        name="subject"
        placeholder="Subject *"
        onfocus="formSectionFocusFunc(2)"
        required
      />
    </p>

    <p class="form-section">
      <textarea
        type="text"
        id="msg-box"
        name="message"
        placeholder="Message *"
        onfocus="formSectionFocusFunc(3)"
        required
      ></textarea>
    </p>

    <p>
      <button class="form-button" type="submit">SUBMIT</button>
    </p>
  </form>>
        `;
  }
}

customElements.define("formSubmit-component", formSubmit);
