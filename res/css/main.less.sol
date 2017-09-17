@import "colors";


html {
    font-family: "Roboto", sans-serif;
    margin: 0 0.5ch;
}


body {
    /*font-size: large;*/
    background-color: @backgroundcolor;
    color: @foregroundcolor;
    max-width: 100%;
    margin: 0;
}


blockquote {
    border-bottom: 1px solid @foregroundcolor + 40;
    border-left: 4px solid @foregroundcolor + 40;
    padding-left: 8pt;
    font-size: 90%;
    &:before {
        color: @foregroundcolor + 40;
        font-family: FontAwesome;
        content:"\f10d";
    }
    &:after {
        color: @foregroundcolor + 40;
        font-family: FontAwesome;
        content:"\f10e";
    }
    p {
        display: inline;
    }
    i {
        padding-top: 2em;
        font-size: 80%;
        float: right;
    }

}

table {
    font-size: 100%;
    border-collapse: collapse;
    margin: .5em 0;
    border-top: 3px solid @foregroundcolor;
    border-bottom: 3px solid @foregroundcolor;
    td, th {
        padding: .3em;
        border: 1px solid @foregroundcolor;
    }
}

/*
th, td {
    border-bottom: 1px solid @base1;
    padding: .3em;
    margin: 2px;
}
*/
th {
    background: @backgroundcolor - 20;
}

tr:hover {background-color: @backgroundcolor - 10;}

.title  {
    text-align: center;
    margin-bottom: .2em;
}

.subtitle {
    text-align: center;
    font-weight: bold;
    font-size: smaller;
    margin-top:0;
}
#publish {
    font-size: 70%;
    color: @base1 - 20;
}
h1 {
    color: @orange;
}

h2, h3, h4 {
    color: @cyan;
    &:before {
        content: "• "; /*&bull;*/
    }
}

a {
    color: @yellow;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}

#banner {
    background-color: @base02;
    color: @base3;
    text-align: center;
    padding: 20px 0px;
    h1 {
        color: @base3;
    }
}

header {
    h1 {
        color: @backgroundcolor;
    }
}

nav {
    a {
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    }
}

code {
    background-color: @base3 - 20;
    padding: 0 5px;
}

.todo   {
    font-family: monospace;
    color: @base3;
    padding: 0 5px;
    background-color: @red;
}

.done   {
    font-family: monospace;
    color: @base3;
    padding: 0 5px;
    background-color: @green;
}

.priority {
    font-family: monospace; color: @orange;
}

.tag    {
    background-color: #eee; font-family: monospace;
    padding: 2px; font-size: 80%; font-weight: normal;
}

.timestamp {
    color: #bebebe;
}

.timestamp-kwd {
    color: #5f9ea0;
}

.org-right  {
    margin-left: auto; margin-right: 0px;  text-align: right;
}

.org-left   {
    margin-left: 0px;  margin-right: auto; text-align: left;
}

.org-center {
    margin-left: auto; margin-right: auto; text-align: center;
}

.underline {
    text-decoration: underline;
}

#postamble p, #preamble p {
    font-size: 90%; margin: .2em;
}

p.verse {
    margin-left: 3%;
}

.box {
    border: 1px solid @base2 - 30;
    background-color: @base2;
    /*box-shadow: 3px 3px 3px #eee;*/
    padding: 8pt;
    font-family: monospace;
    overflow: auto;
    margin: 1.2em;
}

.tip {
    .box;
    border-left: 4px solid @green;
    &:before {
        font-family: FontAwesome;
        color: @green;
        content:"\f0c6";
    }
}
.note {
    .box;
    border-left: 4px solid @blue;
    &:before {
        font-family: FontAwesome;
        color: @blue;
        content:"\f040";
    }
}
.warning {
    .box;
    border-left: 4px solid @yellow;
    &:before {
        font-family: FontAwesome;
        color: @yellow;
        content:"\f071";
    }
}
.error {
    .box;
    border-left: 4px solid @red;
    &:before {
        font-family: FontAwesome;
        color: @red;
        content:"\f057";
    }
}

pre {
    .box;
}

pre.src {
    position: relative;
    /*overflow: visible;*/
    padding-top: 1.2em;
    .linenr {
        font-weight: bold;
    }
}

pre.src:before {
    display: none;
    position: absolute;
    background-color: @yellow;
    color: @base3;
    top: -5px;
    right: 10px;
    padding: 3px;
    border: 1px solid black;
}

