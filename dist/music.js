const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "if",
        artist: '火影剧场版《失落之塔》',
        url: 'http://music.163.com/song/media/outer/url?id=809609.mp3',
      },
      {
        name: "secret base",
        artist: '未闻花名',
        url: 'http://music.163.com/song/media/outer/url?id=33911781.mp3',
      },
      {
        name: 'next to you',
        artist: '生命的准则',
        url: 'http://music.163.com/song/media/outer/url?id=29816800.mp3',
      },
    ]
});
