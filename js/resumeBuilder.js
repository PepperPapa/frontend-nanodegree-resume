/*
 JSON data: bio, education, work, projects
 */
var model = {
  bio: {
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
    "skills": ["Excel", "Python", "HTML&CSS", "JavaScript"]
  },
  education: {
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
    ]
  },
  work: [
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
  projects: [
      {
        "title": "a test",
        "dates": "2008-09-01",
        "description": "a test",
        "images": ["images/197x148.gif"]
      }
  ]
};

var octopus = {
  init: function () {
    view.init();
  },
  getBio: function () {
    return model.bio;
  },
  getEdu: function () {
    return model.education;
  },
  getJobs: function () {
    return model.work;
  },
  getProjects: function () {
    return model.projects;
  }
};

var view = {
  init: function () {
    this.bioRender();
    this.eduRender();
    this.jobRender();
    this.projectsRender();
    this.mapRender();
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.backgroundColor = 'black';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.backgroundColor = 'black';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.backgroundColor = 'black';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.backgroundColor = 'black';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.backgroundColor = 'black';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.backgroundColor = 'black';
    }
    if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.backgroundColor = 'black';
    }
  },
  bioRender: function () {
    var bio = octopus.getBio();
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedHeaderRole);

    var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedheaderName);

    for (var contact in bio.contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
      formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
    }
    var formattedSkills = [];
    bio.skills.forEach(function(skill) {
      formattedSkills.push(HTMLskills.replace("%data%", skill));
    });
    formattedSkills.forEach(function(skillElement) {
      $("#skills").append(skillElement);
    });
  },
  eduRender: function () {
    var edu = octopus.getEdu();
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", edu.schools[0].name);
    formattedschoolName = formattedschoolName.replace("#", edu.schools[0].url);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", edu.schools[0].degree);
    $(".education-entry").append(formattedschoolName + formattedschoolDegree);

    var formattedschoolDates = HTMLschoolDates.replace("%data%", edu.schools[0].dates);
    $(".education-entry").append(formattedschoolDates);

    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", edu.schools[0].location);
    $(".education-entry").append(formattedschoolLocation);

    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", edu.schools[0].majors);
    $(".education-entry").append(formattedschoolMajor);

    $(".education-entry").append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", edu.onlineCourses[0].title);
    formattedonlineTitle = formattedonlineTitle.replace("#", edu.onlineCourses[0].url);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", edu.onlineCourses[0].school);
    $(".education-entry").append(formattedonlineTitle + formattedonlineSchool);

    var formattedonlineDates = HTMLonlineDates.replace("%data%", edu.onlineCourses[0].date);
    $(".education-entry").append(formattedonlineDates);

    var formattedonlineURL = HTMLonlineURL.replace("%data%", edu.onlineCourses[0].url);
    $(".education-entry").append(formattedonlineURL);
  },
  jobRender: function () {
    var jobs = octopus.getJobs();
    for (var index in jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",
                                    jobs[index].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%",
                                    jobs[index].title);
      var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", jobs[index].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedLocation = HTMLworkLocation.replace("%data%",
                                    jobs[index].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDescription = HTMLworkDescription.replace("%data%",
                                    jobs[index].description);
      $(".work-entry:last").append(formattedDescription);
    }
  },
  projectsRender: function () {
    var projects = octopus.getProjects();
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",
                                             projects[0].title);
    $(".project-entry").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",
                                             projects[0].dates);
    $(".project-entry").append(formattedprojectDates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%",
                                             projects[0].description);
    $(".project-entry").append(formattedprojectDescription);
    var formattedprojectImage = HTMLprojectImage.replace("%data%",
                                             projects[0].images);
    $(".project-entry").append(formattedprojectImage);
  },
  mapRender: function () {
    // $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
  }
};

octopus.init();