pre.src:hover:before {
    display: inline;
}

/* Languages per Org manual */
pre.src-asymptote:before { content: 'Asymptote'; }
pre.src-awk:before { content: 'Awk'; }
pre.src-C:before { content: 'C'; }
/* pre.src-C++ doesn't work in CSS */
pre.src-clojure:before { content: 'Clojure'; }
pre.src-css:before { content: 'CSS'; }
pre.src-D:before { content: 'D'; }
pre.src-ditaa:before { content: 'ditaa'; }
pre.src-dot:before { content: 'Graphviz'; }
pre.src-calc:before { content: 'Emacs Calc'; }
pre.src-emacs-lisp:before { content: 'Emacs Lisp'; }
pre.src-fortran:before { content: 'Fortran'; }
pre.src-gnuplot:before { content: 'gnuplot'; }
pre.src-haskell:before { content: 'Haskell'; }
pre.src-java:before { content: 'Java'; }
pre.src-js:before { content: 'Javascript'; }
pre.src-latex:before { content: 'LaTeX'; }
pre.src-ledger:before { content: 'Ledger'; }
pre.src-lisp:before { content: 'Lisp'; }
pre.src-lilypond:before { content: 'Lilypond'; }
pre.src-lua:before { content: 'Lua'; }
pre.src-matlab:before { content: 'MATLAB'; }
pre.src-mscgen:before { content: 'Mscgen'; }
pre.src-ocaml:before { content: 'Objective Caml'; }
pre.src-octave:before { content: 'Octave'; }
pre.src-org:before { content: 'Org mode'; }
pre.src-oz:before { content: 'OZ'; }
pre.src-plantuml:before { content: 'Plantuml'; }
pre.src-processing:before { content: 'Processing.js'; }
pre.src-python:before { content: 'Python'; }
pre.src-R:before { content: 'R'; }
pre.src-red:before { content: 'Red'; }
pre.src-ruby:before { content: 'Ruby'; }
pre.src-sass:before { content: 'Sass'; }
pre.src-scheme:before { content: 'Scheme'; }
pre.src-screen:before { content: 'Gnu Screen'; }
pre.src-sed:before { content: 'Sed'; }
pre.src-sh:before { content: 'shell'; }
pre.src-sql:before { content: 'SQL'; }
pre.src-sqlite:before { content: 'SQLite'; }
/* additional languages in org.el's org-babel-load-languages alist */
pre.src-forth:before { content: 'Forth'; }
pre.src-io:before { content: 'IO'; }
pre.src-J:before { content: 'J'; }
pre.src-makefile:before { content: 'Makefile'; }
pre.src-maxima:before { content: 'Maxima'; }
pre.src-perl:before { content: 'Perl'; }
pre.src-picolisp:before { content: 'Pico Lisp'; }
pre.src-scala:before { content: 'Scala'; }
pre.src-shell:before { content: 'Shell Script'; }
pre.src-ebnf2ps:before { content: 'ebfn2ps'; }
/* additional language identifiers per "defun org-babel-execute"
       in ob-*.el */
pre.src-cpp:before  { content: 'C++'; }
pre.src-abc:before  { content: 'ABC'; }
pre.src-coq:before  { content: 'Coq'; }
pre.src-groovy:before  { content: 'Groovy'; }
/* additional language identifiers from org-babel-shell-names in
     ob-shell.el: ob-shell is the only babel language using a lambda to put
     the execution function name together. */
pre.src-bash:before  { content: 'bash'; }
pre.src-csh:before  { content: 'csh'; }
pre.src-ash:before  { content: 'ash'; }
pre.src-dash:before  { content: 'dash'; }
pre.src-ksh:before  { content: 'ksh'; }
pre.src-mksh:before  { content: 'mksh'; }
pre.src-posh:before  { content: 'posh'; }
/* Additional Emacs modes also supported by the LaTeX listings package */
pre.src-ada:before { content: 'Ada'; }
pre.src-asm:before { content: 'Assembler'; }
pre.src-caml:before { content: 'Caml'; }
pre.src-delphi:before { content: 'Delphi'; }
pre.src-html:before { content: 'HTML'; }
pre.src-idl:before { content: 'IDL'; }
pre.src-mercury:before { content: 'Mercury'; }
pre.src-metapost:before { content: 'MetaPost'; }
pre.src-modula-2:before { content: 'Modula-2'; }
pre.src-pascal:before { content: 'Pascal'; }
pre.src-ps:before { content: 'PostScript'; }
pre.src-prolog:before { content: 'Prolog'; }
pre.src-simula:before { content: 'Simula'; }
pre.src-tcl:before { content: 'tcl'; }
pre.src-tex:before { content: 'TeX'; }
pre.src-plain-tex:before { content: 'Plain TeX'; }
pre.src-verilog:before { content: 'Verilog'; }
pre.src-vhdl:before { content: 'VHDL'; }
pre.src-xml:before { content: 'XML'; }
pre.src-nxml:before { content: 'XML'; }
/* add a generic configuration mode; LaTeX export needs an additional
     (add-to-list 'org-latex-listings-langs '(conf " ")) in .emacs */
