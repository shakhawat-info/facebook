// nav start
const NavList = document.querySelectorAll('.navIcons li');

NavList.forEach((item) => {
  item.addEventListener('click', function () {
    NavList.forEach((deactive) => deactive.classList.remove('active'));
    this.classList.add('active');
  });
});
// nav end

// poster box start
let poster = document.querySelector(".poster");
let posterHidden = document.querySelector(".posterHidden");
poster.style.display = "none";
function showPoster() {
  poster.style.display = "grid";
  posterHidden.addEventListener("click", () => {
    poster.style.display = "none";
  });
}
// poster box end

// posted item start
let postingText = document.querySelector(".postingText");
let upload = document.querySelector(".uploadbtn");
let NewsFeedArrey = [];

upload.addEventListener("click", () => {
  if (postingText.value) {
    NewsFeedArrey.push(postingText.value);
    postItem();
    poster.style.display = "none";
    postingText.value = ''
  }
});

function postButton() {
  if (postingText.value) {
    upload.style.backgroundColor = "#0e7be0";
    upload.style.color = "#fff";
  } else {
    upload.style.backgroundColor = "";
    upload.style.color = "#000";
  }
}

let feedBox = document.querySelector(".feedBox");
function postItem() {
  feedBox.innerHTML = "";
  NewsFeedArrey.map((input) => {
    feedBox.innerHTML += `
      <div class="postItem">
        <div class="top">
          <img src="image/profile.jpg" alt="profile" class="profile">
          <div class="postinfo">
            <h3>Md. Shakhawat Hossain</h3>
            <div class="timeSecurity">
              <span>time</span>
              <select name="postVisibility" id="postVisibility">
                <option value="#">public</option>
                <option value="#">friends</option>
                <option value="#">custom</option>
                <option value="#">only me</option>
              </select>
            </div>
          </div>
          <button type="button" class="postInfoMore"><i class="fa-solid fa-ellipsis"></i></button>
        </div>
        <div class="posted">
          ${input}
        </div>
        <div class="reaction">
          <h5>
            <p class="likes"></p>
            <p class="comments"></p>
          </h5>
          <div class="actions">
            <div class="like item"><i class="fa-solid fa-thumbs-up"></i><span class="likeStatus">Like</span></div>
            <div class="comment item"><i class="fa-regular fa-comment"></i><span>comment</span></div>
            <div class="send item"><i class="fa-brands fa-facebook-messenger"></i><span>send</span></div>
            <div class="share item"><i class="fa-solid fa-share"></i><span>share</span></div>
          </div>
        </div>
      </div>
        `;

    let likebtn = document.querySelector(".like");
    let likeStatus = document.querySelector(".likeStatus");
    let likes = document.querySelector(".likes");

    likebtn.addEventListener("click", () => {
      likebtn.classList.toggle("liked");
      if (likeStatus.innerHTML == "like" ||  likes.innerHTML == '') {
        likeStatus.innerHTML = "liked";
        likes.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> 1'
      } else {
        likeStatus.innerHTML = "like";
        likes.innerHTML= ''
      }

    });

  });
}

