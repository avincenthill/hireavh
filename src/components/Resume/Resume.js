import "./Resume.css";
import { Document, Page as PDFPage } from "react-pdf";
import React, { Component } from "react";
import Page from "components/Page/Page";
import content from "content/content";
import { pdfjs } from "react-pdf";
import resume from "assets/pdf/avh_resume.pdf";
import styleconfig from "styles/styleconfig";

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
                href={require("assets/pdf/avh_resume.pdf")}
                download={content.resume.downloadName}
              >
                <h3>{content.resume.cta}</h3>
                <PDFPage pageNumber={1} height={styleconfig.resume.height} />
                <h3>{content.resume.cta}</h3>
              </a>
            </Document>
          </div>
        </Page>
      </div>
    );
  }
}
