$(function() {
    $.get("https://api.jsonbin.io/b/61758cfd9548541c29c7e42c/7", function(posts) {
        for (post of posts) {
            let div = $('<div class=container>');
            let div_blog = $('<div class="blog">');
            let div_label = $('<div class="label">');
            let avatar = $('<img src="">').attr('src', post.author.avatar);
            let creatTime = $('<small class="date">').text(post.creatTime);
            let author_name = $('<small class="author">').text(post.author.firstname + " " + post.author.lastname);
            let article_image = $('<img src="">').attr('src', post.article.image);
            let div_blog_title = $('<div class="blog_title">');
            let article_title = $('<p>').text(post.article.text);
            let div_like_button = $('<div class="like_button">');
            let button = $('<input type="image" src="res/pictures/Like Button.jpg" alt="Like Button"></input>');

            div_label.append(avatar);
            div_label.append(author_name);
            div_label.append(creatTime);


            div_blog_title.append(article_title);

            div_like_button.append(button);

            div_blog.append(div_label);
            div_blog.append(article_image);
            div_blog.append(div_blog_title);
            div_blog.append(div_like_button);


            div.append(div_blog);
            $('body').append(div)
        }

    });
})

//Dropdown Menu

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".dropbtn") && !event.target.matches(".dropbtn #profil_pic_nav")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};