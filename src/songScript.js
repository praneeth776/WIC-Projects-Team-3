function getSong(){
    const songToShow = document.getElementById('song');

    const songs = [
        "https://open.spotify.com/embed/track/6IPwKM3fUUzlElbvKw2sKl?utm_source=generator",
        "https://open.spotify.com/embed/track/0baCR9QLEoMBMDvprSrGQO?utm_source=generator",
        "https://open.spotify.com/embed/track/4GHMgAReTLmOS63ev7tTA5?utm_source=generator",
        "https://open.spotify.com/embed/track/2hE5yEqFqlHlnn3LE1BPqP?utm_source=generator",
        "https://open.spotify.com/embed/track/5enxwA8aAbwZbf5qCHORXi?utm_source=generator",
        "https://open.spotify.com/embed/track/0gEyKnHvgkrkBM6fbeHdwK?utm_source=generator",
        "https://open.spotify.com/embed/track/3CmcswzHOACDjooV1KLULN?utm_source=generator",
        "https://open.spotify.com/embed/track/7Jq4cV3F5puQfUAxL4sHL8?utm_source=generator",
        "https://open.spotify.com/embed/track/4wbDALtjwuwBxtMgjuumoi?utm_source=generator",
        "https://open.spotify.com/embed/track/2fhOljbX79loRcdl47SFye?utm_source=generator",
        "https://open.spotify.com/embed/track/3522qTXDhlpFXC7WgFsZTf?utm_source=generator",
        "https://open.spotify.com/embed/track/2zKGU7t1EE5Npxgf3Zo4qm?utm_source=generator",
        "https://open.spotify.com/embed/track/6zAwSWQywmeEFP11tK7t5W?utm_source=generator",
        "https://open.spotify.com/embed/track/5Uhr87fTMOrVBhc8gNU7Z8?utm_source=generator",
        "https://open.spotify.com/embed/track/1xaTREM89RbIxkcjlpf4Uw?utm_source=generator",
        "https://open.spotify.com/embed/track/3R6kyOmqWcAsqZqqe9CGL0?utm_source=generator",
        "https://open.spotify.com/embed/track/14Zab7jJKwK89fY4RxXl3N?utm_source=generator",
        "https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator",
        "https://open.spotify.com/embed/track/4zXuYQNDmw3dlauyc8q3Kd?utm_source=generator",
        "https://open.spotify.com/embed/track/6xTp4nC8NBRSYMxGqIikSh?utm_source=generator",
        "https://open.spotify.com/embed/track/4jXl6VtkFFKIt3ycUQc5LT?utm_source=generator",
        "https://open.spotify.com/embed/track/3yAlkOEMjk2rH2hZTgvfoH?utm_source=generator",
        "https://open.spotify.com/embed/track/0in4mX3ZUJNmBIyzuQoayG?utm_source=generator",
        "https://open.spotify.com/embed/track/4IKMZtDIqyQDA6a4YvsgpK?utm_source=generator",
        "https://open.spotify.com/embed/track/58dSdjfEYNSxte1aNVxuNf?utm_source=generator",
        "https://open.spotify.com/embed/track/5bn5FRmh9HbVD2fX7HxcAf?utm_source=generator",
        "https://open.spotify.com/embed/track/2Ei5auE9kCmwKB2JZtKPKO?utm_source=generator",
        "https://open.spotify.com/embed/track/63tvJvmgN3dXiQslqHBT7f?utm_source=generator",
        "https://open.spotify.com/embed/track/4KLZOU5V5XuEkvytSgyW6u?utm_source=generator",
        "https://open.spotify.com/embed/track/63UNqAjFomMcZXc2InOxTC?utm_source=generator",
        "https://open.spotify.com/embed/track/0oS6978exXanyIZJD4cdgV?utm_source=generator",
        "https://open.spotify.com/embed/track/7dW84mWkdWE5a6lFWxJCBG?utm_source=generator",
        "https://open.spotify.com/embed/track/3h9T2wLTy4FEKulLDkUjlX?utm_source=generator",
        "https://open.spotify.com/embed/track/754kgU5rWscRTfvlsuEwFp?utm_source=generator",
        "https://open.spotify.com/embed/track/1SsUx7lHTfuiSSB1KfRMdE?utm_source=generator",
        "https://open.spotify.com/embed/track/7EUhSxz4srS8pqh1cENbLB?utm_source=generator",
        "https://open.spotify.com/embed/track/5Q6Xzp25aXYxNJ4B6vBkcf?utm_source=generator"

        
    ];
    const rand = Math.floor(Math.random() * songs.length);
    songToShow.src = songs[rand];
   
}