$(document).ready(function () {
    // 在这里添加你的代码

    // 让所有url 变成可点击的a 标签
    // 获取所有的文本节点
    const textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    // 遍历所有的文本节点
    for (let i = 0; i < textNodes.snapshotLength; i++) {
        const node = textNodes.snapshotItem(i);
        // 判断文本节点是否包含 URL
        if (node.parentElement.tagName.toLowerCase() !== "a" && node.nodeValue.match(/\bhttps?:\/\/\S+/gi)) {
            const url = node.nodeValue.match(/\bhttps?:\/\/\S+/gi)[0];
            const link = document.createElement("a");
            link.href = url;
            link.textContent = node.data;
            node.parentNode.replaceChild(link, node);
        }
    }


    const h1 = document.querySelector('#free-chatgpt-site-list');
    const a = document.createElement('a');
    a.textContent = h1.textContent;
    a.href = '/';
    h1.innerHTML = '';
    h1.appendChild(a);

});
