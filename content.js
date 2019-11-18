var title = document.getElementsByTagName("title")[0];
var meta = document.getElementsByTagName('meta');
var viewtext_base_url = "https://www.google.com/";

for (var i = 0; i<meta.length;i++)
{
    var metas = meta.item(i);
    if(metas.getAttribute('name') == 'description')
        description = metas.getAttribute('content');
    // if(metas.getAttribute('name') == 'keywords')
    //     keywords = metas.getAttribute('content');
}
if(title.textContent.includes("videos")){
    // console.log("yes");
    var newurl = viewtext_base_url;
    chrome.extension.sendRequest({redirect: newurl});
}
else if(description.includes("videos")){
    var newurl = viewtext_base_url;
    chrome.extension.sendRequest({redirect: newurl});
}
else{
    console.log("Not found any videos word in title or meta description.")
}