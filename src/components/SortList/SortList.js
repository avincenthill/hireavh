import "./SortList.css";
import { NavList } from "components/Nav/Nav";
import Page from "components/Page/Page";
import React from "react";
import Sort from "components/Sort/Sort";
import content from "content/content";

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
