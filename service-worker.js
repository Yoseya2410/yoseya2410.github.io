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
    "revision": "bb42e2b75a46e513ab3a422d17f41bc1"
  },
  {
    "url": "addition/git.html",
    "revision": "bec99056f129bd17f6a59175a16899cf"
  },
  {
    "url": "addition/json.html",
    "revision": "fd5977957aff7d05936d255b30f25e3c"
  },
  {
    "url": "addition/latex.html",
    "revision": "1d96663271c9b64cec3c2c68f6f504cc"
  },
  {
    "url": "addition/markdown.html",
    "revision": "72e0b18c9cf331bae3420894366be0c6"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "abf0c8f20b88debf2c24396abf809d6f"
  },
  {
    "url": "addition/xml.html",
    "revision": "2bc1d68fac7651bd37ff6ce582c8e867"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "0f71fd751f7794b3280b6de95ba220df"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "fb5f527743f8e31de54df1a556715f16"
  },
  {
    "url": "assets/css/0.styles.7324eb70.css",
    "revision": "3d1fde1177ed845ee434b85c725f3b20"
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
    "url": "assets/js/11.c06c3cc5.js",
    "revision": "c9b1ca6fabd4c91e5526c3f68099e961"
  },
  {
    "url": "assets/js/12.7019d59c.js",
    "revision": "2ad7226328e613d65cc8ca75aa8fc946"
  },
  {
    "url": "assets/js/13.033e1aab.js",
    "revision": "73e471b53fe1428c5ca07ed788f1e90f"
  },
  {
    "url": "assets/js/14.c6111d4b.js",
    "revision": "283668b3b1e51331d6d68f8118157428"
  },
  {
    "url": "assets/js/15.b1548fd7.js",
    "revision": "7c80dee6c06c5d333ab73bb4d058d57d"
  },
  {
    "url": "assets/js/16.ea59e35d.js",
    "revision": "5d97f9d43a799788745a0d227a9dc260"
  },
  {
    "url": "assets/js/17.866e1d7f.js",
    "revision": "33b5046a5e51f761ff2375c87efa4fd7"
  },
  {
    "url": "assets/js/18.17120c1b.js",
    "revision": "fbf999f2405535af9002541bc75e4c97"
  },
  {
    "url": "assets/js/19.02230bb1.js",
    "revision": "a94d50a9dfc0156b35a55d5636672615"
  },
  {
    "url": "assets/js/20.db4081be.js",
    "revision": "e19a3fdeb67d571228109847533f8add"
  },
  {
    "url": "assets/js/21.cdd351cb.js",
    "revision": "33330b78b234b8f9aead025090f3c82d"
  },
  {
    "url": "assets/js/22.4c87aa92.js",
    "revision": "a2a648b422c4cd27ca771db48ab3f14b"
  },
  {
    "url": "assets/js/23.5c0d68ab.js",
    "revision": "9676773d73fcebbb33e0c3dbd925783a"
  },
  {
    "url": "assets/js/24.6c132bcc.js",
    "revision": "13db5ca74fc21d6b78b2e95ab8392cfb"
  },
  {
    "url": "assets/js/25.01dd2f2b.js",
    "revision": "7b2a818fd6675e42ef206a51088db707"
  },
  {
    "url": "assets/js/26.897f77ac.js",
    "revision": "7a4d7ba1babefa0f4f5dd0eec42cbe3c"
  },
  {
    "url": "assets/js/27.22cb7b44.js",
    "revision": "92886ce6ff2ded9dc2061a7c62d80db7"
  },
  {
    "url": "assets/js/28.f86e00a5.js",
    "revision": "96454e93904d3ba7741198260697c02e"
  },
  {
    "url": "assets/js/29.a82bcb18.js",
    "revision": "c12fc8a2026025f5a130c512ec17e1cb"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.1e9b43d1.js",
    "revision": "a553007829275a155931f80f28b62c5f"
  },
  {
    "url": "assets/js/31.62023fc0.js",
    "revision": "3cee760eacfaa9498157102fcfdaadb8"
  },
  {
    "url": "assets/js/32.1b89fea7.js",
    "revision": "92cfaff418f6f88f5978c9ed4d3fc416"
  },
  {
    "url": "assets/js/33.dae75e2c.js",
    "revision": "748522d77f4d37a1d14cb1afb6c3a9c0"
  },
  {
    "url": "assets/js/34.d7f457f8.js",
    "revision": "997e845134ac1f432bf490ef6732f1e1"
  },
  {
    "url": "assets/js/35.ea89026c.js",
    "revision": "8e904ee646d63b70d1d7947f923993cd"
  },
  {
    "url": "assets/js/36.c1ffbfa3.js",
    "revision": "1cf1f9d823d9a38edf12eea8be41ee50"
  },
  {
    "url": "assets/js/37.665b0d9c.js",
    "revision": "beb3b9fd00069242be521038ef37d74d"
  },
  {
    "url": "assets/js/38.f197a34a.js",
    "revision": "d565e0304775d44200789acb11f25229"
  },
  {
    "url": "assets/js/39.c753caca.js",
    "revision": "04bcd33e98d4ef5208e18a1b293a5045"
  },
  {
    "url": "assets/js/4.f40e2c58.js",
    "revision": "fa3e2f7a8dca7cfbe77b32ccf7ef3327"
  },
  {
    "url": "assets/js/40.f762d2c7.js",
    "revision": "cc42c8512c9188a1e3149cc518fcf93e"
  },
  {
    "url": "assets/js/41.8d7ea6e5.js",
    "revision": "74004b316598e323ba09a5dfa9d6bbbd"
  },
  {
    "url": "assets/js/42.a24eaacd.js",
    "revision": "fde0a37080c275605a8777ac64e3d445"
  },
  {
    "url": "assets/js/43.3bd304bb.js",
    "revision": "5f6dba6c0e35386116ac877a60eac796"
  },
  {
    "url": "assets/js/44.35015af8.js",
    "revision": "d6b552d829e0f76c45199a7efcca3f07"
  },
  {
    "url": "assets/js/45.b42186ce.js",
    "revision": "bbaf09b2fe9ca8018b3c80f6aaacae3e"
  },
  {
    "url": "assets/js/46.7d212149.js",
    "revision": "b80db097b03fbd34b975dcbfe6fa85e9"
  },
  {
    "url": "assets/js/47.8d81969f.js",
    "revision": "4c3d0040f5309b3fb782f88736beb160"
  },
  {
    "url": "assets/js/48.14bd06f0.js",
    "revision": "353d70d9c17715b1693121c237467761"
  },
  {
    "url": "assets/js/49.1a7147a9.js",
    "revision": "0f4106c5382f4909ba491f2c2231b88f"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.bc2e351e.js",
    "revision": "32b76f8c65dbd7ba41a42cc07021d004"
  },
  {
    "url": "assets/js/51.9e6fbdb5.js",
    "revision": "062e2f5748b3baa5b4aea94aca2b54aa"
  },
  {
    "url": "assets/js/52.b98e123e.js",
    "revision": "8cbbf5fd89604d94f6ce2867e84f7bb6"
  },
  {
    "url": "assets/js/53.7a029e2f.js",
    "revision": "dddfcc6f6bdb0873afcb815ca56977c8"
  },
  {
    "url": "assets/js/54.108bded5.js",
    "revision": "00d5352fe57bbd90b2acc8ca200ba266"
  },
  {
    "url": "assets/js/55.527b0cde.js",
    "revision": "e1240bf729be79e3302deeb760211a03"
  },
  {
    "url": "assets/js/56.cd825588.js",
    "revision": "22efe73adf6a34970253e65c1dcf8682"
  },
  {
    "url": "assets/js/57.c348a44f.js",
    "revision": "3d905e70cef63194fcbeaedc9850c38e"
  },
  {
    "url": "assets/js/58.27bab74a.js",
    "revision": "08c975471aa1a07cbb722a39f351a0cf"
  },
  {
    "url": "assets/js/59.09773648.js",
    "revision": "759e3e2a5a7d734f12edb3ebd22f3aef"
  },
  {
    "url": "assets/js/6.3712678b.js",
    "revision": "c8dac902c667c83941b8647430208808"
  },
  {
    "url": "assets/js/60.c86435c6.js",
    "revision": "fd894ce5287da50447b531dd04c55892"
  },
  {
    "url": "assets/js/61.ce820caa.js",
    "revision": "2a2d898077b52395bc7f77b99361f171"
  },
  {
    "url": "assets/js/62.1f918558.js",
    "revision": "a3f33b42d6e4063330e106d80a54518b"
  },
  {
    "url": "assets/js/63.73613b0a.js",
    "revision": "f979ee09f46df5df8c91f3f787e1e57b"
  },
  {
    "url": "assets/js/64.4138775c.js",
    "revision": "cc9f782f047fdafe1866c12746e38827"
  },
  {
    "url": "assets/js/65.008da1ee.js",
    "revision": "a5d9e7a06334e5b8fc5c9ba37c60550e"
  },
  {
    "url": "assets/js/66.21abac56.js",
    "revision": "278891f1bef6625be1e24ff9c85f3569"
  },
  {
    "url": "assets/js/67.a1f49a41.js",
    "revision": "b8875dd1e10112a9ae0b725b7ebf75d9"
  },
  {
    "url": "assets/js/68.6797575a.js",
    "revision": "2e474ede6ca138018c103ecfa393cf3c"
  },
  {
    "url": "assets/js/69.3c48aaa4.js",
    "revision": "bbc6d50125dcd16edde80caa4e3ff7ad"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.c9204003.js",
    "revision": "ca53ed44806ad37614f857a7027b1901"
  },
  {
    "url": "assets/js/71.20ab09c9.js",
    "revision": "88c958a2101f7414567def7795500938"
  },
  {
    "url": "assets/js/72.eba533d8.js",
    "revision": "856952c14c32c39b30fc9c7aa3b450b6"
  },
  {
    "url": "assets/js/73.cccd04e1.js",
    "revision": "ffd30ef118c86711cccdb16fc022dfd4"
  },
  {
    "url": "assets/js/8.398eb1ea.js",
    "revision": "9473028b95db7c2aaafa985276a37701"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.4d4f1761.js",
    "revision": "573e489b91c7dfad3f700efd910dc918"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "02d35315d86813c98a20dfa2fc538928"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "8b629e1759517c9a38d87eb8749a6773"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "00a8b4ba4d139d46ec2afd834657ec78"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "57b1cb2a103a0e80453b69e8c440096d"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "4cabe11b642af41b76be226327aa23b9"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "2ab5e63cce9917048cad4547e2be54ea"
  },
  {
    "url": "computer/c/c.html",
    "revision": "cbdaabe3d585f62da9daeef85e84e77e"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "294bb54b20f2edf98bcdf9f1eb10ffb3"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "734d3e7e5fafa43e9fdb34bd74e5d529"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "00cc8317d0a8d5bdc7d5686793c4dac5"
  },
  {
    "url": "computer/Java/java.html",
    "revision": "13b9797b245c2b7bf03cf49595c39ce9"
  },
  {
    "url": "computer/python/python.html",
    "revision": "24ac711a524e50a207ff414f6777b6ff"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "0203bbb3f02502e3f5dca6650ae204e2"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "ed56f3ab03400018d8ac623b21c678ba"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "7ee662594e9ed3dbc8fdfe719cf96683"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "56e0f3149d06b7dc76b685dd61607e71"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "eb6842c32b3ae8645dc3ab949750b3b5"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "1996af8e3a32f41b8b04ebcecae656e7"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "71a75493d1a35d72ca427806e63e2692"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "1ce19b70cce2233b28b3e3f0d012a401"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "2db2419c3c08250888e14785934ba1ab"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "9b52bcc8f6d7eeb33907d27f2dd23ae5"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "596c93e7ace36439a218e875bbd7623d"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "6af6439bed5f82d543258529469faed5"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "8d6fe7bab5bd18873b0114fa56cc9e74"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "aa6988a5dd6b899ada5170e790d5d9c9"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "b2f881a1bd0a1a396b396efb5161850c"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "561bd2597453ec168e6d9b43f8884440"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "03911a97bae29b55b7b75e2aa1e8cb74"
  },
  {
    "url": "graph/example.html",
    "revision": "ff7812627be9aed0297518d19cba346f"
  },
  {
    "url": "graph/test1.html",
    "revision": "6d8d5fc72157385b407c42e2c9557209"
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
    "url": "img/python/bubbleSort.gif",
    "revision": "b7d216a5b292cf3a5412bbc7fbb56a9e"
  },
  {
    "url": "img/python/任意进制转十进制.svg",
    "revision": "0e5e3ec603af43787b542c7c3e509e56"
  },
  {
    "url": "img/python/图表绘制示例1.svg",
    "revision": "9d50e22c8fa88a4350d14dd83abd02bf"
  },
  {
    "url": "img/STM32/GPIO位结构.png",
    "revision": "f63943c3bf038dc70caaaa9276e78323"
  },
  {
    "url": "img/STM32/GPIO基本结构.svg",
    "revision": "b410e97b1dba714559ab90fc866f0f4f"
  },
  {
    "url": "img/STM32/STM32工程架构.svg",
    "revision": "3bb00393e4fcefd02e0fe2ed374a5fbc"
  },
  {
    "url": "img/STM32/外设时钟使能寄存器.svg",
    "revision": "92d896b8596e2129481775081b000eed"
  },
  {
    "url": "img/STM32/端口位清除寄存器.png",
    "revision": "62b8b302d5bac5f8138b8bc1fde098b6"
  },
  {
    "url": "img/STM32/端口位设置清除寄存器.png",
    "revision": "024211490423009c326518c5263b410d"
  },
  {
    "url": "img/STM32/端口输入寄存器.png",
    "revision": "34eff6ede39972826b05840f9ae9264e"
  },
  {
    "url": "img/STM32/端口输出寄存器.png",
    "revision": "bbd06558d9cb26211ad87f49ddec0adc"
  },
  {
    "url": "img/STM32/端口配置低寄存器.png",
    "revision": "76ce964e459d070943da7241ef76ab8b"
  },
  {
    "url": "img/STM32/端口配置高寄存器.png",
    "revision": "c0b3cc6424c2ee8bf11330fe2a4e0621"
  },
  {
    "url": "img/STM32/系统结构.png",
    "revision": "18c7bd16f3617c6da485034506c23c96"
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
    "revision": "b1d458f6f98ff749c697ffd8fb28e145"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "1878f16d8310847b89a5a41ed8306814"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "0f9cf86873c60e9d8339a1a104588a5b"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "8e4dec0da5a6858958e695903ad935a3"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "4c4de83b9a1d945078258cdd409b59e3"
  },
  {
    "url": "physics/光学.html",
    "revision": "ce1f6f9eed043e49521b66a59f3cd7fe"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "b664e92722819676f358fc0bc8f5ebdd"
  },
  {
    "url": "physics/力学.html",
    "revision": "8b218fb1bb8ff31a950e7992ed330af2"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "4120b3a898284f4ca530092b423c7ab5"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "64e92acd09571ef0413b87de65ac40b7"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "c5d03194974a5ff8f8d0df8e6b802af7"
  },
  {
    "url": "physics/热学.html",
    "revision": "f66db87893cf6b4734c01b5101f98419"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "d558497ffabb8382ed93727539f1a2d3"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "10e710913f15ec66c801e2c88bb8e945"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "6d38d64b3be9f6495983882660d6d1fd"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "eec9a259e6760fffa577d020e040021e"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "71a960c02ab3c7770e27a5c0f84f74b6"
  },
  {
    "url": "web/html/css.html",
    "revision": "3dbb404b660a001b4989df4aa04bd50c"
  },
  {
    "url": "web/html/html.html",
    "revision": "b8c6141f3a957a7e092c9f5faf4fec86"
  },
  {
    "url": "web/html/实例.html",
    "revision": "d152a43ef2b090ea162c681935147dbc"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "cfc96e9fa2bd1aac59588c2f56a5457f"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "baa33d109be874420d3c98dca1e429a5"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "5737caf8ed829e77eb772996611ef6a2"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "408b753e5865907fc42e601dbe4d0702"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "6a7e0d2ead19c20a5fc96c0b1821618a"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "f2115aa3eb4f7cff0dd279945f6e577d"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "0362e04a6a260b99c2f12b13e0eb47d4"
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
