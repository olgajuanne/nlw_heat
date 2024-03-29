
  const LinksSocilMedia = {
    github: 'olgajuanne',
    youtube: 'channel/UCb0cXdGPYdlVA6a4eZcGKcQ',
    facebook: 'olgajuanne',
    linkedin: 'in/olga-nunes-155b49a2/',
    twitter: 'OlgaJSN'
  }

  function changeSocialMediaLinks(){
        
    for (let li of socialLinks.children){
      const social = li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${LinksSocilMedia[social]}`
      }
  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocilMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  }

  getGitHubProfileInfos()