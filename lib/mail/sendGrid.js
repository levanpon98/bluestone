const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
class SendGrid {
  #data;

  constructor() {
    this.#data = {
      to: '',
      from: `BLUESTONE <${process.env.CUSTOMER_EMAIL}>`,
      subject: '',
      text: '',
      html: '',
    };
  }

  setReceiver(mail) {
    this.#data.to = mail;
    return this;
  }

  setSubject(subject) {
    this.#data.subject = subject;
    return this;
  }

  setText(text) {
    this.#data.text = text;
    return this;
  }

  setHtml(htmlString) {
    this.#data.html = htmlString;
    return this;
  }

  async send() {
    try {
      const mail = await sendGrid.send(this.#data);
      return mail;
    } catch (error) {
        console.log(error.response.body)
      throw new Error(error.message);
    }
  }
}

module.exports = SendGrid;
