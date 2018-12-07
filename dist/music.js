const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "未闻花名",
        artist: '未闻花名',
        url: 'http://www.ytmp3.cn/down/48499.mp3',
      },
      {
        name: 'next to you',
        artist: 'Ken Arai',
        url: 'http://www.ytmp3.cn/down/33709.mp3',
      },
    ]
});
