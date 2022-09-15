[...document.getElementsByTagName("code")].forEach((item) => {
        code.addEventListener("onMouseOver", function (e) {
            item.style.position = "relative";
            let copyButton = document.createElement("button");
            copyButton.style.cssText =
                "border-radius: 5px;color:#fff;border-color:#fff;background-color:rgb(0,123,255); position:absolute;right:-8px;font-family: SFMono-Regular,Menlo,Monaco,Consolas,monospace;top:0px;cursor: pointer";
            copyButton.innerHTML = "复制";
            copyButton.onclick = function () {
                let copyData = item.firstChild.innerText;
                copyToClipboard(copyData);
                copyButton.innerHTML = "复制成功";
                setTimeout(function () {
                    copyButton.innerHTML = "复制";
                }, 1000);
            };
            item.appendChild(copyButton);
        });
        // js 复制到剪贴板
        function copyToClipboard(content) {
            if (window.clipboardData) {
                window.clipboardData.setData("text", content);
            } else {
                (function (content) {
                    document.oncopy = function (e) {
                        e.clipboardData.setData("text", content);
                        e.preventDefault();
                        document.oncopy = null;
                    };
                })(content);
                document.execCommand("Copy");
            }
        }
    });