/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52883106bc6bbb099e1fce423aefe446"
  },
  {
    "url": "addition/latex.html",
    "revision": "3ec6b171130b20dba10379c86da60d4f"
  },
  {
    "url": "addition/markdown.html",
    "revision": "a9f240b211cffa9cdff7bcad97a31138"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "526c8851dd0cfbead3a9bd64e25cc334"
  },
  {
    "url": "addition/论文.html",
    "revision": "b8d47fe540591b037e63a3e6cbb7b813"
  },
  {
    "url": "assets/css/0.styles.cc3511f1.css",
    "revision": "feef9c59e66649992d120c509d4f8b04"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.29cfd664.js",
    "revision": "bfec339500a21d8e8960fffcd4f5f769"
  },
  {
    "url": "assets/js/11.6af3e845.js",
    "revision": "393a020cfb497f283d3829e6375dcc4d"
  },
  {
    "url": "assets/js/12.fc606c1f.js",
    "revision": "0ceda6f60a616d082c68196db896ca1b"
  },
  {
    "url": "assets/js/13.da6f7b9d.js",
    "revision": "b5bc4c1569dc21522f858ec821da2bb6"
  },
  {
    "url": "assets/js/14.51f6614a.js",
    "revision": "c0226e7228a27ad04bdf72ac279f42ea"
  },
  {
    "url": "assets/js/15.cebed5bc.js",
    "revision": "d4d08c606e67677defe9e50457ec7802"
  },
  {
    "url": "assets/js/16.1698229b.js",
    "revision": "988a4db180b3e69ac768242a182b611f"
  },
  {
    "url": "assets/js/17.6850c45b.js",
    "revision": "b28a61ddd3d40858f96a386d2eb4f3e4"
  },
  {
    "url": "assets/js/18.e7de597b.js",
    "revision": "506dc32ee024ccfc2abae1ac4aa9a5bf"
  },
  {
    "url": "assets/js/19.de8b97d5.js",
    "revision": "6b75806b35cc3bfe5006c304cc027531"
  },
  {
    "url": "assets/js/2.9ce38e7a.js",
    "revision": "58064136564e5f31426c5d2830339754"
  },
  {
    "url": "assets/js/20.4f31f3de.js",
    "revision": "73edd55a8aa138384667208814aa848a"
  },
  {
    "url": "assets/js/21.05908e5b.js",
    "revision": "c3d22fd88199ff5dd100de52cd582a51"
  },
  {
    "url": "assets/js/22.d6e87ed0.js",
    "revision": "8244fb6f9950530f549c5b709789a94e"
  },
  {
    "url": "assets/js/23.d45da811.js",
    "revision": "491c38603e7def99871391f9ac1334b0"
  },
  {
    "url": "assets/js/24.17f7c0e2.js",
    "revision": "baba40cea6750e14648282f8e4de7bcf"
  },
  {
    "url": "assets/js/25.145ff0ad.js",
    "revision": "5b85f380eeff3acc0084d08086994d6a"
  },
  {
    "url": "assets/js/26.48f0e90d.js",
    "revision": "3fa70f700d076968d9cedd9b9a5be864"
  },
  {
    "url": "assets/js/27.0f997655.js",
    "revision": "0a21e88d186b1249ccf61578dc82d747"
  },
  {
    "url": "assets/js/28.5995860d.js",
    "revision": "f27d5fb3e55a8f684e2594632453ddb8"
  },
  {
    "url": "assets/js/29.103f152e.js",
    "revision": "8e4e460f0ddd9d19c18ffb3a982bcf1c"
  },
  {
    "url": "assets/js/3.a3de281d.js",
    "revision": "19c9233bf816236db14b41680cc8cb2b"
  },
  {
    "url": "assets/js/30.6ed053ad.js",
    "revision": "95bd67466a75e61f6e18923cce8a6963"
  },
  {
    "url": "assets/js/31.9765a601.js",
    "revision": "88da718864013a12a7177249148593f6"
  },
  {
    "url": "assets/js/32.f0ea1dda.js",
    "revision": "b0e490a8a2f95eb57b937fc5a93a0111"
  },
  {
    "url": "assets/js/33.2d5858ee.js",
    "revision": "c77e6ecd4aa9fac64d5708e488e298ba"
  },
  {
    "url": "assets/js/34.3fa46443.js",
    "revision": "3410cdccd96a91226615b4ad266a78f9"
  },
  {
    "url": "assets/js/35.5736c874.js",
    "revision": "0aec92ad10d9710845eaabdd595df692"
  },
  {
    "url": "assets/js/36.673acdbd.js",
    "revision": "200cc812ccba89765b4190757f410cde"
  },
  {
    "url": "assets/js/37.8eb67722.js",
    "revision": "4a83fe25d4118b165a11046a1060a9bb"
  },
  {
    "url": "assets/js/38.43eaf514.js",
    "revision": "16fa5ec3946b8dc00bfdd5f7fa29f5dc"
  },
  {
    "url": "assets/js/39.bba3b7db.js",
    "revision": "9695c9a6f3878e9e80815fe64804d967"
  },
  {
    "url": "assets/js/4.bea149a6.js",
    "revision": "3d034c15b084ab061ff2f5fad25c8618"
  },
  {
    "url": "assets/js/40.c36e887d.js",
    "revision": "b6d6063983289b37627e4bc7198b0058"
  },
  {
    "url": "assets/js/41.8f00702e.js",
    "revision": "e5fbf97082ab28d7bd3a0ce5cf91a80b"
  },
  {
    "url": "assets/js/42.a4e55caf.js",
    "revision": "fab9be0a3b43d27b340fc820227b289a"
  },
  {
    "url": "assets/js/43.71db9a0b.js",
    "revision": "a8d5820050890b2a42c5769260bf13fc"
  },
  {
    "url": "assets/js/44.86191c7c.js",
    "revision": "e1893b8535b83f6eb5f5bb70c61c9e43"
  },
  {
    "url": "assets/js/45.5fce8d08.js",
    "revision": "124b7c8f82cd5670bc00ae60e3a59185"
  },
  {
    "url": "assets/js/46.d8689b11.js",
    "revision": "29d7f74471b5e86bbaa9706fcb9901dd"
  },
  {
    "url": "assets/js/47.32fb444c.js",
    "revision": "e66acc0e38cb4f0d0ac04608e462deaf"
  },
  {
    "url": "assets/js/48.fd9456ea.js",
    "revision": "c6ab17218ed0ce47274b400c1c8c7345"
  },
  {
    "url": "assets/js/49.05a125bc.js",
    "revision": "2ca6cbedb234d561d9e673f756ec69b8"
  },
  {
    "url": "assets/js/5.414d2eb4.js",
    "revision": "0f75751c0927b3f8847d07e283bf54ae"
  },
  {
    "url": "assets/js/50.68ec5a64.js",
    "revision": "8cacd91107a85ab6c3eb51b0d690e686"
  },
  {
    "url": "assets/js/51.e6427b49.js",
    "revision": "b5cbaae88a96bc3d2ddc4f622e1ac470"
  },
  {
    "url": "assets/js/52.8340a0a8.js",
    "revision": "742929dee191098616a45430bf334057"
  },
  {
    "url": "assets/js/53.8286254b.js",
    "revision": "b7aec38cc6574a354b4e9c0c1a900c08"
  },
  {
    "url": "assets/js/6.4732b70d.js",
    "revision": "b3864532eeab5569455c4783909ea78d"
  },
  {
    "url": "assets/js/7.525e8cc4.js",
    "revision": "b66ab132a9386d4e892b08765496d2c4"
  },
  {
    "url": "assets/js/8.05c8882d.js",
    "revision": "9a324c1eae0bf387c4d9b39ddc708fdf"
  },
  {
    "url": "assets/js/9.c2d945ad.js",
    "revision": "77de383c4926eb62fd41ca44e1494b21"
  },
  {
    "url": "assets/js/app.3a179c08.js",
    "revision": "2b673856d14f888b41b54e9c3c1ba380"
  },
  {
    "url": "c/Hello world.html",
    "revision": "0a56c32ac4082199de0c72fc0201270a"
  },
  {
    "url": "c/位运算.html",
    "revision": "4b0f87ab5dbe6769aee0728bbed9440f"
  },
  {
    "url": "c/全局变量.html",
    "revision": "33e866cef7d1096927d1aec85c9dbcac"
  },
  {
    "url": "c/函数.html",
    "revision": "0ec2fddf06da8490dab79457a3a1f408"
  },
  {
    "url": "c/判断.html",
    "revision": "7bc7a49b3ef986d89dfc6435074898ec"
  },
  {
    "url": "c/参考.html",
    "revision": "c8a0f75ee68d16c3392db74686688a2c"
  },
  {
    "url": "c/变量.html",
    "revision": "1a9a5743a21e44f8770a1f11eb316fd9"
  },
  {
    "url": "c/字符串.html",
    "revision": "4f9127ad9c3712fab5800b03ff2fb10e"
  },
  {
    "url": "c/实例.html",
    "revision": "9302bb6acd0b56bb586f3390ab2e7471"
  },
  {
    "url": "c/常量.html",
    "revision": "e9c851f31ee04ec6ab97c1f0e00fc306"
  },
  {
    "url": "c/循环.html",
    "revision": "ff0e8f61a981065b81a124e8d8851855"
  },
  {
    "url": "c/指针.html",
    "revision": "346b5961b8a0982d0b6932837550f428"
  },
  {
    "url": "c/控制循环语句.html",
    "revision": "2fd0693dcd87cced1f2c14ec4245e7c4"
  },
  {
    "url": "c/数据类型.html",
    "revision": "9fa7de1dac71cd20d969786aaf5ffed8"
  },
  {
    "url": "c/数组.html",
    "revision": "b61c571a9a7f57a102847e63fb979e06"
  },
  {
    "url": "c/文件.html",
    "revision": "83b9511d75631e41f5fa955e320bf8e7"
  },
  {
    "url": "c/条件表达式.html",
    "revision": "4770afad898e70a85116592b61d0f3be"
  },
  {
    "url": "c/枚举.html",
    "revision": "b4ce606edb395a91b4f3c495df038762"
  },
  {
    "url": "c/程序结构.html",
    "revision": "c4453df642b1eb60ac79776207b2a619"
  },
  {
    "url": "c/类型转换.html",
    "revision": "52aedf99bb7529dc0d91e219f76c53ad"
  },
  {
    "url": "c/结构.html",
    "revision": "df767ac9bdb62ba3674b30d30b4464ca"
  },
  {
    "url": "c/编译预处理.html",
    "revision": "0b9481167b5057d807deffe995f8f8cc"
  },
  {
    "url": "c/输入与输出.html",
    "revision": "5e4ac9d677b122dbbb7468b73fcf6046"
  },
  {
    "url": "c/运算.html",
    "revision": "1b5a817c6f434e1ac05d053897bf5f9e"
  },
  {
    "url": "c/逃逸字符.html",
    "revision": "8142b01196cce048b1c2cb40fe262e87"
  },
  {
    "url": "c/逻辑运算.html",
    "revision": "912114f869211b3ffabcc321ed43a567"
  },
  {
    "url": "css/语法.html",
    "revision": "ada376b98e8dc9992d0ead5782eb0aa3"
  },
  {
    "url": "html/实例.html",
    "revision": "b3ae1df43344f1a797eb88cd14fffe30"
  },
  {
    "url": "html/网页基本格式.html",
    "revision": "7f2765aaff70ff9cf8a995846f674cc0"
  },
  {
    "url": "img/logo.png",
    "revision": "c89844f2aee46b3530d38e552691b75c"
  },
  {
    "url": "img/notes.png",
    "revision": "176ee74f392ae2227974b11f80bbb8a6"
  },
  {
    "url": "img/计算机组成原理/冯诺依曼结构图.svg",
    "revision": "d4c0d14e88ab991aa66dd26a4f487d2b"
  },
  {
    "url": "img/计算机组成原理/指令的格式.svg",
    "revision": "4f7e9d4e523ec598f6d374c27e3f380b"
  },
  {
    "url": "img/计算机组成原理/简单指令系统示例.svg",
    "revision": "1f568350d630837a8575d85c30034998"
  },
  {
    "url": "img/计算机组成原理/计算机执行指令的过程.svg",
    "revision": "1534b8a2a6e0d812035830007a53c164"
  },
  {
    "url": "img/计算机组成原理/计算机运行过程.svg",
    "revision": "5394f42c9cdef3e6dd0872f96ad7df6d"
  },
  {
    "url": "img/计算机组成原理/输入输出示意图.svg",
    "revision": "c57103fb80fc751fc7fdb997e92a59f7"
  },
  {
    "url": "img/计算机组成原理/运算任务示例.svg",
    "revision": "74ef7fa4cb133842a9658432f4024802"
  },
  {
    "url": "img/计算机组成原理/运算器的结构.svg",
    "revision": "a0c2b4c16ef3392b44988f17d2423c72"
  },
  {
    "url": "index.html",
    "revision": "5729b9b413fceb50b6bf7573b16abcf4"
  },
  {
    "url": "javascript/JavaScript的使用.html",
    "revision": "b8ea5d65364fba08f7e554d497268270"
  },
  {
    "url": "javascript/json.html",
    "revision": "4cd6732ad078752cba26dc7e31487ca5"
  },
  {
    "url": "javascript/pwa.html",
    "revision": "c9a6bcbaf2a62718ae0cbc50f257964b"
  },
  {
    "url": "javascript/参考.html",
    "revision": "a04c641dc5c5239e7366cd24cd988cbb"
  },
  {
    "url": "javascript/实例.html",
    "revision": "f5c0e46cbc394fb5198ee228cb89acbb"
  },
  {
    "url": "javascript/浏览器扩展开发.html",
    "revision": "3c4e81f2c667fbef7b9dd646d02a5649"
  },
  {
    "url": "linux/安装程序.html",
    "revision": "e52db79bbebf881215186a0b186346e6"
  },
  {
    "url": "start.html",
    "revision": "35027211b0814ba6e083c484df043900"
  },
  {
    "url": "typescript/安装TypeScript.html",
    "revision": "d40adf439afc1f6c766b01ecd88a865b"
  },
  {
    "url": "计算机组成原理/基本结构.html",
    "revision": "fe0d7c9bfda3b9997ef5cb63a2642ac7"
  },
  {
    "url": "计算机组成原理/指令系统.html",
    "revision": "568728de52f07af03d7debb44e04fd6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
