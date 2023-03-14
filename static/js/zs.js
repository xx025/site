$(document).ready(function () {
    // 在这里添加你的代码
    var adContainer = document.createElement('div');
    adContainer.style.position = 'fixed';
    adContainer.style.bottom = '0';
    adContainer.style.right = '0'
    adContainer.style.width = '20%';
    adContainer.style.backgroundColor = '#f1f1f1';
    adContainer.style.borderTop = '1px solid #ccc';
    document.body.appendChild(adContainer);


    let zsurl = '/static/imgs/wxds.png'
    var adLink = document.createElement('a');
    adLink.href = zsurl;
    adLink.target = '_blank';
    adContainer.appendChild(adLink);

    var adImage = document.createElement('img');
    adImage.src = zsurl;
    adImage.alt = 'Advertisement';
    adImage.style.width = '100%';
    adLink.appendChild(adImage);

    var collapseButton = document.createElement('button');
    collapseButton.innerText = '-';
    collapseButton.style.position = 'absolute';
    collapseButton.style.top = '0';
    collapseButton.style.left = '0';
    adContainer.appendChild(collapseButton);

    var isCollapsed = false;

    collapseButton.addEventListener('click', function () {
        isCollapsed = !isCollapsed;
        if (isCollapsed) {
            adContainer.style.height = '40px'; // 折叠起来，高度为 40px
            collapseButton.innerText = '+';
        } else {
            adContainer.style.height = 'auto'; // 展开，高度为页面高度的 20%
            collapseButton.innerText = '-';
        }
    });


});
