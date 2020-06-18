import "./Contact.css";
import { FaFileCode, FaGithub, FaLinkedinIn, FaRegCopy } from "react-icons/fa";
import {
  GoCloudDownload,
  GoDeviceMobile,
  GoFile,
  GoMail,
} from "react-icons/go";
import React, { Component } from "react";
import ClipboardJS from "clipboard";
import { IconContext } from "react-icons";
import Page from "components/Page/Page";
import content from "content/content";
import headshot from "assets/img/headshot.png";
import styleconfig from "styles/styleconfig";
import utils from "utils/utils";

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
          <IconContext.Provider
            value={{
              style: {
                ...styleconfig.icons.s,
                ...utils.getIconStyles("contact"),
              },
            }}
          >
            {/* headshot */}
            <img className="contact-img" src={headshot} alt="headshot"></img>

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

            {/* cell */}
            <div className="contact button-hover-light">
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

            {/* site */}
            <div className="contact button-hover-light">
              <a className="contact-a" href={`${content.contact.site.path}`}>
                <FaFileCode />
              </a>
              <a className="contact-a" href={`${content.contact.site.path}`}>
                <span>{content.contact.site.displayUrl}</span>
              </a>
              <button
                data-clipboard-text={content.contact.site.path}
                className="contact-button contact-button-github"
              >
                <FaRegCopy />
              </button>
            </div>

            {/* resume */}
            <a
              className="contact button-hover-light contact-a"
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
