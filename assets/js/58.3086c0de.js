(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{535:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"mysql-大小写敏感问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-大小写敏感问题"}},[s._v("#")]),s._v(" MySQL 大小写敏感问题")]),s._v(" "),a("h5",{attrs:{id:"不同系统下的mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同系统下的mysql"}},[s._v("#")]),s._v(" 不同系统下的MySQL")]),s._v(" "),a("p",[s._v("MySQL在Linux下数据库名、表名、列名、别名大小写规则是这样的：\n1、数据库名与表名是严格区分大小写的；\n2、表的别名是严格区分大小写的；\n3、列名与列的别名在所有的情况下均是忽略大小写的；\n4、变量名也是严格区分大小写的；\nMySQL在Windows下都不区分大小写。")]),s._v(" "),a("h5",{attrs:{id:"修改大小写敏感"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改大小写敏感"}},[s._v("#")]),s._v(" 修改大小写敏感")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 应在创建数据库的时候就设置好，否则就得单个表，单个字段进行修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看utf8mb4的校对规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- SHOW COLLATION LIKE 'utf8mb4\\_%';")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("aa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8mb4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8mb4_0900_as_cs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("每个字符集有一个默认校对规则,例如,utf8默认校对规则是utf8_general_ci.并存在校对规则命名约定:它们以其相关的字符集名开始,通常包括一个语言名,并且以_ci（大小写不敏感）,_cs（大小写敏感）或_bin（二元/大小写也敏感）结束")]),s._v(" "),a("h4",{attrs:{id:"mysql-的-str-to-date-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的-str-to-date-函数"}},[s._v("#")]),s._v(" MySQL 的 STR_TO_DATE 函数")]),s._v(" "),a("p",[a("strong",[s._v("奇奇怪怪的行为")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 错误日期 union all 时会变成 0000-00-00（正常日期不会），但是单独查询不报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" STR_TO_DATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2022-04-31'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" STR_TO_DATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2022-02-30'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" STR_TO_DATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2022-02-31'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/jhz8oV",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/15/jhz8oV.png",alt:"STR_TO_DATE函数问题"}}),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"mysql实现类似dense-rank-效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql实现类似dense-rank-效果"}},[s._v("#")]),s._v(" MySQL实现类似DENSE_RANK()效果")]),s._v(" "),a("p",[a("span",{staticStyle:{color:"red"}},[s._v("前提是子查询是按该字段排序过的，否则不能实现该结果")])]),s._v(" "),a("p",[s._v("数据")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("| weibo_id         | weight               | id   | RN   | PERT_OLD |\n| 4524098644993942 | 0.253893631002748370 |    1 | 18   |        1 |\n| 4524111164205859 | 0.093070061064090660 |    4 | 19   |        4 |\n| 4524138758532594 | 0.015839159909128677 |   16 | 20   |       16 |\n| test100          | 0.500000000000000000 |   -1 | 21   |       -1 |\n| test101          | 0.500000000000000000 |   -1 | 21   |       -1 |\n| test102          | 0.500000000000000000 |   -2 | 22   |       -2 |\n| test103          | 0.500000000000000000 |   -2 | 22   |       -2 |\n| test104          | 0.500000000000000000 |   -3 | 23   |       -3 |\n| test106          | 0.500000000000000000 |   -5 | 24   |       -5 |\n| test107          | 0.500000000000000000 |    1 | 25   |        1 |\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@RANK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" RN\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@RANK")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" PERT_OLD                                  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" topn T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@RANK")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" B \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 应该为")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@RANK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" RN\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@RANK")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" PERT_OLD                                  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" topn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@R")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@RANK")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" B \n")])])]),a("h4",{attrs:{id:"mysql创建用户-分配远程连接权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql创建用户-分配远程连接权限"}},[s._v("#")]),s._v(" MySQL创建用户，分配远程连接权限")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据库创建用户，时其可以远程访问（并且设置密码类型）：")]),s._v("\ncreate user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'banana'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified with mysql_native_password by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'banana'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果已经有用户，设置为可远程访问，可以使用：")]),s._v("\nalter user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'banana'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified with mysql_native_password by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'banana'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置可以读写刚创建的demo数据库：")]),s._v("\ngrant all privileges on leetcode.* to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'banana'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" with grant option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新缓存：")]),s._v("\nflush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"postgresql-和-mysql-的区别-mysql的一些缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-和-mysql-的区别-mysql的一些缺点"}},[s._v("#")]),s._v(" PostgreSQL 和 MySQL 的区别（MySQL的一些缺点）")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://m.php.cn/article/485152.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("postgresql和mysql的区别"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"full-join修改-兼容mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-join修改-兼容mysql"}},[s._v("#")]),s._v(" FULL JOIN修改（兼容MySQL）")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/m690192206/article/details/107819953",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql关于多个full join的处理方式"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);