// Video data structure with video URLs
const videoLibrary = {
    "11": {
        "Maths": {
            "Chatper 1 - Set": {
                "Video 1": "https://www.youtube.com/embed/ckSvQ-R1XX0",
                "Video 2": "https://www.youtube.com/embed/ZsKEx-g3aAA",
                "Video 3": "https://www.youtube.com/embed/KpKnBq08UZo",
                "Video 4": "https://www.youtube.com/embed/dInnWiVDYG4",
                "Video 5": "https://www.youtube.com/embed/bbjUzHWITAI",
                "Video 6": "https://www.youtube.com/embed/RacC2kBEqdE",
                "Video 7": "https://www.youtube.com/embed/uoUvlMhqEuU",
                "Video 8": "https://www.youtube.com/embed/s2hoPd2YKPg",
                "Video 9": "https://www.youtube.com/embed/7TdW6pkB46I",
                "Video 10": "https://www.youtube.com/embed/y0jJnMq0CRw",
                "Video 11": "https://www.youtube.com/embed/5YfshVR9EVI",
                "Video 12": "https://www.youtube.com/embed/dDruYCX0eFI",
                "Video 13": "https://www.youtube.com/embed/1LCkOv-FJhE",
                "Video 14": "https://www.youtube.com/embed/YsLHfD92prk"
            },
            "Chapter 2 - Relations and Functions": {
                "Video 1": "https://www.youtube.com/embed/-vgE-oeS53c",
                "Video 2": "https://www.youtube.com/embed/7dYSTTUomf0",
                "Video 3": "https://www.youtube.com/embed/1nkmlJnvqvI",
                "Video 4": "https://www.youtube.com/embed/JmU6DQspVB8",
                "Video 5": "https://www.youtube.com/embed/rAACEo_t4YM",
                "Video 6": "https://www.youtube.com/embed/rjR5TpnmzjQ",
                "Video 7": "https://www.youtube.com/embed/D62KRPZi124",
                "Video 8": "https://www.youtube.com/embed/nrzFeVNeNQM",
                "Video 9": "https://www.youtube.com/embed/MC9HrbC3zQc",
                "Video 10": "https://www.youtube.com/embed/EpPMDJm-7TE",
                "Video 11": "https://www.youtube.com/embed/BrOQ_Prz5cg",
                "Video 12": "https://www.youtube.com/embed/BugzcwtheVs",
                "Video 13": "https://www.youtube.com/embed/fIuKkMx1pP8"
            }
        },
        // "Physics": {
        //     "Chapter 1": {
        //         "Video 1": "https://www.youtube.com/embed/video3"
        //     }
        // }
    },
    "12": {
        "Maths": {
            "Chapter 1 - Relations and Functions": {
                "Video 1": "https://www.youtube.com/embed/coLzLhW10jI",
                "Video 2": "https://www.youtube.com/embed/J3yU8rjHQ4U",
                "Video 3": "https://www.youtube.com/embed/KrxSbMhEaCs",
                "Video 4": "https://www.youtube.com/embed/-mKmWRsGgI0",
                "Video 5": "https://www.youtube.com/embed/idS2f5xknS0",
                "Video 6": "https://www.youtube.com/embed/oqCmFMBfInQ",
                "Video 7": "https://www.youtube.com/embed/RZPZuGjBtaI",
                "Video 8": "https://www.youtube.com/embed/F12vn3732S8",
                "Video 9": "https://www.youtube.com/embed/bOnSlJZol9Y",
                "Video 10": "https://www.youtube.com/embed/lLn1-HLpECQ",
                "Video 11": "https://www.youtube.com/embed/qKBgxFzFjC4",
                "Video 12": "https://www.youtube.com/embed/l1lhyikeVV4",
                "Video 13": "https://www.youtube.com/embed/W41J0T5qquw"
            },
            "Chapter 2 - Inverse Trigonometric Function": {
                "Video 1": "https://www.youtube.com/embed/TJPjy8h9Rzc",
                "Video 2": "https://www.youtube.com/embed/napTRpvqPrA",
                "Video 3": "https://www.youtube.com/embed/myL3clyl5DI",
                "Video 4": "https://www.youtube.com/embed/56gwWbaEkPo",
                "Video 5": "https://www.youtube.com/embed/6EkCvgPF4EU",
                "Video 6": "https://www.youtube.com/embed/6EkCvgPF4EU",
                "Video 7": "https://www.youtube.com/embed/QMHdlRywgfg",
                "Video 8": "https://www.youtube.com/embed/2b-VublRmRQ"
            },
        },
        // "Chemistry": {
        //     "Chapter 1": {
        //         "Video 1": "https://www.youtube.com/embed/video5"
        //     }
        // }
    }
};

