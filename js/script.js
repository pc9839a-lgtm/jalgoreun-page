(function () {
  const CONFIG = {
    kakaoChannelUrl: "http://pf.kakao.com/_tPanX",
    youtubeChannelUrl: "#",
    imageUrl: ""
  };

  function setLinks() {
    const kakaoLinks = document.querySelectorAll('a[href="http://pf.kakao.com/_tPanX"]');
    kakaoLinks.forEach((link) => {
      link.href = CONFIG.kakaoChannelUrl;
    });

    const youtubeLinks = Array.from(document.querySelectorAll("a")).filter((link) => {
      return link.textContent.trim().includes("유튜브");
    });

    youtubeLinks.forEach((link) => {
      link.href = CONFIG.youtubeChannelUrl;
      if (CONFIG.youtubeChannelUrl === "#") {
        link.removeAttribute("target");
        link.addEventListener("click", function (event) {
          event.preventDefault();
          alert("유튜브 채널 주소를 입력해주세요.");
        });
      }
    });
  }

  function setImage() {
    const image = document.getElementById("brandCharacter");
    if (!image || !CONFIG.imageUrl) return;
    image.src = CONFIG.imageUrl;
  }

  function updateFooterYear() {
    const footer = document.querySelector(".jg-footer");
    if (!footer) return;
    footer.setAttribute("data-year", new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLinks();
    setImage();
    updateFooterYear();
  });
})();
