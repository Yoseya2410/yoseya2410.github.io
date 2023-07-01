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
    "revision": "dcd4296aae54f7bb11b1c03dbfcd601c"
  },
  {
    "url": "addition/latex.html",
    "revision": "fced2b98eb57813be55e896a98a6697f"
  },
  {
    "url": "addition/markdown.html",
    "revision": "08361ac8f89785021eb40093acefe82c"
  },
  {
    "url": "addition/svg.html",
    "revision": "3e290fa07332c00820575cee264a38c0"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "fd904ceca6e0a08ad0b4232ee59aa8c4"
  },
  {
    "url": "addition/xml.html",
    "revision": "789c3dda65d57671ceefd01447e2f43a"
  },
  {
    "url": "addition/yaml.html",
    "revision": "e5a565b13b228902c305c68b32aaa0d2"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "b092635f63fda3ff05a9f3983edf7656"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "ffa418cff5f068493ac15098f52e5433"
  },
  {
    "url": "assets/css/0.styles.34d07f7e.css",
    "revision": "54fb8f1bee02171e6901049399f831f7"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.c607d3fa.js",
    "revision": "59578b22775f9858c61853fe3b67c591"
  },
  {
    "url": "assets/js/11.c54d8a75.js",
    "revision": "163b673d01d1de5df5f36bed98c78b4b"
  },
  {
    "url": "assets/js/12.c66daca9.js",
    "revision": "e5c98f60a4e8258057754532d1bdb97a"
  },
  {
    "url": "assets/js/13.41957b91.js",
    "revision": "3bd1a106111fe8c65002e5d58e15f8de"
  },
  {
    "url": "assets/js/14.0ebc71da.js",
    "revision": "6e4b612493859523dd59e6ffdca738f7"
  },
  {
    "url": "assets/js/15.32e4f9ec.js",
    "revision": "76f4e9a6cc7b3548960d76ac3a878de2"
  },
  {
    "url": "assets/js/16.2533ab1c.js",
    "revision": "88ca0cf7fd4b60a3893198f81d852623"
  },
  {
    "url": "assets/js/17.29257248.js",
    "revision": "1c9ca9792ea892bbddab171cd1f756a8"
  },
  {
    "url": "assets/js/18.92cc3dcd.js",
    "revision": "99fba14917bdb5f47ef1b1cb2302ebc5"
  },
  {
    "url": "assets/js/19.1d31f043.js",
    "revision": "36ebe76cf251f04396e66bde28aa40ee"
  },
  {
    "url": "assets/js/2.2eb898ea.js",
    "revision": "649cdd60cf48808762ba6dda5515228e"
  },
  {
    "url": "assets/js/20.8ccdf6d8.js",
    "revision": "e1b92bfdc9b9fd92ef632e54ec84c905"
  },
  {
    "url": "assets/js/21.faca202c.js",
    "revision": "63afe8f80393a7b99e3dcc96e4cf86e0"
  },
  {
    "url": "assets/js/22.a4f59cdc.js",
    "revision": "1e39f39a4ccba48edec5ab0c24e858f1"
  },
  {
    "url": "assets/js/23.6722db04.js",
    "revision": "0a02017207eea97611f9bdc718433433"
  },
  {
    "url": "assets/js/24.ba850e69.js",
    "revision": "1d8920fba0906f292b70c65fadc05830"
  },
  {
    "url": "assets/js/25.06e5b089.js",
    "revision": "d1de0fff57fcbd3ed351e8545320f425"
  },
  {
    "url": "assets/js/26.f09e39ac.js",
    "revision": "a3cc99a37b84d704523e3da44202e8fe"
  },
  {
    "url": "assets/js/27.98bb1ed1.js",
    "revision": "dc66b45c015b3e0eb5ec305653760f10"
  },
  {
    "url": "assets/js/28.7c6f39be.js",
    "revision": "0a805c9e9733ef3814986b55b46edfbe"
  },
  {
    "url": "assets/js/29.f1ad5354.js",
    "revision": "9ca695d73d6f86d12f967c5c299f355b"
  },
  {
    "url": "assets/js/3.9eb5b8e5.js",
    "revision": "958aaabadd1c685a5d5e13f085ee5dc9"
  },
  {
    "url": "assets/js/30.32d964e4.js",
    "revision": "6e213c6e1d1d66bace0f89b46a6d143c"
  },
  {
    "url": "assets/js/31.838a40f3.js",
    "revision": "9f3a1ff055f172f3bfc23ee32f89a03b"
  },
  {
    "url": "assets/js/32.5c59fd19.js",
    "revision": "bc85271f284be2095c05bb64bb63aa51"
  },
  {
    "url": "assets/js/33.ddea5222.js",
    "revision": "addf99443cec09dde9dbe99bc862e4fe"
  },
  {
    "url": "assets/js/34.041568b6.js",
    "revision": "67a2c01bd454ea1bf89be2aba8981a3d"
  },
  {
    "url": "assets/js/35.fb7cebe2.js",
    "revision": "55eb1f4e314d219c00fd66c0e83c075f"
  },
  {
    "url": "assets/js/36.94258fa5.js",
    "revision": "0b6fb98d6b9e3bb3d989c45ce2dd3930"
  },
  {
    "url": "assets/js/37.2767788b.js",
    "revision": "277ced5381311f136777954a8943a6fe"
  },
  {
    "url": "assets/js/38.2ecf9421.js",
    "revision": "767b733b57298ba6722b80bf1abb63f5"
  },
  {
    "url": "assets/js/39.8f2c73d2.js",
    "revision": "72e9771a869afa14c28ceb7678b5342d"
  },
  {
    "url": "assets/js/4.0495ed1d.js",
    "revision": "a85812709bae302ee0209d3b1d4299d1"
  },
  {
    "url": "assets/js/40.2d808a61.js",
    "revision": "6d4c3f365e64fe20adb7d8d85d4fb811"
  },
  {
    "url": "assets/js/41.a5c1a2f6.js",
    "revision": "a81cf2a1f3fe14f387044357bd9eb21e"
  },
  {
    "url": "assets/js/42.44eb9479.js",
    "revision": "8c277bc9644df9f0e91a00aa7b1c40a9"
  },
  {
    "url": "assets/js/43.6526c694.js",
    "revision": "278e4975eb3b4b26175aaf8785e34256"
  },
  {
    "url": "assets/js/44.82cd7ec8.js",
    "revision": "7cc12fe5f1e12ab2094986616ef715f1"
  },
  {
    "url": "assets/js/45.57262161.js",
    "revision": "adc5caf45233ead0e14be4d0f0b69935"
  },
  {
    "url": "assets/js/46.59c02680.js",
    "revision": "2fc296aa00cdfce0b01187c7bbff8b3a"
  },
  {
    "url": "assets/js/47.8bd4ebb4.js",
    "revision": "de2087630b6b00cff33f3d4d54802dfb"
  },
  {
    "url": "assets/js/48.88fdd937.js",
    "revision": "785e539440db95b902414f0a6ab7741f"
  },
  {
    "url": "assets/js/49.cb00dea2.js",
    "revision": "91876882f97906142a00b4d95db1b063"
  },
  {
    "url": "assets/js/5.00b9c4bc.js",
    "revision": "21bd4501ee9e0271648cb499aa247b30"
  },
  {
    "url": "assets/js/50.41007ae3.js",
    "revision": "e6a96a2b636543171b80e621ca39f117"
  },
  {
    "url": "assets/js/51.c1104f12.js",
    "revision": "766d2b22c7896f243eb37c1baa7d2197"
  },
  {
    "url": "assets/js/52.cefc9576.js",
    "revision": "d030f3d15fad25e983db0114fb870c69"
  },
  {
    "url": "assets/js/53.b9f34dd1.js",
    "revision": "90cdb7c047eeb981f048241f092d0870"
  },
  {
    "url": "assets/js/54.da1c2fca.js",
    "revision": "fc35b3cbcb749ab1d591b70d37bc65da"
  },
  {
    "url": "assets/js/55.3686fd67.js",
    "revision": "2f8f1ad0739f7222acd9ebfebe2b17d8"
  },
  {
    "url": "assets/js/56.311f88ed.js",
    "revision": "ac394121a78938bd74a8b04e69414f2c"
  },
  {
    "url": "assets/js/57.d479d368.js",
    "revision": "bd645c4584db065bd0fae262763a496a"
  },
  {
    "url": "assets/js/58.85993dbd.js",
    "revision": "89b3e1fd913e34b17d22225c72c1ef7c"
  },
  {
    "url": "assets/js/59.3849d8af.js",
    "revision": "2da3fc845ac7b6f1e58bd5dcd5adc67c"
  },
  {
    "url": "assets/js/6.cefa71ab.js",
    "revision": "bf610565b688cfee77febfe2f5e10473"
  },
  {
    "url": "assets/js/60.ce0d5978.js",
    "revision": "d038155f86006e15f5c7a858d3cf28ea"
  },
  {
    "url": "assets/js/61.a9695dff.js",
    "revision": "4ec538f51026c0bd3293e25bca6c7ee1"
  },
  {
    "url": "assets/js/62.1938be71.js",
    "revision": "f9b3c037130a83d7ed43ae749fceee6b"
  },
  {
    "url": "assets/js/7.b72a9c92.js",
    "revision": "58bf00e8c15a34f7a5848405f504c132"
  },
  {
    "url": "assets/js/8.13eeec02.js",
    "revision": "2aa7e45605772d05a2db06c3bc3c5f1c"
  },
  {
    "url": "assets/js/9.55f57df4.js",
    "revision": "96bed080c60fc2ecba7b13c19a004947"
  },
  {
    "url": "assets/js/app.ce2d43f2.js",
    "revision": "4a620c3ec0455a02ba96ab8272f940f6"
  },
  {
    "url": "c/c.html",
    "revision": "5000125fa6af43ae966c117f459d03a5"
  },
  {
    "url": "c/cpp.html",
    "revision": "2bc7f0cbc42ec0c2e7d58f4ec967d733"
  },
  {
    "url": "c/参考.html",
    "revision": "26d3e95f002c19afff3d19322e8d7dfa"
  },
  {
    "url": "c/实例.html",
    "revision": "9173c5e589c1578949c5d0a5f3020451"
  },
  {
    "url": "computer/harmonyos.html",
    "revision": "293d916cc157135e742c15d39b7523fc"
  },
  {
    "url": "computer/操作系统.html",
    "revision": "d5715c8036521aeacaf262a8f9050c3c"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "68cfcc670d28fca4e809e202e6cbfb89"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "12146f665dd8a8ce3b2acd1069e75076"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "44170d23b8179ddb6b8cbd084ad8caec"
  },
  {
    "url": "electronics/半导体物理.html",
    "revision": "3702d56c439ce5a47a8cfb11bcf255ab"
  },
  {
    "url": "electronics/单片机原理.html",
    "revision": "05293de8bb8c3b074106b51350befa73"
  },
  {
    "url": "electronics/数字电路.html",
    "revision": "ff356af83022f38e1b77aea3ec15e212"
  },
  {
    "url": "electronics/模拟电路.html",
    "revision": "2b927fd4acb8aa1be0c19dc28660dd02"
  },
  {
    "url": "electronics/电路基础.html",
    "revision": "4f40a75e7b8cb9891263f749405a920d"
  },
  {
    "url": "html/css.html",
    "revision": "0c656bbb651af0ae340a223385155db8"
  },
  {
    "url": "html/html.html",
    "revision": "c980fd0932224ecd836d68fcb21bb7cd"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
  },
  {
    "url": "html/实例.html",
    "revision": "073f3bb84d519627dba4fa6d23e5b366"
  },
  {
    "url": "img/logo.png",
    "revision": "c89844f2aee46b3530d38e552691b75c"
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
    "revision": "92ed7c7ad99c6a0d8d0373d1c25fab4c"
  },
  {
    "url": "javascript/electron.html",
    "revision": "19e17770bdec9a97d11a6553b7e70e32"
  },
  {
    "url": "javascript/JavaScript.html",
    "revision": "c48447a14fc27751093bdc891fa3dbee"
  },
  {
    "url": "javascript/json.html",
    "revision": "5938adbfb645f46a4894b8eb4895c1ed"
  },
  {
    "url": "javascript/pwa.html",
    "revision": "7ca833acc2f43c081807ce3e7268ee43"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "e8179048a7bd02f1136fd213b23613b9"
  },
  {
    "url": "javascript/Vue.html",
    "revision": "dc46fed6f7dd7d63124faeb5e824a266"
  },
  {
    "url": "javascript/WebAssembly.html",
    "revision": "1633bdb9572c531e09d2ad8d189230fd"
  },
  {
    "url": "javascript/参考.html",
    "revision": "8aefac457cff7219e30ec99deb31ea55"
  },
  {
    "url": "javascript/实例.html",
    "revision": "41562cd2cdc2d0cb3e37408ee425d2b3"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "linux/linux.html",
    "revision": "b12435e299169a25f39c26fac07af9fc"
  },
  {
    "url": "linux/shell.html",
    "revision": "2c4403d4838dd9d316f8d44d20ddecdc"
  },
  {
    "url": "physics/光学.html",
    "revision": "76af58bf74ccdca1dd79a3d28d8cd9fc"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "3742eb66dc3de71480aecf30f0315e10"
  },
  {
    "url": "physics/力学.html",
    "revision": "c2c816ded262dbb61d895b814996d7ae"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "247d504466bc604b90acc4013cdf27f4"
  },
  {
    "url": "physics/微积分.html",
    "revision": "7b2ae425ca355608b1f0c2ec938ed56c"
  },
  {
    "url": "physics/数学物理方法.html",
    "revision": "6fbb0d8cb71bb53f956b7b1bc9eba30f"
  },
  {
    "url": "physics/概率统计.html",
    "revision": "1b6351f7216b659f48ee4d6f3f4af852"
  },
  {
    "url": "physics/热力学与统计物理1.html",
    "revision": "ff2543e076d406537d3e3a973447aa55"
  },
  {
    "url": "physics/热力学与统计物理2.html",
    "revision": "8af09b2c8a83c4836176e93e57b79cda"
  },
  {
    "url": "physics/热学.html",
    "revision": "1df48a158c832c1540a47afadb930f9f"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "fcf35e5fa965a9ca19945c25a248cea8"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "23d8c5fbb870fb4f5301187e142a3611"
  },
  {
    "url": "physics/线性代数.html",
    "revision": "8da18702dc089a449e5784bda6378c91"
  },
  {
    "url": "physics/量子力学1.html",
    "revision": "e3a4546cfa7dbe4b3b68eba31b48f3a8"
  },
  {
    "url": "physics/量子力学2.html",
    "revision": "4ade81c0c916edbed9029a3d1b3e98f7"
  },
  {
    "url": "physics/量子力学3.html",
    "revision": "280b3de829288906e86c8c7885986711"
  },
  {
    "url": "python/python.html",
    "revision": "d76b9aae6ea9cfd2674faecabecf7c95"
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
