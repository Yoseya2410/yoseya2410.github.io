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
    "revision": "5aef94ed4699858d8d700a79cc1f4986"
  },
  {
    "url": "addition/json.html",
    "revision": "d1ece7a50d617172dea3b6986ec3544c"
  },
  {
    "url": "addition/latex.html",
    "revision": "4b1d43ce91f4f6e85b987e39ea9a0aa7"
  },
  {
    "url": "addition/markdown.html",
    "revision": "920269eacc1b03719ae8a097a5a2de72"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "8bd70f79e533ff8c0ce8be3bb73a5a74"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "0cfa0f99589acb8b57194d78aab1f71d"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "746b275052a2d499cd49c462f3bd1645"
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
    "url": "assets/js/11.6a7b4b46.js",
    "revision": "99491685e4583b1692d5b704b3b8f9ad"
  },
  {
    "url": "assets/js/12.a6cb48d5.js",
    "revision": "7aeadfa181d18b6bdd7deee6ab74218f"
  },
  {
    "url": "assets/js/13.42187ce4.js",
    "revision": "be6810c5b76f2e99f306c404f4f06e62"
  },
  {
    "url": "assets/js/14.f2ed1e08.js",
    "revision": "7c01032f40f656294127c1ae0b265526"
  },
  {
    "url": "assets/js/15.e057374a.js",
    "revision": "02ae86dfcaff302589c44c2560481f5a"
  },
  {
    "url": "assets/js/16.fa39f2ce.js",
    "revision": "9944c468c06a1f1fa83d6262d2dc85ee"
  },
  {
    "url": "assets/js/17.02171e07.js",
    "revision": "8e8df39523db77572dcc8b992479d7af"
  },
  {
    "url": "assets/js/18.7abd3dd5.js",
    "revision": "ebc99e61256c91e6087bbb33c09719f1"
  },
  {
    "url": "assets/js/19.ffd1dd38.js",
    "revision": "1851b0f2cb4046fe460d051b1a1f8cd6"
  },
  {
    "url": "assets/js/20.57eee8ff.js",
    "revision": "fd4bc8649341d0f74b0d510b696e1286"
  },
  {
    "url": "assets/js/21.9fbe8c53.js",
    "revision": "1f47c7c7b2a98e8b8397011302f073bf"
  },
  {
    "url": "assets/js/22.e15d9238.js",
    "revision": "953649301d434acfe653de338cdfadec"
  },
  {
    "url": "assets/js/23.a8230e89.js",
    "revision": "69339aae88fb62d564b855f5002a2673"
  },
  {
    "url": "assets/js/24.94dc4ec2.js",
    "revision": "57c1114e08d63540e2d1775ddd43b913"
  },
  {
    "url": "assets/js/25.2884e6e6.js",
    "revision": "e84629aa863c7f9172cfea18b1ecd0b0"
  },
  {
    "url": "assets/js/26.5df7d521.js",
    "revision": "fdd9d22a718efaf42ca6e99820395036"
  },
  {
    "url": "assets/js/27.d7b79bbc.js",
    "revision": "64958508b0d13a977498076d35761ad5"
  },
  {
    "url": "assets/js/28.887ca2ef.js",
    "revision": "f703407a188c53cd2285f7fa5d6f009d"
  },
  {
    "url": "assets/js/29.70e028d0.js",
    "revision": "0c0f9828ac0c39677ea35e3ed5dc2b2d"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.18249510.js",
    "revision": "01b9196a0131b4d32727a6021bf86ad3"
  },
  {
    "url": "assets/js/31.c03133a8.js",
    "revision": "7e546519f7b00f03424c1193681f47d0"
  },
  {
    "url": "assets/js/32.9e442e58.js",
    "revision": "1beabf288dc2f58eb1a1868a8efc4dd5"
  },
  {
    "url": "assets/js/33.31763d4f.js",
    "revision": "37ca7f60a265a637d8ab974a7e849dfd"
  },
  {
    "url": "assets/js/34.2aae7325.js",
    "revision": "0e5a02d712b697033cdb8a69e5905076"
  },
  {
    "url": "assets/js/35.95da57a3.js",
    "revision": "2f4b2b15d24c4b73c9469c7f0a82415d"
  },
  {
    "url": "assets/js/36.dda16a0e.js",
    "revision": "bb866cfa5989acfb834cbbef10955cc5"
  },
  {
    "url": "assets/js/37.d7da9c67.js",
    "revision": "800b56fb5c84ea989782fd34bb133fa5"
  },
  {
    "url": "assets/js/38.fa5431db.js",
    "revision": "2029293a4756f56a02306321dbcf0c1b"
  },
  {
    "url": "assets/js/39.0d89c26e.js",
    "revision": "6cc707a59308cc14e5be08eb1d2bd977"
  },
  {
    "url": "assets/js/4.0f006cbd.js",
    "revision": "9771d4f7844bcd6a1028eec666b6efb3"
  },
  {
    "url": "assets/js/40.069a1f93.js",
    "revision": "4fbe3269f79f50514c65adc2b40b00ab"
  },
  {
    "url": "assets/js/41.c6e5c512.js",
    "revision": "cf81ff075e081d233794b1c96fff7e37"
  },
  {
    "url": "assets/js/42.b1f979f5.js",
    "revision": "9efe9748b5c0ee8a56d370d0cdb9919c"
  },
  {
    "url": "assets/js/43.8ce30eaf.js",
    "revision": "9e3d4f59e5815c4d6f49b86441203609"
  },
  {
    "url": "assets/js/44.80771635.js",
    "revision": "cdb8bb7efc56e2fcf9361c9af4148b98"
  },
  {
    "url": "assets/js/45.404373a7.js",
    "revision": "27141328850cfe5db32dc4ac6f19d452"
  },
  {
    "url": "assets/js/46.54f20de9.js",
    "revision": "41a50996c847376358852019e569226e"
  },
  {
    "url": "assets/js/47.da3bcb77.js",
    "revision": "966d9a2f576d2cf666dfc9e1ffcb884d"
  },
  {
    "url": "assets/js/48.9f1d2706.js",
    "revision": "315e53f90f9f6518ccf5194752272945"
  },
  {
    "url": "assets/js/49.8d84bcaa.js",
    "revision": "45cbf2141f555e929c27929c5a24db61"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.fd49beae.js",
    "revision": "7222938561444057eff475b125173b44"
  },
  {
    "url": "assets/js/51.9e47a671.js",
    "revision": "8808631084fcad2fb00865b0609718e1"
  },
  {
    "url": "assets/js/52.f986b654.js",
    "revision": "dd29f99ccaaf3418e6852232daf49de3"
  },
  {
    "url": "assets/js/53.2f8716c2.js",
    "revision": "dd61b9f908f7e8ab60aec9cf8059c8a9"
  },
  {
    "url": "assets/js/54.92cbd27b.js",
    "revision": "db63db3542c2e6746904a7bac2f5f69e"
  },
  {
    "url": "assets/js/55.7a6a8f53.js",
    "revision": "a7e9460a7954bb323210ca3bfd390a5c"
  },
  {
    "url": "assets/js/56.26f72940.js",
    "revision": "41180d7cc23f5d8644889b58de7f62e0"
  },
  {
    "url": "assets/js/57.4547cecc.js",
    "revision": "fbf9a079c60c17502490c50619b3bdcf"
  },
  {
    "url": "assets/js/58.040e2644.js",
    "revision": "b35fa439b050ef62c7636f5c6f62686c"
  },
  {
    "url": "assets/js/59.01cdc70f.js",
    "revision": "d4984c5731484ce43464ce2b6ccdd9c3"
  },
  {
    "url": "assets/js/6.001f1b42.js",
    "revision": "72d8f108a866484e9869f64ff049fe2a"
  },
  {
    "url": "assets/js/60.8066b9c9.js",
    "revision": "b8b46c8825727184c7b461ce15e16fa3"
  },
  {
    "url": "assets/js/61.808d74a1.js",
    "revision": "1465aff8eb85a131c1173e98d5c47442"
  },
  {
    "url": "assets/js/62.4386c136.js",
    "revision": "68b71f1003ed8309ba487bd459410fa4"
  },
  {
    "url": "assets/js/63.e4b6d10f.js",
    "revision": "473d0da0648cc8b1b54ff1b21800c9cd"
  },
  {
    "url": "assets/js/64.85913372.js",
    "revision": "c036a23d70b60480da7895afbd02cac4"
  },
  {
    "url": "assets/js/65.6fadb762.js",
    "revision": "63b7db1800996c437eed1ee7e1a6e36d"
  },
  {
    "url": "assets/js/66.6666d651.js",
    "revision": "3a99f07c729201e7c90dcf592fd1a07a"
  },
  {
    "url": "assets/js/67.a7aa4604.js",
    "revision": "a73e2430a78e56a91e4903b7f34d8e45"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
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
    "url": "assets/js/app.effea539.js",
    "revision": "c983c9b043228b5a77d7eebf7e4d7071"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "54cd19eaa6b7184445f01fe3f470228d"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "c4affa83f355519cbaa4b74cd13bfc8b"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "c13be0e3f2fc793252ce74d7f11e521c"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "defe82e3901e5912229d880d580b2eb4"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "b095b598c574cd2b7f45673dee4c50be"
  },
  {
    "url": "computer/AI/人工智能导论.html",
    "revision": "15428d950b495f313ac0faf9d25f2bf8"
  },
  {
    "url": "computer/c/c.html",
    "revision": "f8066cdfc22d22f8bd395f222d071dbd"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "19ed07226343ee6d9c0a4acacf59b2b5"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "03eb43f7159435c5defd78e665cc486a"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "974209ec37a699ef2c14dd64ab436866"
  },
  {
    "url": "computer/python/python.html",
    "revision": "19eaa64f9f009d027449a23f55f463a2"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "7cf5fd723be1766c7b2e0c46855dfcab"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "be56ef630d2cb9f8b4a1aa110a633027"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "e67338d7cb4b31d4de78fc3a7c97d337"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "0c33c8b0ac9686c3788c0a5b5dd76873"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "e5ad67bb0ab71ffb6d8efc543b806424"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "ce2bfcd89ee338cb1172af618382ab3e"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "e7e61c25cc57d04a51c0569dab0b416d"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "f00aa4266edef08a933d9eb15c8a70cd"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "07b547db9e864a6a85695aadc0be59e0"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "f7d0ffd5e7937bf3c7d3a7b89585b591"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "e871a4566ea7f9bace021d59cdf4b945"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "2499bce3adcd689382186eb0a358a80e"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "d1516c0a55fb7c5fb6290f4e6ccde35b"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "9bae97711a8b47ef63abad6f18f18bd6"
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
    "revision": "0574bcf1db9b1adebda559e4eca99ade"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "bbedeb391e3f20736ed96d54b930d690"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "6cb9fe6dff6d9358da919a3764d42251"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "aa928d8da48a7f3081782575499b4135"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "2551bbbb778b3ac1b8b5d583339019f6"
  },
  {
    "url": "physics/光学.html",
    "revision": "9cb93b3a69feaf0d4d1056390708dd06"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "8ab7c33673c492b0a262cf7f7b58b5dd"
  },
  {
    "url": "physics/力学.html",
    "revision": "0661163c68eabf506dfbe403dc236979"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "e884cadebf215d000b21d29a0baf8328"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "9d2060fb08cb097cccb4498928607dce"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "33bed6c6ee022e77ee369d3886a83df5"
  },
  {
    "url": "physics/热学.html",
    "revision": "9d080ee3d1586141592df13c0ccbaaf2"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "b5d748ab61df492e1383f6e110e80ff4"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "523721985f646623dfa5df9f3fcb5779"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "72e3642fdf78644626a56efedadd11ff"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "addbba2aef3188d6cbdae9266cfb5e4b"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "da76efae571eb0cedd32bf2b9d6cc1a4"
  },
  {
    "url": "web/html/css.html",
    "revision": "7cc9676237c61bee9a1ac39676f7cdc9"
  },
  {
    "url": "web/html/html.html",
    "revision": "e075e15b01e8ca2638bc127abeec6a17"
  },
  {
    "url": "web/html/实例.html",
    "revision": "1462d97c9630aaa4209e12a1b84d23d5"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "2168b700a399d517529cbc34c7a7859c"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "418946fd304d56323cfcc7f920ee40b1"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "5c030b163f9f849d9b39cdebe9e9234e"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "edca54589a94f00092b5a3b8ac31cd76"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "36f1d0c57a6cc3a8fbe7a34f0b815117"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "c55c5e5f822cf684d638b07e12b0f7d8"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "7b8277c285f80fadf57c322c896de31e"
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
