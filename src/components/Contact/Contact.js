import React, { Component } from "react";
import Page from "../Page/Page";
import { pdfjs } from "react-pdf";
// import content from "../../content/content";
// import styleconfig from "../../styles/styleconfig";
import "./Contact.css";

export default class Contact extends Component {
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;
  }

  render() {
    return (
      <div>
        <Page>Contact</Page>
      </div>
    );
  }
}