pre.src-conf:before { content: 'Configuration File'; }

/*
table {
    border-collapse:collapse;
}

caption.t-above {
    caption-side: top;
}

caption.t-bottom {
    caption-side: bottom;
}

td, th {
    padding: 0 0.5ch;
    vertical-align:top;
}

th.org-right  {
    text-align: center;
}

th.org-left   {
    text-align: center;
}

th.org-center {
    text-align: center;
}

td.org-right  {
    text-align: right;
}

td.org-left   {
    text-align: left;
}

td.org-center {
    text-align: center;
}

*/
dt {
    font-weight: bold;
}

.footpara {
    display: inline;
}

.figure {
    padding: 1em;
}

.figure p {
    text-size: 50%;
    text-align: center;
}

.figure-number {
    font-weight: bold;
}
.table-number{
    font-weight: bold;
}


.inlinetask {
    padding: 10px;
    border: 2px solid gray;
    margin: 10px;
    background: #ffffcc;

}

#org-div-home-and-up
{
    text-align: right; font-size: 70%; white-space: nowrap;
}

textarea {
    overflow-x: auto;
}

.linenr {
    font-size: smaller
}

.code-highlighted {
    background-color: #ffff00;
}

.org-info-js_info-navigation {
    border-style: none;
}

#org-info-js_console-label
{
    font-size: 10px; font-weight: bold; white-space: nowrap;
}

.org-info-js_search-highlight
{
    background-color: #ffff00; color: #000000; font-weight: bold;
}

.org-svg {
    width: 90%;
}


.abstract {
    padding: 0 10%;
    border-top: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
}

nav ul {
    padding: 0;
    list-style-type: none;
}

nav ul li {
    display: inline;
    padding-left: 1ch;
    white-space: nowrap;
}

nav ul li:first-child {
    padding-left: 0;
}

img {
    max-width: 100%;
}

/*
td + td, th + th {
    border-left: 0.5px solid @base1;
}

thead + tbody, tbody + tbody {
    border-top: 1px solid @base1;
}
th {
    background-color: @base3 - 30;
}
tr:hover {
    background-color: @base3 - 15;
}
caption.t-above {
    padding: 0.5ch;
}
*/

/* TOC inspired by http://jashkenas.github.com/coffee-script */
#table-of-contents {
  font-size: 10pt;
  position: fixed;
  right: 5px;
  top: 20px;
  background: white;
  line-height: 12pt;
  text-align: right;
  z-index: 1000;
  box-shadow: 0 0 1em #777777;
  -webkit-box-shadow: 0 0 1em #777777;
  -moz-box-shadow: 0 0 1em #777777;
  max-height: 80%;
  overflow: auto;
}
#table-of-contents h2 {
  margin: 6px 4px;
  font-size: 13pt;
  max-width: 9em;
  border: 0;
  font-weight: normal;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.05em;
  padding-bottom: 0.05em;
}
#table-of-contents #text-table-of-contents {
  display: none;
  text-align: left;
}
#table-of-contents:hover #text-table-of-contents {
  display: block;
  padding: 0.5em;
  margin-top: -1.5em;
}


#postamble {
    border-top: 1px dashed @base1;
    font-size: smaller;
    color: #888;
}

#footnotes {
    /*border-top: 1px dashed @base1;*/
    font-size: 60%;
    &:before {
        /*color: @base2 - 30;*/
        /*margin-left: 2em;*/
        background-color: @base2;
        border: 1px solid @base1 - 20;
        border-radius: 2px;
        padding: 2px 20px 2px 10px;
        font-family: FontAwesome;
        content:"\f040  Notas";
    }
}

.footdef  {
    margin-left: 2em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
}


/* --- */

