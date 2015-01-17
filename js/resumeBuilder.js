// "bio" JSON
var bio = {
  "name": "Jason Brunette",
  "role": "Web Developer",
  "contacts": {
    "mobile": "222-333-4444",
    "email": "jason.brunette@gmail.com",
    "github": "jbrunette",
    "twitter": "jbrunettetwitter",
    "location": "Waukesha, WI"
  },
  "welcomeMessage": "Welcome!  I'm awesome.",
  "skills": ["Being awesome", "Not being not awesome", "Writing JSON"],
  "biopic": "images/fry.jpg",
  "display": function() {

    // Create header HTML and prepend to header element, making it the first element in the header
    var header_html = HTMLheaderName.replace("%data%", this.name) + HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(header_html);

    // Create contacts HTML and append to topContacts and footerContacts
    var contacts_html = HTMLmobile.replace("%data%", this.contacts.mobile) + HTMLemail.replace("%data%", this.contacts.email) + HTMLtwitter.replace("%data%", this.contacts.github) + HTMLgithub.replace("%data%", this.contacts.twitter) + HTMLlocation.replace("%data%", this.contacts.location);
    $("#topContacts").append(contacts_html);
    $("#footerContacts").append(contacts_html);

    // Create bio pic and welcome message HTML and append to the header
    var pic_welcome_html = HTMLbioPic.replace("%data%", this.biopic) + HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(pic_welcome_html);

    // Build skills HTML and append to header
    var skills_html = HTMLskillsStart;
    for (var i = 0; i < this.skills.length; i++) {
      skills_html += HTMLskills.replace("%data%", this.skills[i]);
    }
    $("#header").append(skills_html);

    // End of function
    return true;
  }
};

// "work" JSON
var work = {
  "jobs": [{
    "employer": "The Avengers",
    "title": "Lead Shield Scrubber",
    "dates": "January 2010 - December 2014",
    "location": "New York, NY",
    "description": "Oversaw the maintenance of shields used by team members."
  }],
  "display": function() {

    // Spin through jobs, generating HTML and appending to workExperience element for each job
    for (var i = 0; i < this.jobs.length; i++) {
      var work_entry = $(HTMLworkStart);
      var work_entry_html = HTMLworkEmployer.replace("%data%", this.jobs[i].employer) + HTMLworkTitle.replace("%data%", this.jobs[i].title) + HTMLworkDates.replace("%data%", this.jobs[i].dates) + HTMLworkLocation.replace("%data%", this.jobs[i].location) + HTMLworkDescription.replace("%data%", this.jobs[i].description);
      work_entry.append(work_entry_html);
      $("#workExperience").append(work_entry);
    }

    // End of function
    return true;
  }
};

// "projects" JSON
var projects = {
  "projects": [{
    "title": "Face Book",
    "dates": "2007 - 2014",
    "description": "Developed a book, to which faces were inserted",
    "images": ["images/face-book.jpg"]
  }],
  "display": function() {
    
    // Spin through projects, generating HTML and appending to projects element for each project
    for (var i = 0; i < this.projects.length; i++) {
      var project_entry = $(HTMLprojectStart);
      var project_entry_html = HTMLprojectTitle.replace("%data%", this.projects[i].title) + HTMLprojectDates.replace("%data%", this.projects[i].dates) + HTMLprojectDescription.replace("%data%", this.projects[i].description);
      for (var j=0; j<this.projects[i].images.length; j++) {
        project_entry_html += HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
      }
      project_entry.append(project_entry_html);
      $("#projects").append(project_entry);
    }

    // End of function
    return true;
  }
};

// "education" JSON
var education = {
  "schools": [{
    "name": "Princeton",
    "location": "Los Angeles, CA",
    "degree": "Awesome",
    "majors": ["Being Awesome"],
    "dates": 1998,
    "url": "http://www.princetonia.edu"
  }],
  "onlineCourses": [{
    "title": "How to Be Awesome",
    "school": "Online School of Awesome",
    "date": 2004,
    "url": "http://www.onlineschoolofawesome.com/"
  }],
  "display": function() {
    
    // Spin through schools, generating HTML and appending to education element for each school
    for (var i = 0; i < this.schools.length; i++) {
      var school_entry = $(HTMLschoolStart);
      var school_entry_html = HTMLschoolName.replace("%data%", this.schools[i].name) + HTMLschoolDegree.replace("%data%", this.schools[i].degree) + HTMLschoolDates.replace("%data%", this.schools[i].dates) + HTMLschoolLocation.replace("%data%", this.schools[i].location) + HTMLschoolMajor.replace("%data%", this.schools[i].majors.join(", "));
      school_entry.append(school_entry_html);
      $("#education").append(school_entry);
    }

    // Spin through onlineCourses, generating HTML and appending to education element for each onlineCourses
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < this.onlineCourses.length; i++) {
      var school_entry = $(HTMLschoolStart);
      var onlineCourses_entry_html = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school) + HTMLonlineDates.replace("%data%", this.onlineCourses[i].date) + HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);
      school_entry.append(onlineCourses_entry_html);
      $("#education").append(school_entry);
    }
    // End of function
    return true;
  }

};

// Run
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

