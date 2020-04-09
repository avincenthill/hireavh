import React, { Component } from "react";
import Page from "components/Page/Page";
import content from "content/content";
import styleconfig from "styles/styleconfig";
import { IconContext } from "react-icons";
import {
  GoMail,
  GoDeviceMobile,
  GoFile,
  GoCloudDownload,
} from "react-icons/go";
import { FaLinkedinIn, FaGithub, FaRegCopy, FaFileCode } from "react-icons/fa";
import ClipboardJS from "clipboard";
import headshot from "assets/img/headshot.png";
import "./Contact.css";

export default class Contact extends Component {
  componentDidMount() {
    const classes = [
      ".contact-button-email",
      ".contact-button-cell",
      ".contact-button-linkedin",
      ".contact-button-github",
    ];
    classes.forEach((className) => {
      new ClipboardJS(className);
    });
  }

  render() {
    return (
      <div className="contact-container">
        <Page>
          <IconContext.Provider value={{ style: styleconfig.icons.contact }}>
            {/* headshot */}
            <img className="contact-img" src={headshot} alt="headshot"></img>

            {/* name */}
            <h3 className="contact-title">{content.contact.name}</h3>

            {/* email */}
            <div className="contact">
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

            {/* cell */}
            <div className="contact">
              <a className="contact-a" href={`tel:+1-${content.contact.cell}`}>
                <GoDeviceMobile />
              </a>
              <a className="contact-a" href={`tel:+1-${content.contact.cell}`}>
                <span>{content.contact.cell}</span>
              </a>
              <button
                data-clipboard-text={content.contact.cell}
                className="contact-button contact-button-linkedin"
              >
                <FaRegCopy />
              </button>
            </div>

            {/* linkedin */}
            <div className="contact">
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
            <div className="contact">
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

            {/* site */}
            <div className="contact">
              <a className="contact-a" href={`https://${content.contact.site}`}>
                <FaFileCode />
              </a>
              <a className="contact-a" href={`https://${content.contact.site}`}>
                <span>{content.contact.site}</span>
              </a>
              <button
                data-clipboard-text={content.contact.site}
                className="contact-button contact-button-github"
              >
                <FaRegCopy />
              </button>
            </div>

            {/* resume */}
            <a
              className="contact contact-a"
              href={require("assets/pdf/avh_resume.pdf")}
              download={content.resume.downloadName}
            >
              <GoFile />
              <span>{content.contact.resume}</span>
              <button className="contact-button">
                <GoCloudDownload />
              </button>
            </a>
          </IconContext.Provider>
        </Page>
      </div>
    );
  }
}
