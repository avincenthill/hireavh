import './Contact.css';
import { FaFileCode, FaGithub, FaLinkedinIn, FaRegCopy } from 'react-icons/fa';
import {
  GoCloudDownload,
  GoDeviceMobile,
  GoFile,
  GoMail,
} from 'react-icons/go';
import React, { Component } from 'react';
import ClipboardJS from 'clipboard';
import { IconContext } from 'react-icons';
import Page from 'components/Page/Page';
import content from 'content/content';
import styleconfig from 'styles/styleconfig';
import utils from 'utils/utils';

export default class Contact extends Component {
  componentDidMount() {
    const classes = [
      '.contact-button-email',
      '.contact-button-cell',
      '.contact-button-linkedin',
      '.contact-button-github',
    ];
    classes.forEach((className) => {
      new ClipboardJS(className);
    });
  }

  render() {
    return (
      <div className="contact-container">
        <Page>
          <IconContext.Provider
            value={{
              style: {
                ...styleconfig.icons.s,
                ...utils.getIconStyles('contact'),
              },
            }}
          >
            {/* name */}
            <h3 className="contact-title">{content.contact.name}</h3>

            {/* email */}
            <div className="contact button-hover-light">
              <a className="contact-a" href={`mailto:${content.contact.email}`}>
                <GoMail />
              </a>
              <a className="contact-a" href={`mailto:${content.contact.email}`}>
                <span>{content.contact.email}</span>
              </a>
              <button
                data-clipboard-text={content.contact.email}
                className="contact-button contact-button-linkedin"
              >
                <FaRegCopy />
              </button>
            </div>

            {/* linkedin */}
            <div className="contact button-hover-light">
              <a
                className="contact-a"
                href={`https://${content.contact.linkedin}`}
              >
                <FaLinkedinIn />
              </a>
              <a
                className="contact-a"
                href={`https://${content.contact.linkedin}`}
              >
                <span>{content.contact.linkedin}</span>
              </a>
              <button
                data-clipboard-text={content.contact.linkedin}
                className="contact-button contact-button-linkedin"
              >
                <FaRegCopy />
              </button>
            </div>

            {/* github */}
            <div className="contact button-hover-light">
              <a
                className="contact-a"
                href={`https://${content.contact.github}`}
              >
                <FaGithub />
              </a>
              <a
                className="contact-a"
                href={`https://${content.contact.github}`}
              >
                <span>{content.contact.github}</span>
              </a>
              <button
                data-clipboard-text={content.contact.github}
                className="contact-button contact-button-github"
              >
                <FaRegCopy />
              </button>
            </div>

            {/* resume */}
            <a
              className="contact button-hover-light contact-a"
              href={require('assets/pdf/avh_resume.pdf')}
              download={content.resume.downloadName}
            >
              <GoFile />
              <span>{content.contact.resume}</span>
              <button className="contact-button">
                <GoCloudDownload />
              </button>
            </a>
            <div>
              <br />
              <b>{content.contact.cta}</b>
              <br />
              <br />
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input
                  type="hidden"
                  name="business"
                  value={content.contact.email}
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </IconContext.Provider>
        </Page>
      </div>
    );
  }
}
