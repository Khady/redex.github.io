// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Link        = require("../bindings/gatsby/link.js");
var $$Array     = require("bs-platform/lib/js/array.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var Vrroom      = require("vrroom/src/Vrroom.bs.js");
var Graphql     = require("../utils/Graphql.js");
var TopList     = require("../components/TopList.js");
var SearchBox   = require("../components/SearchBox.js");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var IndexStyles = require("../styles/IndexStyles.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function sort(groups) {
  var copy = groups.slice();
  $$Array.stable_sort((function (a, b) {
          return b.count - a.count | 0;
        }), copy);
  return copy;
}

var component = ReasonReact.statelessComponent("Index");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: IndexStyles.root
                }, ReasonReact.element(/* None */0, /* None */0, SearchBox.make(/* Some */[/* true */1], /* array */[])), React.createElement("div", {
                      className: IndexStyles.keywords
                    }, ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], sort(data.keywords.group), /* None */0, (function (keyword) {
                                return ReasonReact.element(/* Some */[keyword.name], /* None */0, Link.make("/keyword/" + keyword.name, /* None */0, /* None */0, /* array */[
                                                React.createElement("span", {
                                                      className: "label"
                                                    }, Vrroom.text(keyword.name)),
                                                React.createElement("span", {
                                                      className: "count"
                                                    }, Vrroom.text(Pervasives.string_of_int(keyword.count)))
                                              ]));
                              })))), React.createElement("div", {
                      className: IndexStyles.lists
                    }, React.createElement("div", undefined, React.createElement("h2", undefined, Vrroom.text("Recent releases")), ReasonReact.element(/* None */0, /* None */0, TopList.make(Graphql.getNodes(data.recentPackages), /* updated */500154939, /* array */[]))), React.createElement("div", undefined, React.createElement("h2", undefined, Vrroom.text("Most popular")), ReasonReact.element(/* None */0, /* None */0, TopList.make(Graphql.getNodes(data.popularPackages), /* stars */67859553, /* array */[])))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query IndexQuery {
      recentPackages: allPackages(filter: { type: { eq: "published" } }, limit: 10, sort: { fields: [updated], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      popularPackages: allPackages(limit: 10, sort: { fields: [popularity], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      keywords: allPackages {
        group(field: keywords) {
          name: fieldValue,
          count: totalCount
        }
      }
    }

    fragment package on Packages {
      name
      version
      description
      keywords
      license
      updated
      stars
      slug
    }
  `

;

var Styles = 0;

exports.Styles    = Styles;
exports.sort      = sort;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
