const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

const xssInfected =
  "<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41; <s<script>cript>alert(1)</s<script>cript>>";
const xssSanitize = DOMPurify.sanitize(xssInfected);

console.log("xss infected:", xssInfected);
console.log("xss sanitize:", xssSanitize);
