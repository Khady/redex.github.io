webpackJsonp([0xb2ad09963d7a],{1011:function(e,n){e.exports={data:{package:{id:"bs-knex",score:.48983727203817223,name:"bs-knex",version:"0.2.1",description:"BuckleScript interface to the node 'knex' library",keywords:["knex","sql","database","node","bucklescript","reason"],license:"BSD-2-Clause",updated:"2017-12-19T04:44:23.862Z",stars:0,type:"published",quality:.4404500781630889,popularity:.022011268932841794,maintenance:.9999951556078599,readme:'<h1>bs-knex</h1>\n<p>BuckleScript utilities for working with the Node <a href="http://knexjs.org/">knex</a> library.</p>\n<h2>Example</h2>\n<pre><code class="language-reason">let knex = Knex.make({\n  "client": "pg",\n  "connection": {\n    "user": Config.Database.username,\n    "password": Config.Database.password,\n    "host": Config.Database.hostname,\n    "port": Config.Database.port,\n    "database": Config.Database.name\n  },\n  "pool": {\n    "min": Config.Database.poolMin,\n    "max": Config.Database.poolMax,\n    "idleTimeoutMillis": Config.Database.poolIdle\n  },\n  "acquireConnectionTimeout": 2000\n});\n\nlet users = [@bs] knex("users", Js.Nullable.null);\n\nusers\n  |> insert({\n        "user_name": user##userName,\n        "display_name": user##displayName,\n        "email": user##email\n      })\n  |> returning("*")\n  |> toPromise\n  |> then_(handleResponse(~error="Unable to add User."))\n  |> then_(pickFirst)\n  |> handleUniqueError(\n        ~name="users_email_unique",\n        ~message="That email address is already in use."\n      )\n  |> handleUniqueError(\n        ~name="users_user_name_unique",\n        ~message="That user name is already in use."\n      )\n  |> handleDbErrors;\n</code></pre>\n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-knex",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"packages/bs-knex"}},pathContext:{id:"bs-knex"}}}});
//# sourceMappingURL=path---packages-bs-knex-e9acaf0fe8229da15549.js.map