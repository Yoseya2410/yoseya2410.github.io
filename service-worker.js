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
    "revision": "bad0c49028be0e0ae4be90b6c2c2ece4"
  },
  {
    "url": "addition/json.html",
    "revision": "8e14b163b475940e4e7fdd09f629ee46"
  },
  {
    "url": "addition/latex.html",
    "revision": "6e1d9e5ad5940b1a04168c061c633219"
  },
  {
    "url": "addition/markdown.html",
    "revision": "0cc290ac8d50e4460799f57aa985fad2"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "42c27607e2078d2d4c18802b2b7c3cbd"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "164c61c34559ab41255a8940f90e435c"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "14a67b8376d4bf3f196c385d481d2caf"
  },
  {
    "url": "assets/css/0.styles.189745cf.css",
    "revision": "ddb75e9c344d89e558f2b89cdeb375c6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16039208.js",
    "revision": "772eb044def96e337eb4f8b080863794"
  },
  {
    "url": "assets/js/11.6a7b4b46.js",
    "revision": "99491685e4583b1692d5b704b3b8f9ad"
  },
  {
    "url": "assets/js/12.a6cb48d5.js",
    "revision": "7aeadfa181d18b6bdd7deee6ab74218f"
  },
  {
    "url": "assets/js/13.1306a969.js",
    "revision": "0495691eb87f60941c32ad708bfdc33d"
  },
  {
    "url": "assets/js/14.e41ab5cf.js",
    "revision": "7838634f71a6f0d9ec86b5b436f0a30d"
  },
  {
    "url": "assets/js/15.c7989319.js",
    "revision": "76f4e9a6cc7b3548960d76ac3a878de2"
  },
  {
    "url": "assets/js/16.fa39f2ce.js",
    "revision": "9944c468c06a1f1fa83d6262d2dc85ee"
  },
  {
    "url": "assets/js/17.065ff107.js",
    "revision": "dcd1ef4ec0d106c9be9736ebaec2804f"
  },
  {
    "url": "assets/js/18.cb3be27a.js",
    "revision": "3d05d4bac1717bc5509ff6b6d76e656e"
  },
  {
    "url": "assets/js/19.c365521e.js",
    "revision": "103bda7bf5b96785e58a25238810aef5"
  },
  {
    "url": "assets/js/20.332112b4.js",
    "revision": "8a8ad38826114e0e290697dc2b8a86b5"
  },
  {
    "url": "assets/js/21.9fbe8c53.js",
    "revision": "1f47c7c7b2a98e8b8397011302f073bf"
  },
  {
    "url": "assets/js/22.a077faef.js",
    "revision": "43e3e1c4984d7eb5b4bf162ae59c7e09"
  },
  {
    "url": "assets/js/23.80bb6ebf.js",
    "revision": "d5175a78260db15f21ed51d714d52a30"
  },
  {
    "url": "assets/js/24.9d5d5b37.js",
    "revision": "5cbd42dc6f47a801fa4773dd174cd610"
  },
  {
    "url": "assets/js/25.5140d6b6.js",
    "revision": "fb5803494138ce2a859168e6cb97bed7"
  },
  {
    "url": "assets/js/26.78680c72.js",
    "revision": "1fa74847b1f4d78988336a7687a5f164"
  },
  {
    "url": "assets/js/27.96f041e1.js",
    "revision": "e3638544acc45a8bcb002557e2bc24ec"
  },
  {
    "url": "assets/js/28.84a9891e.js",
    "revision": "f4e31db3218937b96d8aa809addac1f9"
  },
  {
    "url": "assets/js/29.755b54ae.js",
    "revision": "702818868b52be68bbc9bc6397f3e391"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.7a7160f0.js",
    "revision": "ce35fe2ff08b02cc18d091b3f9279990"
  },
  {
    "url": "assets/js/31.b2f8e1d7.js",
    "revision": "9cbd2add8cbccac0aaa0acd8db48143c"
  },
  {
    "url": "assets/js/32.6e7e0587.js",
    "revision": "f56db5390c8ac372f958ae0c04843633"
  },
  {
    "url": "assets/js/33.02b7241a.js",
    "revision": "c859bdee371ab76c64d8c2ed83fea9e3"
  },
  {
    "url": "assets/js/34.b43c53d9.js",
    "revision": "dd8918e942da12092f8fb92ec48559c0"
  },
  {
    "url": "assets/js/35.a0b50882.js",
    "revision": "2550cacf5041abcdbcf0c0dc810bd461"
  },
  {
    "url": "assets/js/36.24f5ac67.js",
    "revision": "aa2f5b68b6bf9929db7feb125a0a7f69"
  },
  {
    "url": "assets/js/37.3046fa03.js",
    "revision": "30485c503932bd8e6d42836a58dd7937"
  },
  {
    "url": "assets/js/38.3b8b1e5a.js",
    "revision": "fbdd817034c93a7dbc7d6806cfa21bf3"
  },
  {
    "url": "assets/js/39.ca9e99e9.js",
    "revision": "354ea70810f30f8f6b5ea7fc458f35bd"
  },
  {
    "url": "assets/js/4.8b716be0.js",
    "revision": "88d6c6526b7846d512fb1daccca5e1cb"
  },
  {
    "url": "assets/js/40.4ab62d62.js",
    "revision": "4e352cd9375189d556cf791b717427df"
  },
  {
    "url": "assets/js/41.bc733485.js",
    "revision": "e737f0859e744eb1f44a670f40d8b079"
  },
  {
    "url": "assets/js/42.6f412eb5.js",
    "revision": "2e5dadcd2d75a0d51241a9d2b4874781"
  },
  {
    "url": "assets/js/43.0b09d313.js",
    "revision": "9f9c7e12bf0f4c295a186b1f8b6dab4b"
  },
  {
    "url": "assets/js/44.41c5008a.js",
    "revision": "d5cce000e0ab20e1566fb2ecb5488b7e"
  },
  {
    "url": "assets/js/45.2075d25d.js",
    "revision": "74c11f02f93d198fdcc6aebd54f14095"
  },
  {
    "url": "assets/js/46.104e87a8.js",
    "revision": "4c1a7bddbdc80ae6bb68b21628e2ff42"
  },
  {
    "url": "assets/js/47.1ce4a5f4.js",
    "revision": "89dec913fb6ce95d27d557de49ba5996"
  },
  {
    "url": "assets/js/48.991b377a.js",
    "revision": "9071143c987687860d9ccb6fffb97f02"
  },
  {
    "url": "assets/js/49.0ae80122.js",
    "revision": "66fdf522118758c99766adb95a5baed5"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.c3df1222.js",
    "revision": "6cfcb55ee1af7540fc024011badab888"
  },
  {
    "url": "assets/js/51.e0223a94.js",
    "revision": "8d7061edc24500bfea8ec85a3fafa5cb"
  },
  {
    "url": "assets/js/52.45f12abc.js",
    "revision": "446b35e9b2048910bfe72e9f7b40bf4a"
  },
  {
    "url": "assets/js/53.2a2c8b97.js",
    "revision": "4fa7362a340e829db66ddb0a4e1c25c8"
  },
  {
    "url": "assets/js/54.fe2010ab.js",
    "revision": "267db35ef5df7c35ac105453ba8ca20b"
  },
  {
    "url": "assets/js/55.5e221226.js",
    "revision": "f9a77ec54f4e378e9eab23dbb6fd6119"
  },
  {
    "url": "assets/js/56.a8a88e27.js",
    "revision": "d056f72d07e29fb1748ea4b35317c582"
  },
  {
    "url": "assets/js/57.d65ccc38.js",
    "revision": "eea1d8ecc0a563ff13da9762ff2af62a"
  },
  {
    "url": "assets/js/58.2176237f.js",
    "revision": "8b6753e16370b0550b2a583a09f19f6e"
  },
  {
    "url": "assets/js/59.d18aa46d.js",
    "revision": "fc4487c7eb31589055c249b61e26e8c7"
  },
  {
    "url": "assets/js/6.e65ba74f.js",
    "revision": "31a60902f114f764593aa93aea0c24f0"
  },
  {
    "url": "assets/js/60.2ea9fd9e.js",
    "revision": "1e38ea29afee62434ef3e74c37df85f9"
  },
  {
    "url": "assets/js/61.4d9a377a.js",
    "revision": "da45013cbcd129f3f0ea3a335f6b83d4"
  },
  {
    "url": "assets/js/62.57c997dd.js",
    "revision": "9ea15675cd2a8d1ccea7eb43ee2984cd"
  },
  {
    "url": "assets/js/63.2b8ad4c3.js",
    "revision": "c018ffae38b6225e9221367110a361a5"
  },
  {
    "url": "assets/js/64.a6372f15.js",
    "revision": "0fc60347efc3860f63ff409f7855bc4c"
  },
  {
    "url": "assets/js/65.df305c5f.js",
    "revision": "169a5d3a36b61145c0b7f87d78181a89"
  },
  {
    "url": "assets/js/7.86f37046.js",
    "revision": "15518e66a31bbd4bc2f3567409ee4888"
  },
  {
    "url": "assets/js/8.7c2d113d.js",
    "revision": "07c106c791a969425d6a8eac5fc3fc7a"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.2ebf39f2.js",
    "revision": "c211780dec64997fa8d83f5197429e43"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "8a8715556e87df4f9f3111f980a50b05"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "50968e31e861d8469e1733a3206c4d40"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "4d1c6b5250758c23367dfce14db91111"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "c1f06b511d03b486ad34f89a7357047e"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "f7c79f67d592e995e33c415f366363ac"
  },
  {
    "url": "computer/c/c.html",
    "revision": "ad23a7b4a79dbf15425d3820fe04b464"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "82fdac1a4c0f8487e010740bbbe12d6d"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "274d263da21c643ed91ab9ecf1e90958"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "45e7bcce5cf9be2524ce70d7ec925851"
  },
  {
    "url": "computer/HarmonyOS.html",
    "revision": "2eddd4f8760e541d50de381d135e5fb9"
  },
  {
    "url": "computer/Linux.html",
    "revision": "ce94aec1204b9c5aea3338a76185d6b9"
  },
  {
    "url": "computer/python/python.html",
    "revision": "f2232c4291098e1411de41d98470cd65"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "0ed82f94a979b8b90aef5158814bf770"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "70c011ed2f8fc35681e29cb365f5e38d"
  },
  {
    "url": "computer/嵌入式系统设计.html",
    "revision": "f5795bde8d47a2ea05e84bc00bd48dab"
  },
  {
    "url": "computer/操作系统.html",
    "revision": "34a75f73f34b18359696708a3371888a"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "a888eda7fb65d9df5ef2f1fb34c6b696"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "83b7c2a123e3af90d0a3689ad2306f9b"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "e195ae4426e81657f1d9cae5fa610968"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "7cd721e0abd75f3ac916605e884f2b66"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "7f6190799067be5384c5034315e1ce00"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "f2f141f2ed09704ae599c75167923624"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "56edc570b496b0824b2ce75edb70ec77"
  },
  {
    "url": "graph/example.html",
    "revision": "52833cbee1d9094f64c1f2b7307f0304"
  },
  {
    "url": "graph/test1.html",
    "revision": "1ce2c3df8f71d1d54aede014d24f17d5"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
  },
  {
    "url": "img/icon/BULBASAUR.png",
    "revision": "27c12869d37faad54a58c0e5489595dd"
  },
  {
    "url": "img/icon/PIKACHU.png",
    "revision": "60cc8e1e4e21bff837fb25f7427907f2"
  },
  {
    "url": "img/logo.png",
    "revision": "c89844f2aee46b3530d38e552691b75c"
  },
  {
    "url": "img/python/图表绘制示例1.svg",
    "revision": "9d50e22c8fa88a4350d14dd83abd02bf"
  },
  {
    "url": "img/单片机/8051单片机.png",
    "revision": "0b03e8386c72ed2da31313c1055b17e4"
  },
  {
    "url": "img/单片机/LCD1602工作原理配图.png",
    "revision": "15a26ce46f8e8923080c6b9884f2a2a5"
  },
  {
    "url": "img/单片机/LCD1602接线图.png",
    "revision": "c5a45ae5543e5e9ea5eb5ab1b8d09b60"
  },
  {
    "url": "img/单片机/中断程序执行过程.svg",
    "revision": "026e065d6fe8a7f96b9a47d027a94681"
  },
  {
    "url": "img/单片机/按键的使用电路示意图.png",
    "revision": "371523aa6672e00be1b04259a073cd3a"
  },
  {
    "url": "img/单片机/按键闭合波形.svg",
    "revision": "a38d5733c84edc393140ebd082b1ee9f"
  },
  {
    "url": "img/单片机/矩阵键盘原理图.png",
    "revision": "bf3ca54fdbd626d1f20829da9d796135"
  },
  {
    "url": "img/计算机组成原理/8086物理地址生成过程.svg",
    "revision": "63d569e0387a4fa81ba6b3e84f12f084"
  },
  {
    "url": "img/计算机组成原理/X86体系结构.svg",
    "revision": "b93af07c2cd84c88a0ba89671e4b0cf2"
  },
  {
    "url": "img/计算机组成原理/X86指令简介.svg",
    "revision": "2384a4adf327079658b89e0d6d7d4fce"
  },
  {
    "url": "img/计算机组成原理/冯诺依曼结构图.svg",
    "revision": "d4c0d14e88ab991aa66dd26a4f487d2b"
  },
  {
    "url": "img/计算机组成原理/指令的格式.svg",
    "revision": "91ad50c06b61b441612dbabcde6c0c91"
  },
  {
    "url": "img/计算机组成原理/标志寄存器.svg",
    "revision": "302403f1560f1591367b053ae43cb773"
  },
  {
    "url": "img/计算机组成原理/简单指令系统示例.svg",
    "revision": "574de3077d079e92200b925678fe7964"
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
    "revision": "5a9d04f92c26c28b063ee48785daa75a"
  },
  {
    "url": "img/计算机组成原理/运算器的结构.svg",
    "revision": "a0c2b4c16ef3392b44988f17d2423c72"
  },
  {
    "url": "index.html",
    "revision": "0e68d01d69346ea8f74e8764705e5d9d"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "e5fc37f543d898e15a4d7cdc3d30424b"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "e87668fc831cece9dcd8734bae55e063"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "06d30b5185b94bc1ef45a7b3610f42e4"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "c8d191ee8429f4b468649448eb4b5fe5"
  },
  {
    "url": "physics/光学.html",
    "revision": "4def9b542d664de017ad42b6b47a934a"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "186323f3169de315571167c0b8ce047d"
  },
  {
    "url": "physics/力学.html",
    "revision": "6fab1b87c681aa9390b0d95b622b5b8a"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "77f8ae17c60a18bdd4c747461798d610"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "b638ebea25a3087a12221cec5c0a4020"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "141871f1d5dbb4e0749edd0c9b44f60a"
  },
  {
    "url": "physics/热学.html",
    "revision": "ff5dd46f85348aed234cc63dc61835bb"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "56aeaeb37e264672aac1e40a1c5f160e"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "30a17714d7dbd568c4e9b3817bb8155c"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "0251f0828073014deab32cc1a40cf0ab"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "bd77f03d99b5100356e1ec6d372007bf"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "62394d10a8998089864965adf7fcd433"
  },
  {
    "url": "web/html/css.html",
    "revision": "3bae76308027988c8e7bcca3e46225ea"
  },
  {
    "url": "web/html/html.html",
    "revision": "3b1beabbde2723278437e9bf0f472873"
  },
  {
    "url": "web/html/实例.html",
    "revision": "0f95341959919e1436eeb8faa82892ed"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "8035042bd285a165c09aae3bc9850bac"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "c52b4e56bbccb3b239d87f022a69924d"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "6e45f791609fb3713aa68d00d9b7ec7c"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "71bc6be06dd4397006f6dedcd89121d0"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "3ce411074bf9cf3008f96bfed0b5d10c"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "7d6021c5b1af68ae64451be591baafea"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "8c134915b01c998487a7b981d1404681"
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