// Show Subjects based on selected class
function showSubjects() {
    const classSelect = document.getElementById("classSelect").value;
    const subjectSelect = document.getElementById("subjectSelect");
    const subjectContainer = document.getElementById("subjectSelectContainer");
    const chapterContainer = document.getElementById("chapterSelectContainer");
    const videoContainer = document.getElementById("videoContainer");
    subjectSelect.innerHTML = '<option value="">Choose Subject</option>';
    chapterContainer.style.display = "none";
    videoContainer.style.display = "none";
    if (classSelect && videoLibrary[classSelect]) {
        Object.keys(videoLibrary[classSelect]).forEach(subject => {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
        subjectContainer.style.display = "block";
    } else {
        subjectContainer.style.display = "none";
    }
}

// Show Chapters based on selected subject
function showChapters() {
    const classSelect = document.getElementById("classSelect").value;
    const subjectSelect = document.getElementById("subjectSelect").value;
    const chapterSelect = document.getElementById("chapterSelect");
    const chapterContainer = document.getElementById("chapterSelectContainer");
    const videoContainer = document.getElementById("videoContainer");
    chapterSelect.innerHTML = '<option value="">Choose Chapter</option>';
    videoContainer.style.display = "none";
    if (subjectSelect && videoLibrary[classSelect][subjectSelect]) {
        Object.keys(videoLibrary[classSelect][subjectSelect]).forEach(chapter => {
            const option = document.createElement("option");
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        });
        chapterContainer.style.display = "block";
    } else {
        chapterContainer.style.display = "none";
    }
}

// Show Videos based on selected chapter
function showVideos() {
    const classSelect = document.getElementById("classSelect").value;
    const subjectSelect = document.getElementById("subjectSelect").value;
    const chapterSelect = document.getElementById("chapterSelect").value;
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "<h3>Chapter Videos:</h3>";
    if (chapterSelect && videoLibrary[classSelect][subjectSelect][chapterSelect]) {
        const videos = videoLibrary[classSelect][subjectSelect][chapterSelect];
        Object.keys(videos).forEach(videoTitle => {
            const iframe = document.createElement("iframe");
            iframe.src = videos[videoTitle];
            iframe.width = "560";
            iframe.height = "315";
            iframe.title = videoTitle;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
        });
        videoContainer.style.display = "block";
    } else {
        videoContainer.style.display = "none";
    }
}

// Modal functionality for teacher info
function openModal(teacher) {
    const modal = document.getElementById("teacherModal");
    const modalTeacherName = document.getElementById("modalTeacherName");
    const modalTeacherPhoto = document.getElementById("modalTeacherPhoto");
    const modalTeacherDetails = document.getElementById("modalTeacherDetails");
    if (teacher === 'sudarshan') {
        modalTeacherName.textContent = "Sudarshan Kumar";
        modalTeacherPhoto.src = "sudarshan.jpg";
        modalTeacherDetails.textContent = "Qualification: B.Tech, MBA\nExpertise: Math, Physics\nExperience: Extensive teaching experience.";
    } else if (teacher === 'shweta') {
        modalTeacherName.textContent = "Dr. Shweta Kumari";
        modalTeacherPhoto.src = "shweta.jpg";
        modalTeacherDetails.textContent = "Qualification: PhD in Mathematics\nExpertise: Math, Science for Class 6-10";
    }
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("teacherModal");
    modal.style.display = "none";
}

// Fade in elements when scrolled into view
const sections = document.querySelectorAll('.partition');
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// FAQ functionality
var faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(function(faqItem) {
    var faqQuestion = faqItem.querySelector('.faq-question');
    var faqAnswer = faqItem.querySelector('.faq-answer');
    faqQuestion.addEventListener('click', function() {
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
        faqQuestion.classList.toggle('active');
    });
});

// Open Teacher Modal with specific details
function openTeacherModal(name, photo, details) {
    const modal = document.getElementById("teacherModal");
    const modalTeacherName = document.getElementById("modalTeacherName");
    const modalTeacherPhoto = document.getElementById("modalTeacherPhoto");
    const modalTeacherDetails = document.getElementById("modalTeacherDetails");

    modalTeacherName.textContent = name;
    modalTeacherPhoto.src = photo;
    modalTeacherDetails.textContent = details;

    modal.style.display = "flex";

    // Save the photo URL for the inner modal
    document.getElementById("fullSizePhoto").src = photo;
}

// Close Teacher Modal
function closeTeacherModal() {
    const modal = document.getElementById("teacherModal");
    modal.style.display = "none";
}

// Open Full-Size Photo Modal
function openPhotoModal() {
    const photoModal = document.getElementById("photoModal");
    photoModal.style.display = "flex";
}

// Close Full-Size Photo Modal
function closePhotoModal() {
    const photoModal = document.getElementById("photoModal");
    photoModal.style.display = "none";
}


function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

/* Image Slider and hero section */

let slidesContainer = document.querySelector(".slides-container");
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    // Function to Change Slide (using translateX)
    function changeSlide(next = true) {
        if (next) {
            index = (index + 1) % slides.length;
        } else {
            index = (index - 1 + slides.length) % slides.length;
        }
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto Slide Every 4 Seconds
    let slideInterval = setInterval(() => changeSlide(true), 4000);

    // Manual Next Button
    document.querySelector(".next-btn").addEventListener("click", function () {
        clearInterval(slideInterval); // Stop auto slide when manually clicking
        changeSlide(true);  // Change to next slide
        slideInterval = setInterval(() => changeSlide(true), 4000); // Restart auto slide
    });

    // Manual Prev Button
    document.querySelector(".prev-btn").addEventListener("click", function () {
        clearInterval(slideInterval); // Stop auto slide when manually clicking
        changeSlide(false); // Change to previous slide
        slideInterval = setInterval(() => changeSlide(true), 4000); // Restart auto slide
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const selector = document.querySelector(".selector-container select");
    
        if (selector) {
            selector.addEventListener("change", function() {
                this.style.borderColor = "#ffffff";  // White border on selection
                this.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.8)"; // Neon glow effect
            });
        }
    });
    /*Enroll Form Popup */
    document.getElementById("openForm").addEventListener("click", function(e) {
        document.getElementById("formPopup").style.display = "flex";
    });

    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("formPopup").style.display = "none";
    });

    window.addEventListener("click", function(event) {
        let popup = document.getElementById("formPopup");
        if (event.target === popup) {
            popup.style.display = "none";
        }    });

// Resource popup
let scrollPosition = 0; // Store scroll position

function openResourceModal(resourceType) {
    document.getElementById("popupMessage").textContent = resourceType + " will be available soon!";
    document.getElementById("resourcePopup").style.display = "flex";

    // Store current scroll position
    scrollPosition = window.scrollY;

    // Lock scroll position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
}

function closeResourceModal() {
    document.getElementById("resourcePopup").style.display = "none";

    // Restore scroll position
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
}

// Close popup when clicking outside the box
window.addEventListener("click", function(event) {
    let popup = document.getElementById("resourcePopup");
    if (event.target === popup) {
        closeResourceModal();
    }
});
   

