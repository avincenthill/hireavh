import React, { Component } from "react";
import Page from "../Page/Page";
import { Document, Page as PDFPage } from "react-pdf";
import resume from "../../assets/pdf/avh_resume.pdf";
import { pdfjs } from "react-pdf";
import content from "../../content/content";
import styleconfig from "../../styles/styleconfig";
import "./Resume.css";

export default class Resume extends Component {
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;
  }

  render() {
    return (
      <div>
        <Page>
          <div>
            <Document className="resume-document" file={resume}>
              <a
                className="resume-link"
                href={require("../../assets/pdf/avh_resume.pdf")}
                download={content.resume.downloadName}
              >
                <PDFPage pageNumber={1} height={styleconfig.resume.height} />
                <h3 className="resume-cta">{content.resume.cta}</h3>
              </a>
            </Document>
          </div>
        </Page>
      </div>
    );
  }
}
