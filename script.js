// 1. DATA 
const COURSE_DATA = {
    "ARCH 101": { link: "arch101.html", title: "Basic Design Studio I", tag: "Architecture", files: "16 files", codeNum: "#101" },
    "ARCH 102": { link: "arch102.html", title: "Architectural Drawing I", tag: "Architecture", files: "2 files", codeNum: "#102" },
    "ARCH 111": { link: "arch111.html", title: "Basic Design Studio II", tag: "Architecture", files: "8 files", codeNum: "#111" },
    "ARCH 112": { link: "arch112.html", title: "Architectural Drawing II", tag: "Architecture", files: "3 files", codeNum: "#112" },
    "ARCH 202": { link: "arch202.html", title: "History of Architecture", tag: "Architecture", files: "1 files", codeNum: "#202" },
    "ARCH 204": { link: "arch204.html", title: "Building Construction I", tag: "Architecture", files: "8 files", codeNum: "#204" },
    "ARCH 212": { link: "arch212.html", title: "Theory of Architecture", tag: "Architecture", files: "1 files", codeNum: "#212" },
    "ARCH 214": { link: "arch214.html", title: "Building Materials and Components", tag: "Architecture", files: "1 files", codeNum: "#214" },
    "ENR 201": { link: "enr201.html", title: "Engineering Drawing and CAD", tag: "Industrial", files: "5 files", codeNum: "#201" },
    "IEG 201": { link: "ieg201.html", title: "Introduction to Engineering Design", tag: "Industrial", files: "11 files", codeNum: "#201" },
    "MEG 211": { link: "meg211.html", title: "Fundamentals of Materials Engineering", tag: "Industrial", files: "5 files", codeNum: "#211" },
    "MEG 301": { link: "meg301.html", title: "Design of Experiments", tag: "Industrial", files: "7 files", codeNum: "#301" },
    "IEG 321": { link: "ieg321.html", title: "Operation Research-1", tag: "Industrial", files: "8 files", codeNum: "#321" },
    "CIS 103": { link: "cis103.html", title: "Programming Fundamentals I", tag: "CoE, Electives/Shared", files: "9 files", codeNum: "#103" },
    "CIS 104": { link: "cis104.html", title: "Programming Fundamentals II", tag: "CoE", files: "7 files", codeNum: "#104" },
    "MIS 201": { link: "mis201.html", title: "Introduction to Information Systems", tag: "MIS", files: "7 files", codeNum: "#201" },
    "CIS 201": { link: "cis201.html", title: "Fundamentals of Web Design", tag: "CoE", files: "9 files", codeNum: "#201" },
    "CIS 202": { link: "cis202.html", title: "Data Structures", tag: "CoE", files: "6 files", codeNum: "#202" },
    "CIS 221": { link: "cis221.html", title: "Introduction to Database Systems", tag: "CoE", files: "13 files", codeNum: "#221" },
    "SWE 202": { link: "swe202.html", title: "Introduction to Software Engineering", tag: "CoE", files: "6 files", codeNum: "#202" },
    "NES 212": { link: "nes212.html", title: "Data Communications and Computer Networks", tag: "CoE", files: "14 files", codeNum: "#212" },
    "PHL 101": { link: "phl101.html", title: "Critical Thiking", tag: "Electives/Shared", files: "8 files", codeNum: "#101" },
    "SOS 102": { link: "sos102.html", title: "Introduction to Social Science", tag: "Electives/Shared", files: "5 files", codeNum: "#102" },
    "ENG 101": { link: "eng101.html", title: "English Essay Writing", tag: "Electives/Shared", files: "7 files", codeNum: "#101" },
    "ENG 201": { link: "eng201.html", title: "Technical Report Writing", tag: "Electives/Shared", files: "1 file", codeNum: "#201" },
    "ARB 102": { link: "arb102.html", title: "Communication Skills in Arabic", tag: "Electives/Shared", files: "no files", codeNum: "#102" },
    "ARB 202": { link: "arb202.html", title: "Writing Skills in Arabic", tag: "Electives/Shared", files: "no files", codeNum: "#202" },
    "ISL 101": { link: "isl101.html", title: "Foundation of Islamic Culture", tag: "Electives/Shared", files: "no files", codeNum: "#101" },
    "ISL 202": { link: "isl202.html", title: "Financial Awareness", tag: "Electives/Shared", files: "no files", codeNum: "#202" },
    "STT 103": { link: "stt103.html", title: "Probability and Statistics", tag: "Electives/Shared,Math", files: "12 files", codeNum: "#103" },
    "MTH 106": { link: "mth106.html", title: "Discrete Mathematics", tag: "Electives/Shared,Math", files: "6 files", codeNum: "#106" },
    "MTH 301": { link: "mth301.html", title: "Linear Algebra", tag: "Electives/Shared,Math", files: "7 files", codeNum: "#301" },
    "MTH 104": { link: "mth104.html", title: "Calculus-I", tag: "Electives/Shared,Math", files: "4 files", codeNum: "#104" },
    "MTH 204": { link: "mth204.html", title: "Calculus-II", tag: "Electives/Shared,Math", files: "10 files", codeNum: "#204" },
    "PHY 103": { link: "phy103.html", title: "Physics-I", tag: "Electives/Shared", files: "9 files", codeNum: "#103" },
    "PHY 203": { link: "phy203.html", title: "Physics-II", tag: "Electives/Shared", files: "9 files", codeNum: "#203" },
    "CHM 101": { link: "chm101.html", title: "General Chemistry", tag: "Electives/Shared", files: "8 files", codeNum: "#101" },
};

