// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var GatsbyLink = require("gatsby-link");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function make(to_, className, style, children) {
  return ReasonReact.wrapJsForReason(GatsbyLink.default, {
              to: to_,
              className: Js_null_undefined.from_opt(className),
              style: Js_null_undefined.from_opt(style)
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
