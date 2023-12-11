let tweets = [];

  function displayTweet(){
    const postFeed = document.getElementById("post-feed");
    postFeed.innerHTML = '';

    for (let i = 0; i < tweets.length; i++){
      const listItem = document.createElement("p");
      const post = document.createElement("div");
      const postAvatar = document.createElement("div");
      const imgProfile = document.createElement("img");
      const postBody = document.createElement("div");
      const postHeader = document.createElement("div");
      const postHeaderText = document.createElement("div");
      const h3Post = document.createElement("h3");
      const postHeaderDescription = document.createElement("div");
   
      

      listItem.textContent = tweets[i];
      listItem.classList.add("tweet-text");
      post.classList.add("post");
      postAvatar.classList.add("post__avatar");
      imgProfile.src = "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
      alt="";
      postBody.classList.add("post__body");
      postHeader.classList.add("post__header");
      postHeaderText.classList.add("post__headerText");
      h3Post.innerHTML = 'Somanath Goudar<span class="post__headerSpecial"><span class="material-icons post__badge"> verified </span>@somanathg</span>';
      postHeaderDescription.classList.add("post__headerDescription");


      
      postFeed.appendChild(post);
      post.appendChild(postAvatar);
      postAvatar.appendChild(imgProfile);
      post.appendChild(postBody);
      postBody.appendChild(postHeader);
      postHeader.appendChild(postHeaderText);
      postHeader.appendChild(h3Post);
      postBody.appendChild(postHeaderDescription);
      postHeaderDescription.appendChild(listItem);
     
    }
  }
  

  function tweetButton(){
    const tweetInput = document.getElementById("tweet-input").value;
    if(!tweetInput){
      alert("Dont leave it blank.");
    }
    else{
      tweets.push(tweetInput);
       document.getElementById("tweet-input").value = '';
       displayTweet();
    }
  }
