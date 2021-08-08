$(function() {
  setTimeout(() => {
    var markdownToc = $('#markdown-toc');
    var markdownTocHtml = '';
    if (markdownToc.text().length > 0) {
      markdownToc.hide();
      markdownTocHtml = markdownToc.html();
    }
    $('.toc').html(
      '<ul class="table-of-content">' + markdownTocHtml + '<li><a href="#comments">Comments</a></li>' + '</ul>'
    );

    // var postRight = $('.post-right');
    // if (postRight.length > 0) {
    //   var postRightWidth = postRight.css('width');
    //   postRight.css({
    //     position: 'fixed',
    //     width: postRightWidth
    //   });
    //   var windowHeight = $(window).height();
    //   var postRightHeight = postRight.height();
    //   var offsetTop = postRight.offset().top;
    //   // var toTopHeight = adblock ? 40 + 54 : 40;
    //   if (postRightHeight > windowHeight) {
    //     postRight.find('.panel-default').css({
    //       height: parseInt(windowHeight) - 40 + 'px'
    //     });
    //     // postRight.find('.panel-body').css({
    //     //   overflow: 'hidden',
    //     //   height: parseInt(windowHeight) - 82 + 'px'
    //     // });
    //     postRight.find('.table-of-content').css({
    //       overflow: 'auto',
    //       height: parseInt(windowHeight) - 86 + 'px'
    //     });
    //   }
    //   var offsetTopHeight = adblock ? 72 + 54 : 72;
    //   if (offsetTop > offsetTopHeight) {
    //     postRight.css({
    //       top: '20px'
    //     });
    //   }
    // }
    // back to top
    var backToTop = $('.back-to-top');
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      // var flog = adblock ? scrollTop >= 104 : scrollTop >= 50;
      // if (flog) {
      //   postRight.css({
      //     position: 'fixed',
      //     top: '20px'
      //   });
      // } else {
      //   postRight.css({
      //     position: 'fixed',
      //     top: adblock ? 124 - scrollTop + 'px' : 70 - scrollTop + 'px'
      //   });
      // }
      if (scrollTop > 200) {
        backToTop.addClass('back-to-top-show');
      } else {
        backToTop.removeClass('back-to-top-show');
      }
    });
     $('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0}, 200);
  return false;
 });
  }, 50);
});


const mycodeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = mycodeBlocks[index].innerText;

  copyCodeButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(code);
    copyCodeButton.classList.add('copied');

    setTimeout(() => {
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});
