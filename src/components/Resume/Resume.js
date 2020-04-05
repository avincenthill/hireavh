import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import resume from "../../assets/pdf/avh_resume.pdf";
import { pdfjs } from "react-pdf";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import content from "../../content/content";
import "./Resume.css";

export default class Resume extends Component {
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <Document className="resume-document" file={resume}>
            <a
              className="resume-link"
              href={require("../../assets/pdf/avh_resume.pdf")}
              download={content.resume.downloadName}
            >
              <Page pageNumber={1} height={window.screen.height * 0.5} />
              <h3 className="resume-cta">{content.resume.cta}</h3>
            </a>
          </Document>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
