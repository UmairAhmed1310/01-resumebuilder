const toggleEducation = document.getElementById('toggle-education');
const toggleSkills = document.getElementById('toggle-skills');
const toggleWorkExperience = document.getElementById('toggle-work-experience');
const education_list = document.getElementById('EducationList');
const skills_list = document.getElementById('SkillList');
const workexperience_list = document.getElementById('WorkExperienceList');

toggleEducation.addEventListener('click', () => {
  if (education_list.style.display === 'none') {
    education_list.style.display = 'block';
  } else {
    education_list.style.display = 'none';
  }
});
toggleSkills.addEventListener('click', () => {
  if (skills_list.style.display === 'none') {
    skills_list.style.display = 'block';
  } else {
    skills_list.style.display = 'none';
  }
});
toggleWorkExperience.addEventListener('click', () => {
  if (workexperience_list.style.display === 'none') {
    workexperience_list.style.display = 'block';
  } else {
    workexperience_list.style.display = 'none';
  }
});