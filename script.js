var toggleEducation = document.getElementById('toggle-education');
var toggleSkills = document.getElementById('toggle-skills');
var toggleWorkExperience = document.getElementById('toggle-work-experience');
var education_list = document.getElementById('EducationList');
var skills_list = document.getElementById('SkillList');
var workexperience_list = document.getElementById('WorkExperienceList');
toggleEducation.addEventListener('click', function () {
    if (education_list.style.display === 'none') {
        education_list.style.display = 'block';
    }
    else {
        education_list.style.display = 'none';
    }
});
toggleSkills.addEventListener('click', function () {
    if (skills_list.style.display === 'none') {
        skills_list.style.display = 'block';
    }
    else {
        skills_list.style.display = 'none';
    }
});
toggleWorkExperience.addEventListener('click', function () {
    if (workexperience_list.style.display === 'none') {
        workexperience_list.style.display = 'block';
    }
    else {
        workexperience_list.style.display = 'none';
    }
});
