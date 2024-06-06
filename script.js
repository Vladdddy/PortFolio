window.addEventListener('scroll', function () {
    var competencies = document.getElementById('competencies');
    var position = competencies.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        competencies.classList.add('show');
    } else if (position < window.inner) {
        competencies.classList.remove('show');
    }
});

window.addEventListener('scroll', function () {
    var skills = document.getElementById('skills');
    var position = skills.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        skills.classList.add('show');
    } else if (position < window.inner) {
        skills.classList.remove('show');
    }
});

window.addEventListener('scroll', function () {
    var certificates_carousel = document.getElementById('certificates_carousel');
    var position = certificates_carousel.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        certificates_carousel.classList.add('show');
    } else if (position < window.inner) {
        certificates_carousel.classList.remove('show');
    }
});

window.addEventListener('scroll', function () {
    var graph = document.getElementById('graph');
    var position = graph.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        graph.classList.add('show');
    } else if (position < window.inner) {
        graph.classList.remove('show');
    }
});

function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    // Add your code to handle cookie acceptance here
    console.log('Cookies accepted');
}

function declineCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    // Add your code to handle cookie decline here
    console.log('Cookies declined');
}

window.addEventListener("scroll", function () {
    var skillsSection = document.querySelector("#graph");
    var skillsSectionPosition = skillsSection.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var circularChartsSkills = skillsSection.querySelectorAll(".circular-chart");

    circularChartsSkills.forEach(function (chart) {
        if (
            skillsSectionPosition.top < windowHeight &&
            skillsSectionPosition.bottom >= 0 &&
            chart.getBoundingClientRect().top < windowHeight
        ) {
            if (!chart.classList.contains("animate")) {
                chart.classList.add("animate");
            }
        } else {
            chart.classList.remove("animate");
        }
    });


});

document.getElementById('downloadButton').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'cv.pdf';
    link.click();
});

document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById("popup");
    var userIcon = document.getElementById("userIcon");
    var span = document.getElementsByClassName("close")[0];

    userIcon.onclick = function () {
        popup.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    span.onclick = function () {
        popup.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    }
});