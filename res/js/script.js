$(function() {
    $.get("res/json/posts.json", function(posts) {
        for (post of posts) {
            let div = $('<div class=container>');
            let div_label = $('<div class="label">');
            let avatar = $('<img src="">').attr('src', post.author.avatar);
            let creatTime = $('<small>').text(post.creatTime);
            let article_image = $('<img src="">').attr('src', post.article.image);
            let div_blog_title = $('<div class="blog_title">');
            let article_title = $('<p>').text(post.article.text);
            let div_like_button = $('<div class="like_button">');

            div.append(div_label);
            div.append(avatar);
            div.append(creatTime);
            div.append(article_image);
            div.append(div_blog_title);
            div.append(article_title);
            div.append(div_like_button);
            $('section').append(div)
        }

    });
});