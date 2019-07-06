function getImg(id) {
  const result = document.getElementsByClassName('result')[0];
  result.innerHTML = '';

  const source = document.getElementById(id).value;
  const spanTag = source.match(/<span class="mdCMN09Image(?: .+?)?>.*?<\/span>/g);

  if (!spanTag) return;

  spanTag.forEach((span) => {
    const img = window.document.createElement('img');
    const url = span.match(/https.*?iPhone/)[0] + '/sticker_key@2x.png;compress=true';
    img.setAttribute('src', url);
    result.appendChild(img);
  });
  
}