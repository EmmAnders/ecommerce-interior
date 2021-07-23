<template>
  <div class="site-container">
    <Header />
    <div class="main">
      <router-view class="pages" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  color: #fafafa;
}

body {
  line-height: 1;
  background-color: #262626;
  font-family: $font-primary;
}

ol,
ul,
li,
a {
  list-style: none;
  text-decoration: none;
}

.site-container {
  padding: 1rem;
}

.main {
  display: flex;
}

.pages {
  width: 100%;
  margin-left: 10vw;

  @include desktop {
    margin-left: 20vw;
  }
}
</style>
