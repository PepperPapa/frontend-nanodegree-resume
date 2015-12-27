/*
 JSON data: bio, education, work, projects
 */
 var bio = {
   "name": "钟鑫",
   "role": "软件测试工程师",
   "welcomeMessage": "感谢关注我的个人简历！",
   "contacts": {
     "mobile": "15802588192",
     "email": "zhongxin2506@outlook.com",
     "github": "PepperPapa",
     "twitter": "@zhongxin2506",
     "location": "Chang Sha"
   },
   "biopic": "images/fry.jpg",
   "skills": ["Excel", "Python", "HTML&CSS", "JavaScript"],
   "display": function() {
     var formattedHeaderRole = HTMLheaderRole.replace("%data%", this.role);
     $("#header").prepend(formattedHeaderRole);

     var formattedheaderName = HTMLheaderName.replace("%data%", this.name);
     $("#header").prepend(formattedheaderName);

     for (var contact in this.contacts) {
       var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
       formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
       $("#topContacts").append(formattedContact);
     }

     var formattedbioPic = HTMLbioPic.replace("%data%", this.biopic);
     $("#header").append(formattedbioPic);

     var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
     $("#header").append(formattedWelcomeMsg);

     if (bio["skills"].length > 0) {
       $("#header").append(HTMLskillsStart);
     }
     var formattedSkills = [];
     bio.skills.forEach(function(skill) {
       formattedSkills.push(HTMLskills.replace("%data%", skill));
     });
     formattedSkills.forEach(function(skillElement) {
       $("#skills").append(skillElement);
     });
   }
 };
 bio.display();

var education = {
 "schools": [
   {
     "name": "中南大学",
     "location": "长沙",
     "degree": "本科",
     "majors": "自动化",
     "dates": 2004,
     "url": "http://www.csu.edu.cn/"
   }
 ],
 "onlineCourses": [
   {
     "title": "C program language",
     "school": "csu",
     "date": 2002,
     "url": "http://www.csu.edu.cn/"
   }
 ],
 "display": function() {
   $("#education").append(HTMLschoolStart);

   var formattedschoolName = HTMLschoolName.replace("%data%", this.schools[0].name);
   formattedschoolName = formattedschoolName.replace("#", this.schools[0].url);
   var formattedschoolDegree = HTMLschoolDegree.replace("%data%", this.schools[0].degree);
   $(".education-entry").append(formattedschoolName + formattedschoolDegree);

   var formattedschoolDates = HTMLschoolDates.replace("%data%", this.schools[0].dates);
   $(".education-entry").append(formattedschoolDates);

   var formattedschoolLocation = HTMLschoolLocation.replace("%data%", this.schools[0].location);
   $(".education-entry").append(formattedschoolLocation);

   var formattedschoolMajor = HTMLschoolMajor.replace("%data%", this.schools[0].majors);
   $(".education-entry").append(formattedschoolMajor);

   $(".education-entry").append(HTMLonlineClasses);
   var formattedonlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[0].title);
   formattedonlineTitle = formattedonlineTitle.replace("#", this.onlineCourses[0].url);
   var formattedonlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[0].school);
   $(".education-entry").append(formattedonlineTitle + formattedonlineSchool);

   var formattedonlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[0].date);
   $(".education-entry").append(formattedonlineDates);

   var formattedonlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[0].url);
   $(".education-entry").append(formattedonlineURL);
 }
};
education.display();

var work = {
   "jobs": [
     {
       "employer": "WS group",
       "title": "testing enginer",
       "location": "Chang sha",
       "dates": "2014-12-24",
       "description": "very bad very bad very bad very bad very bad very bad" +
       "very bad very bad very bad very bad very bad very bad very bad " +
       "very bad very bad very bad very bad very bad very bad very bad very bad"
     },
     {
       "employer": "HuaWei",
       "title": "solution enginer",
       "location": "Shen zhen",
       "dates": "2008-05-09",
       "description": "great experince great experincegreat experincegreat experince"
     }
   ],
   "display": function() {
     for (index in work.jobs) {
       $("#workExperience").append(HTMLworkStart);
       var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",
                                     work.jobs[index]["employer"]);
       var formattedWorkTitle = HTMLworkTitle.replace("%data%",
                                     work.jobs[index]["title"]);
       var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
       $(".work-entry:last").append(formattedEmployerTitle);
       var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
       $(".work-entry:last").append(formattedDates);
       var formattedLocation = HTMLworkLocation.replace("%data%",
                                     work.jobs[index].location);
       $(".work-entry:last").append(formattedLocation);
       var formattedDescription = HTMLworkDescription.replace("%data%",
                                     work.jobs[index].description);
       $(".work-entry:last").append(formattedDescription);
     }
   }
 };
work.display();

var projects = {
    "projects": [
      {
        "title": "a test",
        "dates": "2008-09-01",
        "description": "a test",
        "images": ["images/197x148.gif"]
      }
    ],
    "display": function() {
      $("#projects").append(HTMLprojectStart);
      var formattedprojectTitle = HTMLprojectTitle.replace("%data%",
                                               this.projects[0].title);
      $(".project-entry").append(formattedprojectTitle);
      var formattedprojectDates = HTMLprojectDates.replace("%data%",
                                               this.projects[0].dates);
      $(".project-entry").append(formattedprojectDates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%",
                                               this.projects[0].description);
      $(".project-entry").append(formattedprojectDescription);
      var formattedprojectImage = HTMLprojectImage.replace("%data%",
                                               this.projects[0].images);
      $(".project-entry").append(formattedprojectImage);
    }
  };

projects.display();
$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});

// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

for (var contact in bio.contacts) {
  var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
  formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
  $("#footerContacts").append(formattedContact);
}
