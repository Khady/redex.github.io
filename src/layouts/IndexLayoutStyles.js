// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");

var root = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.flexDirection(TypedGlamor.column),
        /* :: */[
          TypedGlamor.minHeight(TypedGlamor.vh(100)),
          /* :: */[
            TypedGlamor.select("& p", /* :: */[
                  TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var header = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.margin(TypedGlamor.rem(1.45)),
      /* :: */[
        TypedGlamor.select("& > div", /* :: */[
              TypedGlamor.display(TypedGlamor.flex),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var title = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.alignItems(TypedGlamor.center),
        /* :: */[
          TypedGlamor.color(Theme.Color[/* primary */0]),
          /* :: */[
            TypedGlamor.margin(TypedGlamor.zero),
            /* :: */[
              TypedGlamor.fontVariant(TypedGlamor.smallCaps),
              /* :: */[
                TypedGlamor.fontSize(TypedGlamor.em(1.5)),
                /* :: */[
                  TypedGlamor.lineHeight(TypedGlamor.em(1.1)),
                  /* :: */[
                    TypedGlamor.select("&:hover > svg", /* :: */[
                          TypedGlamor.transforms(/* :: */[
                                TypedGlamor.rotate(TypedGlamor.deg(15)),
                                /* [] */0
                              ]),
                          /* :: */[
                            TypedGlamor.cursor(TypedGlamor.pointer),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var logo = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.height(TypedGlamor.em(1.5)),
      /* :: */[
        TypedGlamor.width(TypedGlamor.em(1.5)),
        /* :: */[
          TypedGlamor.unsafe("fill", Theme.Color[/* primary */0]),
          /* :: */[
            TypedGlamor.margin2(TypedGlamor.zero, TypedGlamor.em(1)),
            /* :: */[
              TypedGlamor.transitions(/* :: */[
                    /* tuple */[
                      TypedGlamor.AnimatableProperty[/* transform */101],
                      TypedGlamor.ms(100),
                      TypedGlamor.easeInOut,
                      TypedGlamor.ms(0)
                    ],
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

exports.root = root;
exports.header = header;
exports.title = title;
exports.logo = logo;
/* root Not a pure module */
