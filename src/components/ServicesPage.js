import React, { Component } from "react";
import "../index.scss";
import "../eotss-styles.css";
import "../css/chatbot-style.css";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import Services from "./Services";
import SearchServicesForm from "./SearchServicesForm";
import { ResultsHeading } from "@massds/mayflower-react";

class ServicesPage extends Component {
  render() {
    return (
      <>
        <div className="App">
          <MainHeader active="Services" />
          <main className="main-content">
            <section className="main-content--two">
              <div className="ma__page-header__content">
                <SearchServicesForm />
                <div style={{ height: "40px" }} />
                <ResultsHeading
                  numResults="1-4"
                  selectBox={{
                    id: "sort-select",
                    label: "Sort by:",
                    onChangeCallback: function noRefCheck() {},
                    options: [
                      {
                        text: "Relevance",
                        value: "relevance",
                      },
                      {
                        text: "Date",
                        value: "date",
                      },
                    ],
                    required: true,
                    selected: "Relevance",
                    stackLabel: false,
                  }}
                  totalResults="4"
                />
                <div style={{ height: "40px" }} />
                <Services history={this.props.history} />
              </div>
            </section>
          </main>
          <MainFooter />
        </div>
      </>
    );
  }
}

export default ServicesPage;
