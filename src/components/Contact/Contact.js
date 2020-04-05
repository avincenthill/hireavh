import React, { Component } from "react";
import Page from "../Page/Page";
import { pdfjs } from "react-pdf";
import content from "../../content/content";
import styleconfig from "../../styles/styleconfig";
import { IconContext } from "react-icons";
import { GoMail, GoDeviceMobile, GoFile } from "react-icons/go";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Contact.css";

export default class Contact extends Component {
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;
  }

  render() {
    return (
      <div>
        <Page>
          <IconContext.Provider value={{ style: styleconfig.icons.contact }}>
            <h2 className="contact-title">{content.contact.name}</h2>
            <a href={`mailto:${content.contact.email}`} className="contact">
              <GoMail />
              <span>{content.contact.email}</span>
            </a>
            <a href={`tel:+${content.contact.cell}`} className="contact">
              <GoDeviceMobile />
              <span>{content.contact.cell}</span>
            </a>
            <a href={`https://${content.contact.linkedin}`} className="contact">
              <FaLinkedinIn />
              <span>{content.contact.linkedin}</span>
            </a>
            <a href={`https://${content.contact.github}`} className="contact">
              <FaGithub />
              <span>{content.contact.github}</span>
            </a>
            <a
              className="contact"
              href={require("../../assets/pdf/avh_resume.pdf")}
              download={content.resume.downloadName}
            >
              <GoFile />
              <span>{content.contact.resume}</span>
            </a>
          </IconContext.Provider>
        </Page>
      </div>
    );
  }
}
