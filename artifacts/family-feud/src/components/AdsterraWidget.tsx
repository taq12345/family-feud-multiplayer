const AD_HTML = `<!DOCTYPE html>
<html>
<head>
<style>*{margin:0;padding:0;overflow:hidden}body{background:transparent}</style>
</head>
<body>
<script async data-cfasync="false" src="https://pl29266201.profitablecpmratenetwork.com/272c9d71cc235c9077a71bec4e2c70cb/invoke.js"><\/script>
<div id="container-272c9d71cc235c9077a71bec4e2c70cb"></div>
</body>
</html>`;

export default function AdsterraWidget() {
  return (
    <iframe
      srcDoc={AD_HTML}
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      style={{ width: "100%", minHeight: "120px", border: "none", display: "block" }}
      title="Advertisement"
    />
  );
}
