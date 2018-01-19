// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry          = require("bs-platform/lib/js/curry.js");
var React          = require("react");
var Config         = require("../Config.js");
var Helmet         = require("../bindings/gatsby/helmet.js");
var Vrroom         = require("vrroom/src/Vrroom.bs.js");
var Graphql        = require("../utils/Graphql.js");
var ReasonReact    = require("reason-react/src/ReasonReact.js");
var PackageSummary = require("../components/PackageSummary.js");

var component = ReasonReact.statelessComponent("Packages");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate("Packages")], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("h1", undefined, Vrroom.Helpers[/* text */0]("Packages")), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], Graphql.getNodes(data.packages), /* None */0, (function ($$package) {
                            return ReasonReact.element(/* Some */[$$package.id], /* None */0, PackageSummary.make($$package, /* array */[]));
                          }))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query PackagesQuery {
      packages: allPackages(sort: { fields: [name] }) {
        edges {
          node {
            type
            id
            name
            version
            packageType
            condition
            platforms
            description
            keywords
            license
            updated
            stars
            score
            quality
            popularity
            maintenance
            slug
          }
        }
      }
    }
  `

;

var Control = 0;

exports.Control   = Control;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