// 2. FUNCTIONS
function setupBackNavigation() {
  const backArrow = document.querySelector('.back-to-home-arrow');
  if (!backArrow) return; 

  if (backArrow.getAttribute('href') === "index.html") {
      backArrow.href = "allcourses.html";
  }
  
  const referrerUrl = document.referrer;
  
  if (referrerUrl) {
    const urlParts = referrerUrl.split('/');
    let referrerFilename = urlParts[urlParts.length - 1]; 
    referrerFilename = referrerFilename.split('?')[0];

    const validBackPages = [
        "allcourses.html",
        "architecture.html",
        "industrial.html",
        "network.html",
        "software.html",
        "electives.html"
    ];

    if (validBackPages.includes(referrerFilename)) {
      backArrow.href = referrerFilename;
    } 
  }
}

function displayFavoriteCourses() {
    const favoriteGrid = document.getElementById('favorite-grid');
    if (!favoriteGrid) return;

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let htmlContent = '';

    if (favorites.length === 0) {
        htmlContent = "<p>Favorite courses will appear here</p>";
    } else {
        favorites.forEach((courseCode) => {
            // Safety check: ensure course exists in data before rendering
            const course = COURSE_DATA[courseCode];
            if (!course) return; 

            const courseClass = "course-code-" + courseCode.replace(/\s/g, "-");

            htmlContent += `
            <a href="${course.link}" class="course-box ${courseClass}">
                <div class="course-header">
                    <span class="course-code">${course.codeNum}</span>
                    <button class="fav favorited"></button>
                </div>
                <h5>${courseCode}</h5>
                <p>${course.title}</p>
                <div class="course-footer">
                    <span class="tag">${course.tag}</span>
                    <span class="info">${course.files}</span>
                </div>
            </a>
            `;
        });
    }
    
    favoriteGrid.innerHTML = htmlContent;

    // Re-attach listeners to the newly created buttons
    favoriteGrid.querySelectorAll('.fav').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
            
            const courseBox = btn.closest('.course-box');
            const courseCode = courseBox.querySelector('h5')?.textContent.trim(); 
            
            if (!courseCode) return;

            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites = favorites.filter((fav) => fav !== courseCode);
            localStorage.setItem('favorites', JSON.stringify(favorites));

            displayFavoriteCourses();
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const logoImg = document.querySelector(".logo img");
  

  let currentRotation = parseInt(localStorage.getItem("themeRotation")) || 0;

  if (themeToggle && themeIcon && logoImg) {
    themeIcon.style.transition = 'transform 0.6s ease-out, opacity 0.3s ease';

    const savedTheme = localStorage.getItem("theme");
    const initialTilt = savedTheme === "light" ? -30 : 0;
    themeIcon.style.transform = `rotate(${currentRotation + initialTilt}deg)`;

    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      themeIcon.src = "moon.png"; 
      logoImg.src = "logo-dark.png"; 
    } else {
      document.body.classList.remove("light-theme");
      themeIcon.src = "sun.png"; 
      logoImg.src = "logo.png"; 
    }

    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.contains("light-theme");
      
      currentRotation += 360; 
      localStorage.setItem("themeRotation", currentRotation);

      if (isLight) {
        // Switch to dark mode
        document.body.classList.remove("light-theme");
        themeIcon.src = "sun.png";
        logoImg.src = "logo.png";
        localStorage.setItem("theme", "dark");
        themeIcon.style.transform = `rotate(${currentRotation}deg)`;
      } else {
        // Switch to light mode
        document.body.classList.add("light-theme");
        themeIcon.src = "moon.png";
        logoImg.src = "logo-dark.png";
        localStorage.setItem("theme", "light");
        themeIcon.style.transform = `rotate(${currentRotation - 30}deg)`;
      }
    });
  }
  
  // Favorites Logic for Course Pages (Add/Remove)
  const favButtons = document.querySelectorAll('.fav');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  favButtons.forEach(btn => {
      const courseBox = btn.closest('.course-box');
      // Check if we are in the grid (h5) or on a course page (h2) or ensure we find the code
      const courseCode = courseBox?.querySelector('h5')?.textContent.trim();
      
      if (courseCode && favorites.includes(courseCode)) {
          btn.classList.add('favorited');
      }
      
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!courseCode) return;

        let currentFavs = JSON.parse(localStorage.getItem('favorites')) || [];
        
        if (btn.classList.contains('favorited')) {
            currentFavs = currentFavs.filter((fav) => fav !== courseCode);
            btn.classList.remove('favorited');
        } else {
            currentFavs.push(courseCode);
            btn.classList.add('favorited');
        }
        localStorage.setItem('favorites', JSON.stringify(currentFavs));
      });
  });

  // Display favorites if we are on the home page
  displayFavoriteCourses();

  // (Download/View)
  const iconWrappers = document.querySelectorAll('.icon-wrapper');
  iconWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', function(e) {
          e.preventDefault(); 
          e.stopPropagation(); 

          let link = this.dataset.link;
          const action = this.dataset.action; 

          if (link) {
              if (action === 'download') {
                  let processedLink = link;
                  if (link.includes('/drive/folders/')) {
                      window.open(processedLink, '_blank');
                      return;
                  }
                  const docPattern = link.match(/docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([a-zA-Z0-9_-]+)/);
                  if (docPattern) {
                      const docType = docPattern[1];
                      const fileId = docPattern[2];
                      let format = 'pdf'; 
                      
                      if (docType === 'presentation') { format = 'pptx'; } 
                      else if (docType === 'document') { format = 'docx'; } 
                      else if (docType === 'spreadsheets') { format = 'xlsx'; }
                      processedLink = `https://docs.google.com/${docType}/d/${fileId}/export?format=${format}`;
                  } else {
                      const fileIdMatch = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
                      if (fileIdMatch) {
                          const fileId = fileIdMatch[1];
                          processedLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                      }
                  }
                  const a = document.createElement('a');
                  a.href = processedLink;
                  a.download = '';
                  document.body.appendChild(a); 
                  a.click();
                  document.body.removeChild(a);
              } else {
                  window.open(link, '_blank');
              }
          }
      });
  });

  // TAB Logic
  const tabs = document.querySelectorAll(".tab");
  if (tabs.length > 0) {
      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              tabs.forEach(t => t.classList.remove("active"));
              tab.classList.add("active");
          });
      });
  }
  
  setupBackNavigation();
});

// OPTIONAL SEARCH
const searchInput = document.getElementById('course-search');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const courses = document.querySelectorAll('.course-box, .category-card');

    courses.forEach((course) => {
      const text = course.textContent.toLowerCase();
      course.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });
}