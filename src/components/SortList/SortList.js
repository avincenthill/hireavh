import React from "react";
import content from "content/content";
import Page from "components/Page/Page";
import Sort from "components/Sort/Sort";
import { NavList } from "components/Nav/Nav";
import "./SortList.css";

class SortList extends React.Component {
  renderSorts = () => {
    const { sorts } = content;
    return sorts.data.map((sort) => {
      return <Sort sort={sort} key={sort.id}></Sort>;
    });
  };

  render() {
    return (
      <div>
        <Page>
          <h2 className="sortlist-title">
            {content.sorts.emoji + " " + content.sorts.title}
          </h2>
          <p className="sortlist-description">{content.sorts.description}</p>
          {this.renderSorts()}
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default SortList;
