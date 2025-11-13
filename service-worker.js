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
    "revision": "0bbda0ec09a88364cc58816846edb60f"
  },
  {
    "url": "addition/git.html",
    "revision": "bd0081e3cbe155bcfe74f8e452223d28"
  },
  {
    "url": "addition/json.html",
    "revision": "18be959e4363dab03bc20d6bc20cd750"
  },
  {
    "url": "addition/latex.html",
    "revision": "1efe808516e272eadb491d40374d8b31"
  },
  {
    "url": "addition/markdown.html",
    "revision": "b6340bb171aacaa647627c60a0fac07a"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "3266de58417238972cfead897edea133"
  },
  {
    "url": "addition/xml.html",
    "revision": "91947bf276858734ccd2f3a267eb4b15"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "7031b00c725379b9a4944173d671ea87"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "3fdc1c0382ee16473991351a71e2396a"
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
    "url": "assets/js/10.2b3e4369.js",
    "revision": "549f00ccf747bdcd7095e3fdaa0b12d3"
  },
  {
    "url": "assets/js/11.c05c1ae2.js",
    "revision": "a019e403e376a713366f002acb5e2695"
  },
  {
    "url": "assets/js/12.13f86ccb.js",
    "revision": "5c8a7f261763c66219c6e18403095741"
  },
  {
    "url": "assets/js/13.187928bb.js",
    "revision": "37c198f452e6903e7c91af56886b3077"
  },
  {
    "url": "assets/js/14.6e4bf31a.js",
    "revision": "e9d33c68870b370d20f9172176a0e62b"
  },
  {
    "url": "assets/js/15.68d8aff1.js",
    "revision": "f4171d1adadb0cb4e90fd3eb3d80b5ed"
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
    "url": "assets/js/18.3c65c578.js",
    "revision": "1e888ed867821210103a776df7d974bb"
  },
  {
    "url": "assets/js/19.02230bb1.js",
    "revision": "a94d50a9dfc0156b35a55d5636672615"
  },
  {
    "url": "assets/js/20.18ffbb2a.js",
    "revision": "f10a65b7ad5b3550ef0b8b0c16438383"
  },
  {
    "url": "assets/js/21.d347c1ba.js",
    "revision": "1b215160c576b49ab31fda46157950ed"
  },
  {
    "url": "assets/js/22.f16cbb4f.js",
    "revision": "280a76235d0c89106fa1f2238577b0c7"
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
    "url": "assets/js/25.5d0678ff.js",
    "revision": "dd5fad2dc67f5074a79e4e9c2ebcaa58"
  },
  {
    "url": "assets/js/26.54b969b5.js",
    "revision": "7d5b1242da836c7caa23bb8dd4a66626"
  },
  {
    "url": "assets/js/27.824ccefa.js",
    "revision": "db4c3697197515dde827353dab133fb1"
  },
  {
    "url": "assets/js/28.f86e00a5.js",
    "revision": "96454e93904d3ba7741198260697c02e"
  },
  {
    "url": "assets/js/29.473be1f7.js",
    "revision": "c4563be11487bccef6c4756b3d1180a6"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.01f00c32.js",
    "revision": "90a09d13f31e360310ce37fcb936e672"
  },
  {
    "url": "assets/js/31.91ef56ba.js",
    "revision": "cda69178e451b0c73f3cdb88cee84408"
  },
  {
    "url": "assets/js/32.1b89fea7.js",
    "revision": "92cfaff418f6f88f5978c9ed4d3fc416"
  },
  {
    "url": "assets/js/33.585d17fa.js",
    "revision": "4db656c8a5ad78580189076abef6918d"
  },
  {
    "url": "assets/js/34.3015a1c3.js",
    "revision": "c857b49adbecc0174c914be5bf2aa527"
  },
  {
    "url": "assets/js/35.e962becf.js",
    "revision": "565f179ed5ffe2d76894909ff42bf7be"
  },
  {
    "url": "assets/js/36.38f936fc.js",
    "revision": "dfd05274cb3ca7dfa40b494efafc1e20"
  },
  {
    "url": "assets/js/37.9f0a2884.js",
    "revision": "6688651d467cb46d57699c310d1a769c"
  },
  {
    "url": "assets/js/38.c174bb5c.js",
    "revision": "2e685d57e69770eeb2819a1e693856dd"
  },
  {
    "url": "assets/js/39.74e08670.js",
    "revision": "b513f46b0f709773e477d0cabd1ee2f6"
  },
  {
    "url": "assets/js/4.7cad207b.js",
    "revision": "a510b1d49495ab9ac364527a8660a4ea"
  },
  {
    "url": "assets/js/40.75848d5c.js",
    "revision": "6f4a09eba16273c0c48756144b8b59cc"
  },
  {
    "url": "assets/js/41.8d7ea6e5.js",
    "revision": "74004b316598e323ba09a5dfa9d6bbbd"
  },
  {
    "url": "assets/js/42.8b1e64be.js",
    "revision": "efd2bbbef8f6701b2ea65971a51ca8b7"
  },
  {
    "url": "assets/js/43.3bd304bb.js",
    "revision": "5f6dba6c0e35386116ac877a60eac796"
  },
  {
    "url": "assets/js/44.58c88593.js",
    "revision": "5616b86ecddab2d23d0685518e42ee26"
  },
  {
    "url": "assets/js/45.ef34beb3.js",
    "revision": "3f4a827d1466667bf01542a9f44473be"
  },
  {
    "url": "assets/js/46.7d212149.js",
    "revision": "b80db097b03fbd34b975dcbfe6fa85e9"
  },
  {
    "url": "assets/js/47.27161a27.js",
    "revision": "94e0e40b8312b15143d496484982a8ad"
  },
  {
    "url": "assets/js/48.06620174.js",
    "revision": "9bcc17b625ba0f0b2ebf1f1b7525dfb3"
  },
  {
    "url": "assets/js/49.77abd0d0.js",
    "revision": "d7d4d2a208dc153eba2543b6ddf40ab3"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.8b0cc2f3.js",
    "revision": "82e874c9469eb797a09f1f7edb3e4e73"
  },
  {
    "url": "assets/js/51.90cf60d1.js",
    "revision": "156753100b1dd7a08ab17a21f58d6923"
  },
  {
    "url": "assets/js/52.0a7ccfc2.js",
    "revision": "6c6a50af6ba3b1e59601a2d606caccbb"
  },
  {
    "url": "assets/js/53.3bd409eb.js",
    "revision": "1dff13691a70b0cb8d7c8386c8aabdb5"
  },
  {
    "url": "assets/js/54.108bded5.js",
    "revision": "00d5352fe57bbd90b2acc8ca200ba266"
  },
  {
    "url": "assets/js/55.2d9ebe50.js",
    "revision": "aee36169c3a3fc44a7572e5b9d6a703d"
  },
  {
    "url": "assets/js/56.343ba76c.js",
    "revision": "96f82fd7f23d8b35d82d767e6f4c098e"
  },
  {
    "url": "assets/js/57.3e35c8fd.js",
    "revision": "33595bbc81bdf0177a82023c499a8030"
  },
  {
    "url": "assets/js/58.227944f8.js",
    "revision": "ce9cbf3054a0a8626efba3501415cbd6"
  },
  {
    "url": "assets/js/59.8093460c.js",
    "revision": "c3f077670ff7d7d50c376f254bf7111b"
  },
  {
    "url": "assets/js/6.3712678b.js",
    "revision": "c8dac902c667c83941b8647430208808"
  },
  {
    "url": "assets/js/60.08dbd5e8.js",
    "revision": "126d3b214a8bfcfd7c593218a37e6faf"
  },
  {
    "url": "assets/js/61.96b2eb08.js",
    "revision": "207a7e304fc1ef5d809458005c1ea303"
  },
  {
    "url": "assets/js/62.57a73104.js",
    "revision": "bc63a93777cbcf8491a952a89721eeb1"
  },
  {
    "url": "assets/js/63.2f2a98b7.js",
    "revision": "78283709d2db41c6edeb3c4711b59e32"
  },
  {
    "url": "assets/js/64.6c8cd34c.js",
    "revision": "cc0758646ccdfddd5f24451297b1a4d5"
  },
  {
    "url": "assets/js/65.b6cc53d8.js",
    "revision": "4fcd2a7fa3d9003410e9ad023d83caeb"
  },
  {
    "url": "assets/js/66.25d5c24a.js",
    "revision": "f18babdd5414659d754745d350e4ad60"
  },
  {
    "url": "assets/js/67.a1f49a41.js",
    "revision": "b8875dd1e10112a9ae0b725b7ebf75d9"
  },
  {
    "url": "assets/js/68.8ba99be3.js",
    "revision": "8959c11602d355518e876bae00776c94"
  },
  {
    "url": "assets/js/69.9ec49965.js",
    "revision": "03d926b855494e6de8b10a2380a4453f"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.f5722e9d.js",
    "revision": "9d44c14d7d8825efc113c2dc063c86ab"
  },
  {
    "url": "assets/js/71.c64f2851.js",
    "revision": "f20d5428a91a8e052949385bb3caba2b"
  },
  {
    "url": "assets/js/72.f372e85d.js",
    "revision": "2f443b52cfabe0d2741b343ac4a3cb8e"
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
    "url": "assets/js/app.77209835.js",
    "revision": "ca07ebbe24cc7b4913fdfcb50a54b0b0"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "c2c967b5b061a5326dd4dd9d66dd3c5d"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "7c44268bab52d420ae85d3165135b5c3"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "da4c8aeafdf776edbd8fe9d0792b070a"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "d1433f71d630cce86a7ccd9abf85ff11"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "8ce44aab10b548507cda48d5687e5378"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "aa451ce5db02ae3f4e867643531a39f0"
  },
  {
    "url": "computer/c/c.html",
    "revision": "52a9cac2a785381ca4bf9e9f22207d84"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "460b72d1c4371cdf9c6fff94ce1b4ec0"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "01d2ffbf7b07d1c282ea6a0068c124d5"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "9fa590387169993a6b30ee8034d8f3fd"
  },
  {
    "url": "computer/Java/java.html",
    "revision": "c533160e1fd1eb6625f8c13b5d0beb1f"
  },
  {
    "url": "computer/python/python.html",
    "revision": "fce331fe46a12d06742749a247a7ac21"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "7a85e21be13b49e4f1f8f9c166fe2268"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "7024446fa1f33d0015d2006979764aa3"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "09dc449dc66b5593300de3cb665abfe2"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "0077a92f2e348dba4f270d092ec1e535"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "d97d0082940e23d53b0c619ead4a72a6"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "ecb586c417b5b23a417f41d8aec2c58d"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "90a3dc8f51f23164cd59f4180d5b5b96"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "ff58f211f6adfbc3900d5e684d072682"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "48fed842896487fe187877405678306a"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "14e3f1b5f539f9a27ef451826a778d67"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "84d5b52b50e80a8734191b11899911df"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "2098fcca3e8c2a73860f3765cc8063a5"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "205eb4d4b50bfb63b73cc93f6a086687"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "2d882c8b5336fd68887514cd27f9cb0e"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "35f576b4681655901d492ac8e66022eb"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "a37580649caf2122958ed00fe2e0f383"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "54c888eb4640ba5a0d7d20ac626f2a29"
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
    "revision": "570a6fd77dcb7e8860dba3a301e57927"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "a21042a6fc59db6664252291a8e5053f"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "520d74ecf5a0e5ab67085550b752d1a6"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "e28f663b4585c5f70bb3f2a167fc38fa"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "639b8ab7c57fa40de0bd8521d5a7c5ba"
  },
  {
    "url": "physics/光学.html",
    "revision": "cd16c072210cbf1c95fa499018f2a5f8"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "1f2ea5d15a98896c8540537d335bf320"
  },
  {
    "url": "physics/力学.html",
    "revision": "4e1dd0a8510e9d1b227c8b84898b41b0"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "7311d86ff4c43b2659d9a85f6eda6521"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "0844df29257c024b513d99aca7519d64"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "9f1b52974df8bb7fe2ca368eb039d4bd"
  },
  {
    "url": "physics/热学.html",
    "revision": "8826f2ef2b27cf103c4c634a8da3c80c"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "08a9770bce8f735595bcbeb666802d92"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "c399b99caf6d626a4026034404f2e087"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "eb136b55bc1be16fdf240c61408a9eba"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "e32c050a475ec7f983164d120fb64a1d"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "d2dad80abdcf60fd8b17b80494817c2e"
  },
  {
    "url": "web/html/css.html",
    "revision": "9d0af6960ac98fd3f85a83b50c81477d"
  },
  {
    "url": "web/html/html.html",
    "revision": "1d208cf73c747060d1596c877a8908ae"
  },
  {
    "url": "web/html/实例.html",
    "revision": "17bfc2a81d02d8d8923da17dd7ad02f6"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "9963deb5db135be0cd6c71652a334be8"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "8f1c65c69261b71d419ecc3f95fa6c59"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "20a45e426931f84fa883e15e04c624e5"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "bc85a7ded5275341d63492c7e522e724"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "97eef81398354dc9a3cb5ad083b005b3"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "ffe7d701e016b773d5ba2d27cb285107"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "fdd1f8f5fef661bc7692bcdf2ffaa5a0"
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
